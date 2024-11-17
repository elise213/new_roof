import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import CheckoutForm from "./checkoutForm";
import { Context } from "../store/appContext";
import styles from "../../styles/index.css";
import miami from "/public/RH_MI2.png";
import newyork from "/public/RH_NY4.jpg";
import losangeles from "/public/RH_LA4.png";
import { Footer } from "../component/footer";
import whatsApp from "/public/WhatsApp.svg.png";

const products = [
  {
    id: 1,
    name: "New York",
    image: newyork,
    price: 25,
    stripePriceId: "price_1Q0AOfFOQNBOjDBoAfsHiP28",
  },
  {
    id: 2,
    name: "Los Angeles",
    image: losangeles,
    price: 25,
    stripePriceId: "price_1Q0AUyFOQNBOjDBoLQShBVIX",
  },
  {
    id: 3,
    name: "Miami",
    image: miami,
    price: 25,
    stripePriceId: "price_1Q0ASpFOQNBOjDBoXfBS7u3U",
  },
];

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="page">
      <div className="cart">
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
            <span className="price">${product.price}</span>
            {/* <img className="whats" src={whatsApp}></img> */}
            <img
              className="city-image"
              src={product.image}
              alt={product.name}
            />
            {store.cart.some((item) => item.id === product.id) ? (
              <button
                className="remove"
                onClick={() => actions.removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="addToCart"
                onClick={() => actions.addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
