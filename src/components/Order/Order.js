import React from "react";
import "./Order.css";
import Swiperer from "../Swiper/Swiper";

const Works = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center flex-col gap-4 mt-[20px]">
          <h1 className=" font-bold text-[55px] text-textgreen ">
            Browse our menu
          </h1>
          <p className=" text-[18px] m-auto max-w-[580px] leading-7 ">
            Use our menu to place an order online, or{" "}
            <a href="">
              <span className="text-textgreen underline">phone</span>
            </a>{" "}
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>
      </div>

      <div className="background">
        <div className="bg-white">
          <Swiperer />
        </div>
      </div>
    </div>
  );
};

export default Works;
