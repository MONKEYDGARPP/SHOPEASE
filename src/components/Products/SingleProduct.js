import React from "react";
import { CartState } from "../../context/Context";
import './SingleProduct.css'
import Rating from "../Rating/Rating"
const SingleProduct = ({ prod }) => {
  // console.log(prod.name);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart)
  // console.log(prod);
  return (
    <div className="product-card">
      <img src={prod.image} alt={prod.name} />
      <h2>{prod.title}</h2>
      <p className="price">₹{prod.price}</p>
      <div className="ratings">
        <Rating rating={prod.rating}/> 
        <p class="reviews">
      {prod.reviews} Reviews
      </p>
      </div>      
      {cart.some((p) => p._id === prod._id) ? (
        <button className="add-to-cart"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add-to-cart"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: prod,
            })
          }
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
