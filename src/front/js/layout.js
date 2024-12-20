import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/home";
import CheckoutForm from "./pages/checkoutForm";
import injectContext from "./store/appContext";
import TermsAndConditions from "./pages/termsAndConditions";

// import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        {/* <ScrollToTop> */}
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CheckoutForm />} path="/checkout/" />
          <Route element={<TermsAndConditions />} path="/terms/" />
        </Routes>
        {/* <Footer /> */}
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
