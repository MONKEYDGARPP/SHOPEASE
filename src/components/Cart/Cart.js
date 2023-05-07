import React from 'react'
import { CartState } from '../../context/Context';
import { Link } from 'react-router-dom';
import './Cart.css'
import {BsArrowReturnLeft} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      
console.log(cart);
const navigate = useNavigate();

// const cart_size = cart.length;
const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
const cartWithIndividualPrice = cart.map(item => {
  return {
    ...item,
    price: item.price * item.qty
  }
});
const totalPrice = cartWithIndividualPrice.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div class="cart-page">
    <div className='cart_page'>
    <BsArrowReturnLeft fontSize="25px" onClick={() => navigate(`/products`)}/>
    <h2>Your Cart</h2>
        {cart.map((prod)=>(
            <div className='cart_items'>
              <img src={prod.image} alt="cart_item" />
              <div class="cart-items-details">
              <div class="cart-item-details">
              <p style={{ fontWeight: 'bold' }}>{prod.title}</p>
            <p>Price : {prod.price}</p>
            <p>Qty : {prod.qty}</p>
            <p>Discount : {Math.round(((prod.original_price - prod.price)/prod.original_price)*100)} % </p>
            <div class="cart-all-buttons">
            <button className='cart-add-delete-button'
            onClick={()=>
            dispatch({
                type:"ADD_ONE_MORE",
                payload:{
                    id:prod._id,
                    qty:prod.qty
                }
            })}
            >+</button>
            <button className='cart-add-delete-button'
            onClick={()=>
            dispatch({
                type:"DELETE_ONE_FROM_CART",
                payload:{
                    id:prod._id,
                    qty:prod.qty
                }
            })}
            >-</button>
            </div>
            </div>
            </div>
            </div>
        ))}
    </div>
    <div class="cart-checkout-buttons">
      <div class="checkout-buttons">
    <div class="right-side-cart">
    <div class="details-of-cart">
      <div class="apply-coupons">
      <h4>Apply Coupons</h4>
      <button className='coupon-button'>Apply</button>
      </div>
    <div class="total-price-of-cart">
      <p>Cart Items : {totalQty}</p>
      <p>Total Price : {totalPrice}</p>
    {/* <button class="cart-button">Checkout</button> */}
    </div>
    <button className='cart-button'
    onClick={()=>
    dispatch({
      type:"CLEAR_CART"
    })}
    >Clear Cart</button>
      <Link to='/checkout'> <button className='checkout-button' >Checkout</button></Link>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cart