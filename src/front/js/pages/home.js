import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import CheckoutForm from "./checkoutForm";
import { Context } from "../store/appContext";
import styles from "../../styles/index.css";
// import miami from "/public/RH_MI2.1.png";
// import newyork from "/public/RH_NY4.1.jpg";
// import losangeles from "/public/RH_LA4.1.png";
import { Footer } from "../component/footer";
import whatsAppLA from "/public/WhatsAppLA.svg.png";
import whatsAppNY from "/public/WhatsAppNY.svg.png";
import whatsAppMI from "/public/WhatsAppMI.svg.png";

const products = [
  {
    id: 1,
    name: "New York",
    image: "🍎",
    wa: whatsAppNY,
    price: 25,
    stripePriceId: "price_1Q0AOfFOQNBOjDBoAfsHiP28",
  },
  {
    id: 2,
    name: "Los Angeles",
    image: "🎥",
    wa: whatsAppLA,
    price: 25,
    stripePriceId: "price_1Q0AUyFOQNBOjDBoLQShBVIX",
  },
  {
    id: 3,
    name: "Miami",
    image: "🌴",
    wa: whatsAppMI,
    price: 25,
    stripePriceId: "price_1Q0ASpFOQNBOjDBoXfBS7u3U",
  },
];

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="page">
      <div className="cart">
        <span className="nav-title">HOMESHARING</span>
        <div className="cartIcon">
          <Link to="/checkout">🛒 </Link>
          <Link style={{ fontSize: "15px" }} to="/checkout">
            ({store.cart.length})
          </Link>
        </div>
      </div>

      <div className="productList">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="home-group">
              <span className="price">${product.price}</span>
              <div className="group-div">
                <div className="city-image">{product.image}</div>{" "}
                <div className="product-text-div">
                  <p className="product-card-text">{product.name}</p>
                  <p className="product-card-text">
                    Housing Group Subscription
                  </p>
                </div>
              </div>
              {store.cart.some((item) => item.id === product.id) ? (
                // <button
                //   className="remove"
                //   onClick={() => actions.removeFromCart(product.id)}
                // >
                //   Remove from Cart
                // </button>
                <></>
              ) : (
                <button
                  className="addToCart"
                  onClick={() => actions.addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
