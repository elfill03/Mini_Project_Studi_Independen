import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { img1 } from "../../../assets";
import { BtnOrder1 } from "../../atoms";

const Opening = () => {
  const navigate = useNavigate();
  const handleNavigateKonsultasi = useCallback(() => {
    navigate("/Konsultasi");
  }, [navigate]);
  return (
    <>
      <div className="opening container-fluid pt-5">
        <div className="row">
          <div className="col">
            <h1 className="pembuka ms-3">
              Kami Hadir Untuk <span className="mixColor">Keseimbangan</span>
              <br />
              Hidup Sehat
            </h1>
            <p className="subPembuka ms-3 mt-2">
              Website konsultasi psikologi yang menyediakan layanan konseling
              online untuk membantu individu mengatasi masalah psikologis yang
              mereka hadapi. Dengan tim terapis yang berpengalaman dan terlatih,
              Teman Cerita menyediakan layanan konseling yang ramah, aman, dan
              terpercaya bagi semua orang.
            </p>
            <BtnOrder1 onNavigate={handleNavigateKonsultasi} />
          </div>
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={img1} alt="" className="img1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Opening;
