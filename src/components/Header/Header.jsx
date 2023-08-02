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
    loggedin,
    loginDispatch,
  } = CartState();

  const length = cart.length
  const handleFilterByDelivery = (gender) => {
    productDispatch({type:"FILTER_BY_GENDER", payload:gender})
  }

  const handleSearch = (e) => {
    productDispatch({
      type:"FILTER_BY_SEARCH",
      payload: e.target.value,
    })
  }

  const handleLogin = () => {
    loginDispatch({ type: "LOG_IN" });
    console.log(loggedin)
  }

  const handleLogout = () => {
    loginDispatch({ type: "LOG_OUT" });
  }
  console.log(loggedin)

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
            placeholder='What you looking for' onChange={handleSearch}/>
        </div>
        <div className="signup-login">
          {
          loggedin.isLoggedIn ? null : <button className='auth-button'>Signup</button>
          }
          { 
          loggedin.isLoggedIn ? null : <button className='auth-button' onClick={handleLogin}>Login</button>
          }
          {
            loggedin.isLoggedIn ? <button className='auth-button' onClick={handleLogout}>Logout</button> : null
          }
        </div>

        {
          loggedin.isLoggedIn ? (
            <Link to='/cart'>
              <button className='cart'>
                <CgShoppingCart size={22} />
                <span>{length}</span>
              </button>
            </Link>
          ) : null
        }
        
    </nav>
  );
}

export default Header;
