import React, { createContext, useReducer } from "react";
import "./cart.css";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
import { Product } from "./Product";
import Context from "./Context";

export const contextt = createContext();
const initialState = {
  item: Product,
  totalAmount: 0,
  totalItem: 0,
};
const reducer = (state, action) => {
  return state;
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <contextt.Provider value={{ ...state }}>
        <Context />
      </contextt.Provider>
    </div>
  );
};

export default Home;
