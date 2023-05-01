import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import {ProductContext} from "./contexts/ProductContext"
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";


const writelocalstorage =(key,value) => {
localStorage.setItem(key,JSON.stringify(value));
}
const readlocalstorage=(key) =>{
  return JSON.parse(localStorage.getItem(key));
}
const Lskey="g0223";

const initilazecart=()=>{
  const cart =readlocalstorage(Lskey);
  if (cart===null){
    return [];
  }
  else{
              return cart;
    }
  }


function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(()=>initilazecart());

  const addItem = (item) => {
    const newcart=([...cart, item]);
    setCart(newcart);
    writelocalstorage(Lskey,newcart);
  };
  const removeitem = (item) => {
   const newcart= (cart.filter(cartItem => cartItem.id !== item.id));
   setCart(newcart);
   writelocalstorage(Lskey,newcart);
  }
  
  
  return (
    <ProductContext.Provider value={{ products, addItem ,cart,removeitem}}>
    <div className="App">
      <Navigation />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
        <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
