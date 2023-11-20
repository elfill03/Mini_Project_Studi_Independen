import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailPesananSaya = ({ onNavigate }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = axios.get(
        "https://645c89be250a246ae3073046.mockapi.io/User"
      );
      const psikologsResponse = axios.get(
        "https://645993c88badff578e104e27.mockapi.io/Psikolog"
      );
      const [usersData, psikologsData] = await Promise.all([
        usersResponse,
        psikologsResponse,
      ]);
      const formattedData = usersData.data.map((user) => {
        const psikolog = psikologsData.data.find(
          (psikolog) => psikolog.jenis_layanan === user.jenis_layanan
        );
        return { ...user, psikologName: psikolog.name };
      });
      setData(formattedData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://645c89be250a246ae3073046.mockapi.io/User/${id}`
        );
        setData(data.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {data.map((item) => (
        <div className="detailPesanan container-fluid pb-2" key={item.id}>
          <h1 className="text-center">Detail Pesanan</h1>
          <div className="cardDetail mt-4 mb-4 pt-1">
            <i class="backIcon bi bi-x-lg" onClick={onNavigate}></i>
            <h2 className="text-center mt-4">Pesanan dari {item.username}</h2>
            <div className="d-flex">
              <div className="output ms-5">
                <h3>Nama</h3>
                <h3>Email</h3>
                <h3>Jenis Layanan</h3>
                <h3>Nama Psikolog</h3>
                <h3>Tanggal Konsultasi</h3>
              </div>

              <div className="cardOutput row">
                <h4>: {item.username}</h4>
                <h4>: {item.email}</h4>
                <h4>: {item.jenis_layanan}</h4>
                <h4>: {item.psikologName}</h4>
                <h4>: {item.tanggal}</h4>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://google.com/" className="edit">
                <button
                  className="btnEdit me-3"
                  onClick={() => alert("Mohon maaf fitur edit dalam pengerjaan")}
                >
                  Edit
                </button>
              </a>
              <a
                href="#"
                className="delete"
                onClick={() => handleDelete(item.id)}
              >
                <button className="btnDelete ms-3">Delete</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailPesananSaya;
