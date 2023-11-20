import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { img21 } from "../../../assets";
import { BtnDetail } from "../../atoms";

const PesananSaya = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleNavigateDetailPesanan = useCallback(() => {
    navigate("/Detail_pesanan");
  }, [navigate]);

  useEffect(() => {
    axios
      .get("https://645c89be250a246ae3073046.mockapi.io/User")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div>
        <center>
          <h1
            style={{
              paddingTop: "125px",
              paddingBottom: "126px",
              fontSize: "36px",
              backgroundColor: "#f4feff",
              fontFamily: "Poppins"
            }}
          >
            Tidak ada pesanan, silahkan melakukan pemesanan terlebih dahulu
          </h1>
        </center>
      </div>
    );
  }

  return (
    <>
      <div className="pesananSaya container-fluid pb-5">
        <h1 className="text-center pb-4">Pesanan Saya</h1>
        <div className="row m-auto ">
          {data.map((item) => (
            <div className="cardPesanan text-center col-md-3 col-lg-5 mb-4" key={item.id}>
              <center>
                <img src={img21} alt="" />
              </center>
              <h2>{item.username}</h2>
              <h3>({item.jenis_layanan})</h3>
              <BtnDetail onNavigate={handleNavigateDetailPesanan} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PesananSaya;
