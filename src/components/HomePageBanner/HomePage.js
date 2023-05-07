import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';
import banner from "./banner.png"
function HomePage() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const images = [
  //   "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
  // ];

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  return (
    <div className="banner">
      <Link to="/products">
      <img
        className="banner-image"
        src={banner}
        alt="Shopping App Banner"
      />
      </Link>
    </div>
  );
}

export default HomePage;
