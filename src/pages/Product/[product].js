import ProductCard from "../../components/ProductCard";
import FlowerFrame from "../../components/FlowerFrame";
import { Icon } from "../../components/Icon";
import "./product.css";
import data from "../../data";
import { Link } from "react-router-dom";
// import Swiperer from "../../components/Swiper/Swiper";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function ProductPage({ children }) {
  return (
    <>
      {/* <Swiperer/> */}

      <div className="product-hero">
        <div className="product-hero-container">
          <h1>Get your food delivered, or pick-up in store.</h1>
          <p>
            We pride ourselves in the quality of cooking. We spend hours in our
            test kitchens exploring ways to improve our recipes.
          </p>
          <p>- Nandos Chicken</p>
          <span className="product-hero-icon">
            <Icon name="ethnic" />
          </span>
        </div>
      </div>
      <ul>
        {data.map((category) => (
          <li key={category.id} className="product-list">
            <div className="product-list-header">
              <div className="product-list-icon ">
                <FlowerFrame
                  icon={category.icon}
                  bg={category.color}
                  animated
                />
              </div>
              <h2 className="product-list-title">{category.label}</h2>
              <p className="product-list-description">{category.desc}</p>
            </div>
            <ul className="product-list-grid">
              {category.menu.map((product) => (
                <li key={product.id} className="product-list-gridcell ">
                  <ProductCard
                    animated
                    src={`/images/dish/${product.image}`}
                    title={product.title}
                    price={product.price}
                    bg={category.color}
                    productDescription={product.productDescription}
                  >
                    <Link
                    key={product.id}
                      to={`/product/${product.id}`}
                      className="shadow hover:scale-105 transition"
                    >
                      <button className="bg-[#097968] px-3 py-1 text-white">
                        Order Food
                      </button>
                    </Link>
                  </ProductCard>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductPage;
