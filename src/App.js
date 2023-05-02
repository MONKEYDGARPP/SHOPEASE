import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Products/ProductPage";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductPage />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/payment" element={<Payment />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
