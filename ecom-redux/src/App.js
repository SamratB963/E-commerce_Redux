import './App.css';
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Products from "./component/Products"
import Product from "./component/Product"
import {Routes, Route} from "react-router-dom"
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/products" element = {<Products />} />
        <Route path ="/products/:id" element = {<Product />} />
        <Route path ="/about" element = {<About />} />
        <Route path ="/contact" element = {<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;
