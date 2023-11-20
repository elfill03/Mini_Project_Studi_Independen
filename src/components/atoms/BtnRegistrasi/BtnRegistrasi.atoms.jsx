import React from "react";

const BtnRegistrasi = ({onNavigate}) => {
  return (
    <>
      <a href="#" className="register">
        <button className="btnRegister" onClick={onNavigate}>Registrasi</button>
      </a>
    </>
  );
};

export default BtnRegistrasi;
