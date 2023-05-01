import React from "react";
import { ScCartCheckout } from "./scParts";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const { cart } = useContext(ProductContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} item={item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
