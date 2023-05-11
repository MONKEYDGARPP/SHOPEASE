// import  { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'
import { CartState } from '../../context/Context';
function Header() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const {
    productDispatch,
    state: { cart },
  } = CartState();

  const length = cart.length;

  const handleFilterByDelivery = (gender) => {
    productDispatch({type:"FILTER_BY_GENDER", payload:gender})
  }
  return (
     <nav>
      <Link to='/'>
        <h2 className='nav-h2'>ShopEasy</h2>
      </Link>
      <ul className='nav-links'>
        <Link to='/products'><li onClick={()=>handleFilterByDelivery('women')}>Female</li></Link>
        <Link to='/products'><li onClick={()=>handleFilterByDelivery('men')}>Male</li></Link>
        <Link to='/products'><li onClick={()=>handleFilterByDelivery('kids')}>Kids</li></Link>
        <Link to='/products'><li onClick={()=>handleFilterByDelivery('')}>All Products</li></Link>
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
          <span>{length}</span>
        </button>
      </Link> 
    </nav>
  );
}

export default Header;
