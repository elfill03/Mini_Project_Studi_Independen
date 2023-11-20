import React from "react";

const BtnOrder1 = ({onNavigate}) => {
  return (
    <>
      <a href="#" className="konsultasi">
        <button className="btnKonsultasi mt-4" onClick={onNavigate}>Konsultasi Sekarang</button>
      </a>
    </>
  );
};

export default BtnOrder1;
