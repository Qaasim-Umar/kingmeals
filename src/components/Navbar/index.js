import { useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import LinkTop from "../LinkTop";
import Logo from "../Logo";
import { Icon } from "../Icon";
import "./navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // ✅ ADD THIS

function Navbar({ children }) {
  const [open, setOpen] = useState(false);

  // ✅ GET CART
  const { cart } = useCart();

  // ✅ CALCULATE TOTAL ITEMS
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const toggle = useCallback(() => {
    setOpen((_open) => !_open);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="plain">
          <Logo full />
        </Link>
      </div>

      <div className="flex items-center h-[2.5rem] gap-3 md:h-[3.1rem]">
        <nav className="navbar-nav" data-open={open ? "" : null}>
          <NavLink to="/" className="navbar-link" onClick={close}>
            Home
          </NavLink>
          <NavLink to="/product" className="navbar-link" onClick={close}>
            Order
          </NavLink>
          <NavLink to="/faq" className="navbar-link" onClick={close}>
            FaQ
          </NavLink>
          <NavLink to="/contact" className="navbar-link" onClick={close}>
            Contact
          </NavLink>
        </nav>

        {/* 🔥 CART ICON */}
        <Link to="/Cart">
          <div className="bg-white md:p-4 p-3 rounded-sm relative">
            <div className="text-white z-10 md:left-10 left-7 -top-2 absolute">
              <p className="bg-green-500 text-[16px] px-2 py-[1px] rounded-full">
                {cartCount}
              </p>
            </div>
            <FaCartPlus style={{ color: "#087f5b" }} />
          </div>
        </Link>

        <button
          className="navbar-toggle"
          data-open={open ? "" : null}
          onClick={toggle}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <LinkTop />
    </header>
  );
}

export default Navbar;
