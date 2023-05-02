import React from 'react';
import './ItemsGrid.css';
import productsData from "../../db/data"
import { CartState } from "../../context/Context";


function ItemsGrid() {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <><h2 className='items-grid-h2'>Trending Products</h2>
    <div className="items-grid">
      <div className="row">
        {productsData.slice(0, 8).map((item) => (
          <div key={item._id} className="item">
            <img src={item.image} alt={`Item ${item._id}`} className="item-image" />
            {item.rating} | {item.reviews}
            <div className="item-details">
            {item.title} <br/>
              <div className="item-price">
              ₹{item.price}
              </div>
              {cart.some((p) => p._id === item._id) ? (
        <button className="add-to-cart-button"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add-to-cart-button"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            })
          }
        >
          Add to Cart
        </button>
      )}
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {productsData.slice(8, 16).map((item) => (
          <div key={item._id} className="item">
            <img src={item.image} alt={`Item ${item._id}`} className="item-image" />
            {item.rating}☆ | {item.reviews}
            <div className="item-details">
            {item.title} <br/>
              <div className="item-price">
                ${item.price}
              </div>
              {cart.some((p) => p._id === item._id) ? (
        <button className="add-to-cart-button"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add-to-cart-button"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            })
          }
        >
          Add to Cart
        </button>
      )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ItemsGrid;
