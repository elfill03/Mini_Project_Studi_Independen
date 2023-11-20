import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BtnRegistrasi } from "../../atoms";

const Header = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    const navbarLinks = document.querySelectorAll(".navbar");
    navbarLinks.forEach(function (link) {
      if (link.href === currentUrl) {
        link.classList.add("active");
      }
    });
  }, []);

  const navigate = useNavigate();
  const handleNavigateKonsultasi = useCallback(() => {
    navigate("/Konsultasi");
  }, [navigate]);
  return (
    <>
      <header>
        <h1 className="judul">Teman Cerita</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="navbar">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Layanan" className="navbar">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/Psikolog" className="navbar">
                Psikolog
              </Link>
            </li>
            <li>
              <Link to="/Pesanan" className="navbar">
                Pesanan
              </Link>
            </li>
          </ul>
          <BtnRegistrasi onNavigate={handleNavigateKonsultasi} />
        </nav>
      </header>
    </>
  );
};

export default Header;
