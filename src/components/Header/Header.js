import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
      <div className="logo">ShopEasy</div>
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="cart-icon">
      <Link to="/cart"><AiOutlineShoppingCart size={42} /></Link>
      </div>
    </header>
  );
}

export default Header;
