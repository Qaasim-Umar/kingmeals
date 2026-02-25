import { useState } from "react";
import FlowerFrame from "../../components/FlowerFrame";
import data from "../../data/index.json";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/index";
import { useCart } from "../../context/CartContext";


export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart();

  // 🔹 Find category that contains this product
  const category = data.find((cat) => cat.menu.some((item) => item.id === id));

  // 🔹 Find product inside that category
  const product = category?.menu.find((item) => item.id === id);

  if (!product || !category) {
    return <NotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-4">
        <Link to="/" className="hover:text-[#006A4E] transition-colors">Home</Link>
        <span> / </span>
        <Link to="/product" className="hover:text-[#006A4E] transition-colors">Order</Link>
        <span> / </span>
        <span className="text-gray-600">{product.title}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex justify-center">
          <div
            className={`w-80 h-80 rounded-full border-8 overflow-hidden flex`}
            style={{ borderColor: category.color }}
          >
            <FlowerFrame bg={category.color} animated>
              <img
                src={`/images/dish/${product.image}`}
                className="w-full h-full object-cover"
              />
            </FlowerFrame>
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>

          <p className="text-2xl font-bold text-[#006A4E] mb-2">
            ₦{product.price}
          </p>

          <p className="text-gray-600 mb-6">{product.productDescription}</p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center justify-start gap-7">
            <div className="flex items-center border border-2-[#006A4E] rounded-md px-4 py-2">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span className="mx-4">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>

            <button
              onClick={() => addToCart(product, qty)}
              className="bg-[#006A4E] hover:bg-teal-600 text-white px-8 py-3 rounded-md font-semibold"
            >
              Add to Cart – ₦{product.price * qty}
            </button>
          </div>
        </div>
      </div>

      {/* Cross Sell — SAME CATEGORY */}
      <div className="mt-16 bg-teal-50 py-10 rounded-xl">
        <h2 className="text-center text-2xl font-bold mb-6">
          View More Side Dish
        </h2>

        <ul className="product-list">
          <ul className="product-list-grid">
            {category.menu
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <li key={item.id} className="product-list-gridcell">
                  <ProductCard
                    animated
                    src={`/images/dish/${item.image}`}
                    title={item.title}
                    price={item.price}
                    bg={category.color}
                    productDescription={item.productDescription}
                  >
                    <Link to={`/product/${item.id}`} className="shadow hover:scale-105 transition">
                      <button className="bg-[#097968] px-3 py-1 text-white">Order Food</button>
                    </Link>
                  </ProductCard>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
