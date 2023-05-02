import React from 'react'
import { Link } from 'react-router-dom';
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
      <div className="checkout-payment-options">
        <h2>Select a payment option:</h2>
        <div className="payment-option">
          <input type="radio" id="payment-option-1" name="payment-option" />
          <label htmlFor="payment-option-1">NetBanking</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="payment-option-2" name="payment-option" />
          <label htmlFor="payment-option-2">Upi Apps</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="payment-option-3" name="payment-option" />
          <label htmlFor="payment-option-3">Credit / Debit Card</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="payment-option-4" name="payment-option" />
          <label htmlFor="payment-option-4">Cash On Delivery</label>
        </div>
      </div>
      <div className="checkout-summary">
        <h2>Summary of your items</h2>
        <p>Total Items: {totalQty}</p>
        <p>Total Price: {totalPrice}</p>
        <Link to="/payment">
          <button className="pay-button">Pay Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
