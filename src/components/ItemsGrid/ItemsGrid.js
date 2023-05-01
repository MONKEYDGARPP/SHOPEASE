import React from 'react';
import './ItemsGrid.css';
import productsData from "../../db/data"

function ItemsGrid() {
  return (
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
              <button className="add-to-cart-button">Add to Cart</button>
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
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsGrid;
