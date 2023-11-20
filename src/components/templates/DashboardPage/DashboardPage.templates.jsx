import React from "react";
import { LinkBS } from "../../atoms";
import { Footer, Header, Opening, Tahapan, Testimoni } from "../../molecules";

import "./DashboardPage.style.css";

const DashboardPage = () => {
  return (
    <>
      <LinkBS />
      <Header />
      <Opening />
      <Tahapan />
      <Testimoni />
      <Footer />
    </>
  );
};

export default DashboardPage;
