import React, { useState } from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/February_2023/BAU_UNREC/Federal/Shoes/Updated/Apay/Apay_3000._CB592918654_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg",
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-page">
      <div className="image-carousel">
      <Link to="/products">
        <div
          className="image-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="homepage_picture"
              className="image"
            />
          ))}
        </div>
        </Link>
        <button className="arrow-button prev-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="arrow-button next-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      
    </div>
  );
}

export default HomePage;
