import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import CheckoutForm from "./checkoutForm";
import { Context } from "../store/appContext";
import styles from "../../styles/index.css";

const products = [
  {
    id: 1,
    name: "New York",
    image: "/img/RH_NY2.png",
    price: 25,
    stripePriceId: "price_1Q0AOfFOQNBOjDBoAfsHiP28",
  },
  {
    id: 2,
    name: "LA",
    image: "/img/RH_LA.png",
    price: 25,
    stripePriceId: "price_1Q0AUyFOQNBOjDBoLQShBVIX",
  },
  {
    id: 3,
    name: "Miami",
    image: "/img/RH_MI.png",
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
          <Link to="/checkout">🛒 Checkout ({store.cart.length})</Link>
          {store.cart.length > 0 && (
            <button onClick={actions.clearCart}>Clear Cart</button>
          )}
        </div>
      </div>

      <div className="productList">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img
              className="movie-modal-image"
              src={product.image}
              alt={product.name}
            />
            <p className="productPrice">${product.price}</p>
            <button
              className="addToCart"
              onClick={() =>
                store.cart.some((item) => item.id === product.id)
                  ? actions.removeFromCart(product.id)
                  : actions.addToCart(product)
              }
            >
              {store.cart.some((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <Routes>
        <Route
          path="/checkout"
          element={
            store.cart.length > 0 ? (
              <CheckoutForm />
            ) : (
              <p>Your cart is empty. Add an item to proceed.</p>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
