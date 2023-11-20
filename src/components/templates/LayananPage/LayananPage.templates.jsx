import React from "react";
import { LinkBS } from "../../atoms";
import { Footer, Header, JenisLayanan } from "../../molecules";
import "./LayananPage.style.css";

const LayananPage = () => {
  return (
    <>
      <LinkBS />
      <Header />
      <JenisLayanan />
      <Footer />
    </>
  );
};

export default LayananPage;
