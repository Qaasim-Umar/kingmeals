import { Link } from "react-router-dom";
import FlowerFrame from "../FlowerFrame";
import "./productcard.css";

function ProductCard({
  bg,
  animated,
  src,
  alt,
  title,
  price,
  productDescription,
  productId,
  children,
}) {
  return (
    <div className="pc-wrap flex justify-center items-center gap-8">
      <div className="p-image">
        <FlowerFrame bg={bg} animated={animated}>
          <img src={src} alt={alt} width="600px" height="600px" />
        </FlowerFrame>
      </div>

      {(title || price) && (
        <div className="pc-content space-y-2 text-left">
          {title && <h3 className="pc-title">{title}</h3>}
          {price && <p className="pc-price">{`₦${price}`}</p>}
          <div className="w-[340px] text-[16px] px-1">{productDescription}</div>

          {productId ? (
            <Link to={`/product/${productId}`} className="pc-order-btn">
              Order Food
            </Link>
          ) : (
            <button className="bg-[#097968] px-3 py-2 text-white">
              {children}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
