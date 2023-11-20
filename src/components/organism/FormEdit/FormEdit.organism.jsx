import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { LinkBS } from "../../atoms";
import { Footer, Header } from "../../molecules";

const FormEdit = ({bookingId}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [initialValues, setInitialValues] = useState(null);
  
    useEffect(() => {
      axios
        .get(`https://645c89be250a246ae3073046.mockapi.io/User/${bookingId}`)
        .then((response) => {
          setInitialValues(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [bookingId]);
  
    useEffect(() => {
      axios
        .get("https://645c89be250a246ae3073046.mockapi.io/User")
        .then((response) => {
          setBookings(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const formik = useFormik({
      initialValues: {
        username: "",
        nomor: "",
        email: "",
        jenis_layanan: "",
        tanggal: "",
      },
      onSubmit: (values) => {
        const isDuplicate = bookings.some(
          (booking) =>
            booking.id !== bookingId &&
            booking.jenis_layanan === values.jenis_layanan &&
            booking.tanggal === values.tanggal
        );
  
        if (isDuplicate) {
          alert(
            "Tidak dapat melakukan pemesanan dengan jenis layanan dan hari yang sama untuk kedua kalinya"
          );
          return;
        }
  
        axios
          .put(
            `https://645c89be250a246ae3073046.mockapi.io/User/${bookingId}`,
            values
          )
          .then(() => {
            setShowSuccessMessage(true);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      enableReinitialize: true,
      validateOnChange: false,
    });
  
    useEffect(() => {
      let timer;
      if (showSuccessMessage) {
        timer = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
      return () => clearTimeout(timer);
    }, [showSuccessMessage]);
  
    useEffect(() => {
      if (initialValues) {
        formik.setValues(initialValues);
      }
    }, [initialValues, formik]);
  
  return (
    <>
    <LinkBS/>
    <Header/>
      <form
        className="needs-validation"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="cardKonsultasi mt-4 mb-4 pt-1">
          <div className="cardForm d-flex">
            <div className="mt-4 me-5">
              <label htmlFor="username">Nama:</label>
              <br />
              <input
                type="text"
                id="username"
                className="nameForm form-control"
                name="username"
                defaultValue=""
                placeholder="Nama"
                autoFocus=""
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && (
                <div className="error-msg">{formik.errors.username}</div>
              )}
              <br />
              <label htmlFor="nomor">No. Telepon:</label>
              <br />
              <input
                type="tel"
                id="nomor"
                className="nomorForm form-control"
                name="nomor"
                defaultValue=""
                placeholder="No. Telepon"
                autoFocus=""
                value={formik.values.nomor}
                onChange={formik.handleChange}
              />
              {formik.errors.nomor && (
                <div className="error-msg">{formik.errors.nomor}</div>
              )}
              <br />
            </div>
            <div className="mt-4 ms-5">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                className="emailForm form-control"
                name="email"
                defaultValue=""
                placeholder="Email"
                autoFocus=""
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div className="error-msg">{formik.errors.email}</div>
              )}
              <br />
              <label htmlFor="jenis_layanan">Jenis Layanan:</label> <br />
              <select
                id="jenis_layanan"
                className="jenisForm form-select"
                name="jenis_layanan"
                autoFocus=""
                value={formik.values.jenis_layanan}
                onChange={formik.handleChange}
              >
                <option value="" hidden>
                  Pilih Layanan
                </option>
                <option value="Kecemasan">Kecemasan</option>
                <option value="Percintaan">Percintaan</option>
                <option value="Keluarga">Keluarga</option>
                <option value="Depresi">Depresi</option>
                <option value="Mental">Mental</option>
                <option value="Pertemanan">Pertemanan</option>
              </select>
              {formik.errors.jenis_layanan && (
                <div className="error-msg">{formik.errors.jenis_layanan}</div>
              )}
            </div>
          </div>
          <div className="row mt-2">
            <center>
              <label htmlFor="tanggal">Pilih Tanggal Konsultasi</label>
              <br />
              <input
                type="date"
                id="tanggal"
                className="tanggalForm"
                name="tanggal"
                defaultValue=""
                value={formik.values.tanggal}
                onChange={formik.handleChange}
              />
              {formik.errors.tanggal && (
                <div className="error-msg">{formik.errors.tanggal}</div>
              )}
            </center>
          </div>
          <div className="konsultasi3">
            <center>
              <button
                type="submit"
                id="submit"
                className="btnKonsultasi3"
                onClick={formik.handleSubmit}
              >
                Save
              </button>
            </center>
          </div>
        </div>
      </form>
      <Footer/>
    </>
  );
};

export default FormEdit;
