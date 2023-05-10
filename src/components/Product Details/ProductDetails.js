import React from "react";
import { CartState } from "../../context/Context";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const {
    state: { products },
  } = CartState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const product = products.find((p) => p._id === id);
  console.log(product);

  return (
    <div className="product-details-container">
      <BsArrowReturnLeft
        fontSize="25px"
        onClick={() => navigate(`/products`)}
      />
      <main className="product-details-main">
        <div className="product-details-img-container">
          <img src={product.image} alt="productdetailsimg" />
        </div>
        <div className="product-details-text-container">
          <h1 class="product-details-header">{product.title}</h1>
          <small class="product-reviews">{product.reviews} reviews</small>
        </div>
        <div class="product-price-container">
          <p>Rs.{product.price}</p>
          <p className="original-price">{product.original_price}</p>
          <p className="discount-percentage">
            {Math.round(
              ((product.original_price - product.price) /
                product.original_price) *
                100
            )}{" "}
            % OFF
          </p>
        </div>
        <hr />
        <p>Availibility: {product.in_stock ? "In Stock" : "Out of Stock"}</p>
        <p>Size : {product.size}</p>
        <p>Delivery : {product.delivery_time} Days</p>
        <div class="product-details-footer">
          {cart.some((p) => p._id === product._id) ? (
            <button
              className="remove-from-cart"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="add-to-cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          )}
          <Link to='/cart'>
          <button className="go-to-cart">Go To Cart</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
