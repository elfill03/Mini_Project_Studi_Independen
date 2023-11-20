import React from "react";
import { LinkBS } from "../../atoms";
import { Footer, Header } from "../../molecules";
import { FormKonsultasi } from "../../organism";
import "./KonsultasiPage.style.css";

const KonsultasiPage = () => {
  return (
    <>
      <LinkBS />
      <Header />
      <FormKonsultasi />
      <Footer />
    </>
  );
};

export default KonsultasiPage;
