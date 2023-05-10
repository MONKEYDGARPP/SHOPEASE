import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';
// import {CgShoppingCart} from 'react-icons/cg'

function HomePage() {
  return(
    <section className='event-container'>
    <div className='event-banner'>
      <div className='event-banner-left'>
        
        <div className='event-card'>
          <div className='content'>
            <Link to='/products'>
            <h3>GET UP TO <span>60%</span></h3>
            <p>For the summer season</p>
            </Link>
          </div>
          <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75" alt='event' />
        </div>

        <div className='event-card'>
          <h3>GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button>PROMOCODE</button>
        </div>
      </div>

      <div className='event-banner-right'>
        <div className='event-banner-right-1'>
          <div className='details'>
            <p>Flex Sweatshirt</p>
            <div className='price'>
              <span>₹1000.00</span>
              <span>₹750.00</span>
            </div>
          </div>
          <Link to='/products'>
          <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75" alt='event' />
          </Link>
          </div>

        <div className='event-banner-right-2'>
          <div className='details'>
            <p>Flex Push Button Bomber</p>
            <div className='price'>
              <span>₹2250.00</span>
              <span>₹1900.00</span>
            </div>
          </div>
          <Link to='/products'>
          <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75" alt='event' />
          </Link>
          </div>
      </div>
    </div>
    
  </section>
  )
}

export default HomePage;
