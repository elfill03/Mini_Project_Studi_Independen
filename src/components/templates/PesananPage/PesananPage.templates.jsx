import React from "react";
import { LinkBS } from "../../atoms";
import { Footer, Header, PesananSaya } from "../../molecules";
import "./PesananPage.style.css";

const PesananPage = () => {
  return (
    <>
      <LinkBS />
      <Header />
      <PesananSaya />
      <Footer />
    </>
  );
};

export default PesananPage;
