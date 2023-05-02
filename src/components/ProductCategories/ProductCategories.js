import React from "react";
import "./ProductCategories.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="product-categories-container">
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg"
            alt="Men"
          />
          <div className="category-name">Men</div>
        </Link>
      </div>
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22120556/2023/2/25/31818595-3bda-4e8b-a93b-6cfc566126541677314970376KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset1.jpg"
            alt="Women"
          />
          <div className="category-name">Women</div>
        </Link>
      </div>
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/278538380_10160534480103221_9151159539343775963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Vvbi9lKl8J8AX_PDeRD&_nc_ht=scontent.fccu18-1.fna&oh=00_AfBoYUg6x7XpzgSD5vESbjtSDesfgHt3yuuqhP6xjr3-bA&oe=6455A177"
            alt="Kids"
          />
          <div className="category-name">Kids</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategories;
