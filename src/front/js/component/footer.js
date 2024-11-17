import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Footer = () => (
  <footer>
    <div className="footer-div-1">
      <div className="sitemap">
        <Link to="/">HOME</Link>
        <Link to="/terms">RULES & TERMS</Link>
      </div>
      <div className="footer-div-2">
        <div className="socials">
          <p>FOLLOW</p>
          <Link to="https://www.instagram.com/ccexarts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
      </div>
    </div>
    <p className="footer-text">HOMESHARING</p>
  </footer>
);
