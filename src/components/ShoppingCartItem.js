import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { useContext } from "react";


import { ProductContext } from "../contexts/ProductContext";
const Item = ({item}) => {
  const { removeitem} = useContext(ProductContext);
  const { cart } = useContext(ProductContext);
  console.log(cart)
  return (
    <ScCartItem>
      <img src={item.image} alt={`${item.title} book`} />

      <ScCartItemDetails>
        <h2>{item.title}</h2>
        <p>$ {item.price}</p>
        <button  onClick={() => removeitem(item)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
