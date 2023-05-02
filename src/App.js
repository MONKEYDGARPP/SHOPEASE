import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Products/ProductPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
