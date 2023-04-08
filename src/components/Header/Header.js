
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-content">
          We're open & available for takeaway & delivery.{" "}
          <Link to="/product">Order Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
