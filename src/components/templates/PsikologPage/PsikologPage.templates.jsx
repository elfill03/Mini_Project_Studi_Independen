import React from "react";
import { LinkBS } from "../../atoms";
import { DaftarPsikolog, Footer, Header } from "../../molecules";
import "./PsikologPage.style.css";

const PsikologPage = () => {
  return (
    <>
      <LinkBS />
      <Header />
      <DaftarPsikolog />
      <Footer />
    </>
  );
};

export default PsikologPage;
