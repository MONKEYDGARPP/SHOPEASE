import React from "react";
import "./ProductCategories.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <>
    <h1>Shop by Category</h1>
    <div className="product-categories-container">
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg"
            alt="Men"
          />
          <h1 className="category-name">Men</h1>
        </Link>
      </div>
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22120556/2023/2/25/31818595-3bda-4e8b-a93b-6cfc566126541677314970376KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset1.jpg"
            alt="Women"
          />
          <h1 className="category-name">Women</h1>
        </Link>
      </div>
      <div className="product-category">
        <Link to="/products">
          <img
            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Kids"
          />
          <h1 className="category-name">Kids</h1>
        </Link>
      </div>
    </div>
    </>
  );
};

export default ProductCategories;
