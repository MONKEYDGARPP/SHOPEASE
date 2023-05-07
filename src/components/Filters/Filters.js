import React from 'react'
import { CartState } from "../../context/Context";
import './Filters.css'
// import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart } from 'react-icons/ai';

const Filters = () => {
    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
      } = CartState();
      console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div class="filters">
        <span className="title">Filters</span>
        <div class="filters_options">
        <span>
        <label className="radio-container">
            Price - Low to high
            <input
                type="radio"
                name="group1"
                onChange={() =>
                productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                })
                }
                checked={sort === "lowToHigh" ? true : false}
            />
            <span className="checkmark"></span>
            </label>
        </span>
        <span>
            <label>
            Price - High to low
                <input 
                type="radio"
                onChange={()=>
                productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"highToLow"
                })
                } 
                checked={sort === "highToLow" ? true : false}
                />
            </label>
        </span>
        <span>
            <label>
                Include Out of Stock
                <input 
                type="checkbox"
                onChange={()=>
                productDispatch({
                    type:"FILTER_BY_STOCK"
                })
                }
                checked = {byStock}  
                />  
            </label>
        </span>
        <span>
            <label>
                Fast Delivery
                <input 
                type="checkbox"
                onChange={()=>
                productDispatch({
                    type:"FILTER_BY_DELIVERY"
                })
                }
                checked={byFastDelivery}  
                />  
            </label>
        </span>
        <span>
            <label>Choose Gender   </label>
            <select onChange={(e) => productDispatch({ type: "FILTER_BY_GENDER", payload: e.target.value })}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            </select>
        </span>

        <span>
            <label>Choose Size   </label>
            <select onChange={(e) => productDispatch({ type: "FILTER_BY_SIZE", payload: e.target.value })} >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            </select>
        </span> 

        <button 
        onClick={() =>
        productDispatch({
            type: "CLEAR_FILTERS",
          })
        }>Clear Filters</button>
        </div>
    </div>
  )
}

export default Filters
