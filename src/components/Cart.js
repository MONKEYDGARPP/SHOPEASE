import React from 'react'
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      
// console.log(cart);
  return (
    <>
    <Link to="/">Home</Link>
    <button
    onClick={()=>
    dispatch({
      type:"CLEAR_CART"
    })}
    >Clear Cart</button>
    <div className='cart_page'>
        {cart.map((prod)=>(
            <div className='cart_items'>
              <img src={prod.image} alt="cart_item" />
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <button
            onClick={()=>
            dispatch({
                type:"ADD_ONE_MORE",
                payload:{
                    id:prod._id,
                    qty:prod.qty
                }
            })}
            >+</button>
            <p>{prod.qty}</p>
            <button
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
        ))}
    </div>
    </>
  )
}

export default Cart