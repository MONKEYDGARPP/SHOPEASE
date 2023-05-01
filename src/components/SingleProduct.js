import React from 'react'
import { CartState } from '../context/Context';

const SingleProduct = ({prod}) => {
    // console.log(prod.name);
    const {
        state: { cart },
        dispatch,
      } = CartState();
// console.log(prod);
  return (
    <div className='singleproduct_page'>
        <p>{prod.name}</p>
      <img src={prod.image} alt={prod.name} />
        <p>{prod.price}</p>
        {cart.some((p) => p._id === prod._id) ? (
            <button
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
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            > Add to Cart
            </button>
          )}
    </div>
  )
}

export default SingleProduct