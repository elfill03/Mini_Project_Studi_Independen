import React from "react";

const BtnDetail = ({ onNavigate }) => {
  return (
    <>
      <a href="#" className="detail">
        <button className="btnDetail mt-4" onClick={onNavigate}>
          Detail
        </button>
      </a>
    </>
  );
};

export default BtnDetail;
