import React from 'react'
// import { Link } from 'react-router-dom';
import './Checkout.css'
import { CartState } from '../../context/Context';


const Checkout = () => {

  const {
    state: { cart }
  } = CartState();

  // console.log(cart)

  const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
const cartWithIndividualPrice = cart.map(item => {
  return {
    ...item,
    price: item.price * item.qty
  }
});
const totalPrice = cartWithIndividualPrice.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="checkout-page">
      <div class="left-side-address">
        <div className="address">
          <h1>Address Details</h1>
        </div>
        <div class="address-details">
          <h2>Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt facere a placeat officiis illum excepturi dolor sunt veniam maiores voluptates.</p>
        </div>
        <button>Add New Adress</button>
      </div>
      <div class="right-side-details">
          <h1>Details</h1>
          <div class="price-details">
          <p>Total Items in Your Cart : {totalQty}</p>
          <p>Total Price of cart : {totalPrice}</p>
          </div>
          <button>Pay Now</button>
      </div>
    </div>
  )
}

export default Checkout
