import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LinkBS } from "../../atoms";
import { DetailPesananSaya, Footer, Header } from "../../molecules";
import "./DetailPesanan.style.css";

const DetailPesananPage = () => {
  const navigate = useNavigate();
  const handleNavigatePesanan = useCallback(() => {
    navigate("/Pesanan");
  }, [navigate]);
  return (
    <>
      <LinkBS />
      <Header />
      <DetailPesananSaya onNavigate={handleNavigatePesanan} />
      <Footer />
    </>
  );
};

export default DetailPesananPage;
