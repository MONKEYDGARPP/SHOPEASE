// import  { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'

function Header() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (

     <nav>
      <Link to='/'>
        <h2 className='nav-h2'>ShopEasy</h2>
      </Link>
      <ul className='nav-links'>
        <Link to='/products'><li>Female</li></Link>
        <Link to='/products'><li>Male</li></Link>
        <Link to='/products'><li>Kids</li></Link>
        <Link to='/products'><li>All Products</li></Link>
      </ul>

        <div className='search-bar'>
          <CiSearch />
          <input 
            type='text' 
            placeholder='What you looking for'/>
        </div>
        <Link to='/cart'>
        <button className='cart'>   
          <CgShoppingCart size={22} />
        </button>
      </Link> 
    </nav>
  );
}

export default Header;
