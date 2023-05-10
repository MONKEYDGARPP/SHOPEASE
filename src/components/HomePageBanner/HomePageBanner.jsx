import './HomePageBanner.css'
import React from 'react'
import {Link} from 'react-router-dom'
const HomePageBanner = () => {
  return (
    <section className='features-section'>
      <div className='content'>
        <div className='left'>
          <div className="feature-background">
            Different from others
          </div>
          <div>
            <h3>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>100% Handmade Products</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='right'>
          <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75" width={300} height={350} alt='img' />
          <div>
            <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link to='/products'>
              <button className='btn' type='button'>See All Products</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageBanner