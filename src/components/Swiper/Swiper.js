// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";
import data from '../../data/index.json';
import FlowerFrame from "../FlowerFrame";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +("Menu" + " ") + (index + 1 ) + "</span>";
    },
  };

  return (
    <> 
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  
        <ul>
        {data.slice(1, 2).map((category) => (
          <li key={category.id} className="product-list">
            <div className="product-list-header">
              <div className="product-list-icon">
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
              {category.menu.slice(0, 4).map((product) => (
                <li key={product.id} className="product-list-gridcell">
                 
                    <ProductCard
                      animated
                      src={`/images/dish/${product.image}`}
                      title={product.title}
                      price={product.price}
                      bg={category.color}
                    ></ProductCard>
                
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >Add to cart</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
          
          
          
          
           </SwiperSlide>
        <SwiperSlide> 

        <ul>
        {data.slice(2, 3).map((category) => (
          <li key={category.id} className="product-list">
            <div className="product-list-header">
              <div className="product-list-icon">
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
              {category.menu.slice(0, 4).map((product) => (
                <li key={product.id} className="product-list-gridcell">
                 
                    <ProductCard
                      animated
                      src={`/images/dish/${product.image}`}
                      title={product.title}
                      price={product.price}
                      bg={category.color}
                    ></ProductCard>
                
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >Add to cart</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>


        </SwiperSlide>
        <SwiperSlide>




        <ul>
        {data.slice(3, 4).map((category) => (
          <li key={category.id} className="product-list">
            <div className="product-list-header">
              <div className="product-list-icon">
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
              {category.menu.slice(0, 4).map((product) => (
                <li key={product.id} className="product-list-gridcell">
                 
                    <ProductCard
                      animated
                      src={`/images/dish/${product.image}`}
                      title={product.title}
                      price={product.price}
                      bg={category.color}
                    ></ProductCard>
                
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >Add to cart</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}