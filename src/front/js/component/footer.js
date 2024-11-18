import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import whatsApp from "/public/WhatsApp.svg.png";

export const Footer = () => (
  <footer>
    <div className="footer-div-1">
      <div className="sitemap">
        <Link to="/">HOME</Link>
        <Link to="/terms">RULES & TERMS</Link>
        <div>
          CONTACT
          <img className="whats" src={whatsApp}></img>
        </div>

        <a href="https://billing.stripe.com/p/login/5kA9BZ1aE7ZDgAo9AA">
          ACCOUNT / SUBSCRIPTION
        </a>
      </div>
      <div className="footer-div-2">
        <div className="socials">
          <p>FOLLOW</p>
          <a href="https://www.instagram.com/ricky_eats_out/">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
    <p className="footer-text">HOMESHARING</p>
  </footer>
);
