import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Nama terlalu pendek!")
    .max(20, "Nama terlalu panjang!")
    .matches(/^[a-zA-Z ]*$/, "Nama hanya boleh terdiri dari huruf dan spasi")
    .required("Nama harus diisi!"),
  nomor: Yup.number()
    .typeError("Nomor Telepon harus berupa angka!")
    .required("Nomor Telepon harus diisi!"),
  email: Yup.string().email("Email tidak valid").required("Email harus diisi!"),
  jenis_layanan: Yup.string().required("Jenis Layanan harus diisi!"),
  tanggal: Yup.string().required("Tanggal Konsultasi harus diisi!"),
});
const FormKonsultasi = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [bookings, setBookings] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      nomor: "",
      email: "",
      jenis_layanan: "",
      tanggal: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      const isDuplicate = bookings.some(
        (booking) =>
          booking.jenis_layanan === values.jenis_layanan &&
          booking.tanggal === values.tanggal
      );

      if (isDuplicate) {
        alert("Tidak dapat melakukan pemesanan dengan jenis layanan dan hari yang sama untuk kedua kalinya");
        return;
      }

      axios
        .post("https://645c89be250a246ae3073046.mockapi.io/User", values)
        .then((response) => {
          console.log(response.data);
          resetForm();
          setShowSuccessMessage(true);
          setBookings([...bookings, response.data]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
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
  return (
    <>
      <div className="KonsultasiSection container-fluid pb-2">
        <h1 className="text-center">
          Isi Form Berikut Untuk Melakukan Konsultasi
        </h1>
        {showSuccessMessage && (
          <div className="alert alert-success text-center" role="alert">
            Konsultasi berhasil disubmit!
          </div>
        )}
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
                  Konsultasi
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormKonsultasi;
