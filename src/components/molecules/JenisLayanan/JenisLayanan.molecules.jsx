import React from "react";
import { img10, img11, img12, img13, img14, img9 } from "../../../assets";

const JenisLayanan = () => {
  return (
    <>
      <div className="pilihanLayanan container-fluid pb-5">
        <h1 className="text-center pb-4">
          Pilih Konsultasi Yang Anda Butuhkan
        </h1>
        <div className="row ">
          <div className="cardLayanan text-center col-3">
            <center>
              <img src={img9} alt="" />
            </center>
            <h2>Anxiety</h2>
            <h3>Kecemasan</h3>
          </div>
          <div className="cardLayanan text-center col-3">
            <center>
              <img src={img10} alt="" />
            </center>
            <h2>Romance</h2>
            <h3>Percintaan</h3>
          </div>
          <div className="cardLayanan text-center col-3">
            <img src={img11} alt="" />
            <h2>Family</h2>
            <h3>Keluarga</h3>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="cardLayanan text-center col-3">
            <img src={img12} alt="" />
            <h2>Deppresion</h2>
            <h3>Depresi</h3>
          </div>
          <div className="cardLayanan text-center col-3">
            <img src={img13} alt="" />
            <h2>Mentally</h2>
            <h3>Mental</h3>
          </div>
          <div className="cardLayanan text-center col-3">
            <img src={img14} alt="" />
            <h2>Friendship</h2>
            <h3>Pertemanan</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default JenisLayanan;
