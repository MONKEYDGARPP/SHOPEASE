import "./App.css";
import { faker } from "@faker-js/faker";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return(
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  </div>
  ) 
}

export default App;
