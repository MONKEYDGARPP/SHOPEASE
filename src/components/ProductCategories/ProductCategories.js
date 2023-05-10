import React from "react";
import "./ProductCategories.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div class="product-categories">
      <div class="subtitle">
        <h2>Shop by Category</h2>
      </div>
      <div class="categories">
        <div class="category">
          <Link to='/products'>
          <img src="https://cdn.sanity.io/images/dow10h3v/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png" alt="men" />
          </Link>
          <p>Men</p>
        </div>
        <div class="category">
        <Link to='/products'>
          <img src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" alt="women" />
          </Link>
          <p>Women</p>
        </div>
        <div class="category">
        <Link to='/products'>
          <img src="https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20308.jpg?w=2000" alt="kid" />
          </Link>
          <p>Kids</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
