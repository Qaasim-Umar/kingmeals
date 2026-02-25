import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./checkout.css";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "", phone: "", firstName: "", lastName: "", address: "", city: "",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length ? 1500 : 0;
  const total = subtotal + delivery;
  const fmt = (n) => n.toLocaleString("en-NG");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const allFilled = Object.values(form).every((v) => v.trim() !== "");

  return (
    <div className="co-page">
      {/* Step breadcrumb */}
      <div className="co-steps">
        <Link to="/Cart" className="hover:underline">Cart</Link>
        <span>/</span>
        <span className="co-step-active">Details</span>
        <span>/</span>
        <span>Payment</span>
      </div>

      <h1 className="co-title">Your <span>Details</span></h1>

      <div className="co-layout">
        {/* Form */}
        <div className="co-form-section">
          <h2 className="co-section-title">Contact Information</h2>
          <input
            className="co-field"
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />
          <div className="co-spacer" />
          <input
            className="co-field"
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <div className="co-spacer" />
          <div className="co-spacer" />

          <h2 className="co-section-title">Delivery Address</h2>
          <div className="co-row">
            <input
              className="co-field"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              className="co-field"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="co-spacer" />
          <input
            className="co-field"
            name="address"
            placeholder="Street address"
            value={form.address}
            onChange={handleChange}
          />
          <div className="co-spacer" />
          <input
            className="co-field"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        {/* Summary */}
        <div className="co-summary">
          <h2 className="co-summary-title">Order Summary</h2>

          <div className="co-summary-items">
            {cart.map((item) => (
              <div className="co-summary-item" key={item.id}>
                <span>{item.title} × {item.qty}</span>
                <span>₦{fmt(item.price * item.qty)}</span>
              </div>
            ))}
          </div>

          <div className="co-summary-row">
            <span>Subtotal</span>
            <span>₦{fmt(subtotal)}</span>
          </div>
          <div className="co-summary-row">
            <span>Delivery</span>
            <span>₦{fmt(delivery)}</span>
          </div>
          <div className="co-summary-total">
            <span>Total</span>
            <span className="co-summary-total-val">₦{fmt(total)}</span>
          </div>

          <button
            className="co-btn"
            disabled={!allFilled || cart.length === 0}
            onClick={() => navigate("/Payment")}
          >
            Continue to Payment →
          </button>

          <Link to="/Cart" className="co-back">← Back to cart</Link>
        </div>
      </div>
    </div>
  );
}
