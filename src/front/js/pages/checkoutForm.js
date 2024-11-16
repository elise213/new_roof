import React, { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Context } from "../store/appContext";
import styles from "../../styles/index.css";

// Load Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

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

      // Redirect to Stripe Checkout
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
        <button className="backButton">Back to Shop</button>
      </a>

      {store.cart.length > 0 ? (
        <div className="cartDiv">
          <ul>
            {store.cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button
                  className="remove"
                  onClick={() => actions.removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="total">Total: ${totalAmount}</p>

          <div className="termsDiv">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="terms">
              By checking this box you agree to the{" "}
              <a href="/terms">terms of subscription</a> and{" "}
              <a href="/rules">rules of the group</a>.
            </label>
          </div>

          {isChecked ? (
            <button className="addToCart" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          ) : (
            <p>Please accept the terms to proceed.</p>
          )}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CheckoutForm;