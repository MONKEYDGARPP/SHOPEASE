import React from 'react'
import { CartState } from "../context/Context"
import SingleProduct from './SingleProduct';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import ItemsGrid from './ItemsGrid/ItemsGrid';

const Home = () => {

    const {
        state: {products},
    } = CartState()
    console.log(products);

  return (
    <>
    <Header />
    <HomePage />
    <ItemsGrid />
    {/* <Link to="/cart">Cart</Link> */}
    <div className='home_page'>
      {products.map((prod)=> (
        <SingleProduct prod={prod} key={prod._id} />
      ))}
    </div>
    </>
  )
}

export default Home