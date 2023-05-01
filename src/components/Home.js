import React from 'react'
import { CartState } from "../context/Context"
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

const Home = () => {

    const {
        state: {products},
    } = CartState()
    console.log(products);

  return (
    <>
    <Link to="/cart">Cart</Link>
    <div className='home_page'>
      {products.map((prod)=> (
        <SingleProduct prod={prod} key={prod._id} />
      ))}
    </div>
    </>
  )
}

export default Home