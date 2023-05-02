import React from 'react'
import { CartState } from "../../context/Context";
import SingleProduct from "../Products/SingleProduct";
import './ProductPage.css'
import Filters from '../Filters/Filters';
// import Header from '../Header/Header';



const ProductPage = () => {
  const {
    state: { products },
    productState : { sort, byStock, byFastDelivery, byRating, searchQuery, byGender, bySize},
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    
    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => 
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.in_stock);
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if(byRating){
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    
    if(byGender){
      sortedProducts = sortedProducts.filter((prod) => {
        if (byGender === "men") {
          return prod.category === "Men";
        } else if (byGender === "women") {
          return prod.category === "Women";
        } else if (byGender === "kids") {
          return prod.category === "Kids";
        } else {
          return true; // return all products if input is not "men", "women", or "kids"
        }
      });
    }

    if(bySize) {
      sortedProducts = sortedProducts.filter((prod) => {
        if(bySize === "s"){
          return prod.size === "S";
        } else if(bySize === "m"){
          return prod.size === "M";
        } else if(bySize === "l"){
          return prod.size === "L";
        } else if(bySize === "xl"){
          return prod.size === "XL";
        } else {
          return true;
        }
      });
    }
    
    return sortedProducts;
  }

  return (
    <>
    <div className="whole_product_page">
      <Filters />
      <div className="main_product_page">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod._id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default ProductPage