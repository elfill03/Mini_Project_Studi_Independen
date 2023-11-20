import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid pt-4 pb-4">
        <div className="row">
          <div className="col-5">
            <h1>Teman Cerita</h1>
            <p>
              Jl. Ketintang No. 156, Gayungan,
              <br /> Surabaya, Jawa Timur 60231
            </p>
          </div>
          <div className="col-4">
            <h1>Register</h1>
            <Link to="/Konsultasi" className="ord">
              <p>Jadwalkan Sekarang</p>
            </Link>
          </div>
          <div className="col-3">
            <h1>Kontak Kami</h1>
            <p>+62(85854311133)</p>
            <div className="mail d-flex">
              <i className="bi bi-envelope" />
              <p className="ms-1" style={{ cursor: "default" }}>
                teman_cerita@gmail.com
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-center pt-5">©TEMAN CERITA, 2023. ALL RESERVED</h3>
      </footer>
    </>
  );
};

export default Footer;
