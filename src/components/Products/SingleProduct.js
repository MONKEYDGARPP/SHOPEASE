import React from 'react';
import { CartState } from '../../context/Context';
import './SingleProduct.css';
import Rating from '../Rating/Rating';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = ({ prod }) => {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const notify = () => toast.info('Added to cart', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: prod,
    });
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod,
    });
    notify();
  };

  const isInCart = cart.some((p) => p._id === prod._id);

  return (
    <div className="product-card">
      <img
        src={prod.image}
        alt={prod.name}
        onClick={() => navigate(`/product/${prod._id}`)}
      />
      <h2>{prod.title}</h2>
      <p className="price">₹{prod.price}</p>
      <div className="ratings">
        <Rating rating={prod.rating} />
        <p className="reviews">{prod.reviews} Reviews</p>
      </div>
      {isInCart ? (
        <button className="remove-from-cart" onClick={removeFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
