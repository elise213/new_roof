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
        <Link to="/">
          CONTACT
          <img className="whats" src={whatsApp}></img>
        </Link>

        <a href="https://billing.stripe.com/p/login/5kA9BZ1aE7ZDgAo9AA">
          ACCOUNT
        </a>
      </div>
    </div>
    <p className="footer-text">RICKY'S HOMESHARING</p>
  </footer>
);
