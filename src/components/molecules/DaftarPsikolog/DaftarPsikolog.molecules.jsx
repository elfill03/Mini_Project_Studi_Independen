import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnOrder2 } from "../../atoms";

const DaftarPsikolog = () => {
  const [psikolog, setPsikolog] = useState([]);
  const navigate = useNavigate();

  const handleNavigateLandingPage = useCallback(() => {
    navigate("/Konsultasi");
  }, [navigate]);
  useEffect(() => {
    fetch("https://645993c88badff578e104e27.mockapi.io/Psikolog")
      .then((response) => response.json())
      .then((data) => setPsikolog(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="psikolog container-fluid pt-3 pb-5">
        <h1 className="text-center mb-5">Daftar Psikolog Yang Siap Melayani</h1>
        <div className="row m-auto">
          {psikolog &&
            psikolog.map((psikolog) => (
              <div className="col-md-6 col-lg-4 mb-4" key={psikolog.id}>
                <div className="cardPsikolog">
                  {psikolog ? (
                    <>
                      <center>
                        <img src={psikolog.avatar} alt="" />
                      </center>
                      <h2>{psikolog.name}</h2>
                      <h3>({psikolog.jenis_layanan})</h3>
                      <h4>
                        Melayani via :
                        <span style={{ fontWeight: "lighter", marginLeft: 10 }}>
                          <i className="bi bi-telephone" /> Voice Call
                        </span>
                        <span style={{ fontWeight: "lighter", marginLeft: 10 }}>
                          <i className="bi bi-phone" /> Video Call
                        </span>
                      </h4>
                      <p>{psikolog.deskripsi_psikolog}</p>
                      <center>
                        <BtnOrder2 onNavigate={handleNavigateLandingPage}/>
                      </center>
                    </>
                  ) : (
                    <h1 className="text-center" style={{color:"#000000"}}>Loading...</h1>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DaftarPsikolog;