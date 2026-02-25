import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./cart.css";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length ? 1500 : 0;
  const total = subtotal + delivery;

  const fmt = (n) => n.toLocaleString("en-NG");

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <h1 className="cart-title">
          Your <span>Cart</span>
        </h1>
        <div className="cart-breadcrumb">
          <span className="step-active">Cart</span>
          <span className="sep">→</span>
          <span>Checkout</span>
          <span className="sep">→</span>
          <span>Payment</span>
        </div>
      </div>

      <div className="cart-layout">
        {cart.length === 0 ? (
          /* Empty State */
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/product">Browse the Menu</Link>
          </div>
        ) : (
          <>
            {/* Items column */}
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Image */}
                  <div className="cart-item-img-wrap">
                    <img
                      src={`/images/dish/${item.image}`}
                      alt={item.title}
                    />
                  </div>

                  {/* Info */}
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.title}</p>
                    <p className="cart-item-desc">{item.productDescription}</p>
                    <p className="cart-item-unit-price">₦{fmt(item.price)} each</p>
                  </div>

                  {/* Controls */}
                  <div className="cart-item-controls">
                    {/* Quantity stepper */}
                    <div className="qty-stepper">
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="qty-value">{item.qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <span className="cart-item-subtotal">
                      ₦{fmt(item.price * item.qty)}
                    </span>

                    {/* Remove */}
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary panel */}
            <div className="cart-summary">
              <h2 className="cart-summary-title">Order Summary</h2>

              <div className="summary-row">
                <span>
                  Subtotal{" "}
                  <span className="summary-badge">
                    {cart.length} item{cart.length !== 1 ? "s" : ""}
                  </span>
                </span>
                <span className="summary-value">₦{fmt(subtotal)}</span>
              </div>

              <div className="summary-row">
                <span>Delivery fee</span>
                <span className="summary-value">₦{fmt(delivery)}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span className="summary-value">₦{fmt(total)}</span>
              </div>

              <Link to="/CheckOut" className="cart-checkout-btn">
                Proceed to Checkout →
              </Link>

              <Link to="/product" className="cart-continue-link">
                ← Continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
