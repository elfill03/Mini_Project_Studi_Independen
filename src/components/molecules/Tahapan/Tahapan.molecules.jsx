import React from "react";
import { img2, img3, img4 } from "../../../assets";

const Tahapan = () => {
  return (
    <>
      <div className="container-fluid pt-4">
        <h1 className="tahapKonsultasi text-center">
          <span className="mixColor">Tahapan</span>
          <br />
          Konsultasi
        </h1>
        <div className="row mb-5 mt-5">
          <div className="card1 col-3">
            <center>
              <img src={img2} alt="" className="cardImage" />
            </center>
            <h1 className="tahap ms-1">Hubungi Psikolog</h1>
            <p className="tahapan ms-1">
              Lorem ipsum dolor sit amet consectetur. Pellentesque et ipsum
              volutpat mattis quis ullamcorper sagittis tortor. Fermentum
              integer risus elit blandit.
            </p>
          </div>
          <div className="card2 col-3">
            <center>
              <img src={img3} alt="" className="cardImage" />
            </center>
            <h1 className="tahap ms-1">Atur Janji</h1>
            <p className="tahapan ms-1">
              Lorem ipsum dolor sit amet consectetur. Pellentesque et ipsum
              volutpat mattis quis ullamcorper sagittis tortor. Fermentum
              integer risus elit blandit.
            </p>
          </div>
          <div className="card1 col-3">
            <center>
              <img src={img4} alt="" className="cardImage" />
            </center>
            <h1 className="tahap ms-1">Jadwal Kontrol</h1>
            <p className="tahapan ms-1">
              Lorem ipsum dolor sit amet consectetur. Pellentesque et ipsum
              volutpat mattis quis ullamcorper sagittis tortor. Fermentum
              integer risus elit blandit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tahapan;
