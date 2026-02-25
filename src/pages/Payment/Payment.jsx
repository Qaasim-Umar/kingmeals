import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "../CheckOut/checkout.css";
import "./payment.css";

const METHODS = [
  {
    id: "card",
    icon: "💳",
    label: "Card Payment",
    sub: "Visa, Mastercard, Verve",
  },
  {
    id: "bank",
    icon: "🏦",
    label: "Bank Transfer / USSD",
    sub: "Direct bank & mobile transfer",
  },
  {
    id: "pod",
    icon: "🛵",
    label: "Pay on Delivery",
    sub: "Cash at your door",
  },
];

export default function Payment() {
  const { cart } = useCart();
  const [method, setMethod] = useState("card");
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [paid, setPaid] = useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = cart.length ? 1500 : 0;
  const total = subtotal + delivery;
  const fmt = (n) => n.toLocaleString("en-NG");

  // Format card number with spaces
  const fmtCard = (v) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  // Format MM/YY
  const fmtExpiry = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + " / " + d.slice(2) : d;
  };

  if (paid) {
    return (
      <div className="pay-success">
        <div className="pay-success-card">
          <div className="pay-success-glow" />
          <div className="pay-success-icon">
            <FaCheckCircle size={64} color="var(--primary)" />
          </div>
          <h1 className="pay-success-title">Order Confirmed!</h1>
          <p className="pay-success-msg">
            Thank you! Your order is being prepared. 🍽️
          </p>

          <div className="pay-success-ref">
            Order <strong>#KM{Math.floor(100000 + Math.random() * 900000)}</strong>
          </div>

          <div className="pay-success-items">
            {cart.map((item) => (
              <div className="pay-success-row" key={item.id}>
                <span>{item.title} × {item.qty}</span>
                <span>₦{fmt(item.price * item.qty)}</span>
              </div>
            ))}
            <div className="pay-success-row pay-success-row--total">
              <span>Total Paid</span>
              <span>₦{fmt(total)}</span>
            </div>
          </div>

          <div className="pay-success-eta">
            🛵 Estimated delivery: <strong>30–45 mins</strong>
          </div>

          <div className="pay-success-actions">
            <Link to="/" className="co-btn pay-success-btn">
              Back to Home
            </Link>
            <Link to="/product" className="pay-success-link">
              Order more food →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="co-page">
      {/* Breadcrumb */}
      <div className="co-steps">
        <Link to="/Cart" className="hover:underline">Cart</Link>
        <span>/</span>
        <Link to="/CheckOut" className="hover:underline">Details</Link>
        <span>/</span>
        <span className="co-step-active">Payment</span>
      </div>

      <h1 className="co-title">
        Complete <span>Payment</span>
      </h1>

      <div className="co-layout">
        {/* Left — methods */}
        <div className="co-form-section">
          <h2 className="co-section-title">Select Payment Method</h2>

          {/* Method tabs */}
          <div className="pay-tabs">
            {METHODS.map((m) => (
              <button
                key={m.id}
                className={`pay-tab ${method === m.id ? "pay-tab--active" : ""}`}
                onClick={() => setMethod(m.id)}
              >
                <span className="pay-tab-icon">{m.icon}</span>
                <span className="pay-tab-label">{m.label}</span>
                <span className="pay-tab-sub">{m.sub}</span>
              </button>
            ))}
          </div>

          {/* Card form */}
          {method === "card" && (
            <div className="pay-card-panel">
              {/* Visual card preview */}
              <div className="pay-card-preview">
                <div className="pay-card-chip">●●●</div>
                <div className="pay-card-number">
                  {cardNum || "•••• •••• •••• ••••"}
                </div>
                <div className="pay-card-footer">
                  <span>{expiry || "MM / YY"}</span>
                  <span className="pay-card-brand">VISA</span>
                </div>
              </div>

              <input
                className="co-field"
                placeholder="Card number"
                value={cardNum}
                maxLength={19}
                onChange={(e) => setCardNum(fmtCard(e.target.value))}
              />
              <div className="co-spacer" />
              <div className="co-row">
                <input
                  className="co-field"
                  placeholder="MM / YY"
                  value={expiry}
                  maxLength={7}
                  onChange={(e) => setExpiry(fmtExpiry(e.target.value))}
                />
                <input
                  className="co-field"
                  placeholder="CVC"
                  maxLength={3}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
                />
              </div>
            </div>
          )}

          {/* Bank Transfer */}
          {method === "bank" && (
            <div className="pay-info-panel">
              <p className="pay-info-label">Transfer to this account:</p>
              <div className="pay-bank-detail">
                <span className="pay-bank-name">Kings Meal</span>
                <span className="pay-bank-num">0123 456 789</span>
                <span className="pay-bank-bank">GTBank</span>
              </div>
              <p className="pay-info-note">
                Send exactly <strong>₦{fmt(total)}</strong> and your order will be confirmed once payment is received.
              </p>
            </div>
          )}

          {/* Pay on Delivery */}
          {method === "pod" && (
            <div className="pay-info-panel">
              <p className="pay-info-label">Pay when your order arrives 🛵</p>
              <p className="pay-info-note">
                Have <strong>₦{fmt(total)}</strong> ready in cash. Our rider will collect on delivery.
              </p>
            </div>
          )}
        </div>

        {/* Right — summary */}
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
            disabled={cart.length === 0}
            onClick={() => setPaid(true)}
          >
            {method === "card" && `Pay Now — ₦${fmt(total)}`}
            {method === "bank" && "I've Made the Transfer"}
            {method === "pod" && "Confirm Order"}
          </button>

          <p className="co-secure">🔒 Secured by Paystack / Flutterwave</p>
          <Link to="/CheckOut" className="co-back">← Back to details</Link>
        </div>
      </div>
    </div>
  );
}