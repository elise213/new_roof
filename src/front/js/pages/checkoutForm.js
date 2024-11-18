import React, { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Context } from "../store/appContext";
import styles from "../../styles/index.css";
import { Footer } from "../component/footer";
import { Avatar, Menu, MenuItem, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Load Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

console.log(
  "Stripe Publishable Key:",
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

const CheckoutForm = () => {
  const { store, actions } = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // Calculate total amount when the cart changes
  useEffect(() => {
    const total = store.cart.reduce((sum, item) => sum + item.price, 0);
    setTotalAmount(total);
  }, [store.cart]);

  const handleCheckout = async () => {
    console.log("Starting checkout with cart:", store.cart);

    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe failed to initialize");
      alert("Stripe initialization failed. Please try again.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: store.cart }), // Send the entire cart
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Backend error: ${errorText}`);
      }

      const data = await response.json();
      console.log("Backend response:", data);

      if (!data.sessionId) {
        throw new Error("sessionId not found in the backend response.");
      }
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error("Stripe redirect error:", result.error.message);
        alert("There was an error with Stripe checkout. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
      alert("Failed to start checkout. Check the console for details.");
    }
  };

  return (
    <div className="checkoutPage">
      <a href="/">
        <Button startIcon={<ArrowBackIosIcon />} className="backButton">
          Back to Shop
        </Button>
      </a>

      {store.cart.length > 0 ? (
        <div className="cartDiv">
          <ul>
            {store.cart.map((item, index) => (
              <li key={index}>
                <span className="name-checkout">{item.name} Housing Group</span>
                <span className="price-checkout">${item.price}</span>
                <button
                  className="remove-cart"
                  onClick={() => actions.removeFromCart(item.id)}
                  title={`Remove ${item.name} from your cart`}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          <p className="total">Total: ${totalAmount}</p>

          <div className="termsDiv">
            <input
              type="checkbox"
              className="terms_checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className="terms">
              By checking this box you agree to the <a href="/terms">rules </a>{" "}
              of the group, and <a href="/terms">terms </a> of the subscription.{" "}
              {"  "}
              {!isChecked && "Please accept the terms to proceed."}
            </span>
          </div>

          {isChecked ? (
            <button
              className="addToCart"
              style={{ borderRadius: "4px" }}
              onClick={handleCheckout}
            >
              Proceed to Payment
            </button>
          ) : (
            <p></p>
          )}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Footer />
    </div>
  );
};

export default CheckoutForm;
