import React from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
const Navigation = (props) => {
  const { cart } = useContext(ProductContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
