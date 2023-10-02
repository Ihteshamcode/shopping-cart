import React, { useContext } from "react";
import "./cart.css";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
import { contextt } from "./Home";
const Context = () => {
  const { item } = useContext(contextt);

  return (
    <>
      <header>
        <div className="continue-shopping">
          <h3>Continue shopping</h3>
        </div>
        <div className="cart-icon">
          <AiOutlineShoppingCart size={34} />
          <p>1</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">1</span>items in shopping
          cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curr, i) => {
                return <Item key={i} {...curr} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart total : <span>1000rs</span>
          </h3>
          <button className="checkout">checkout</button>
        </div>
      </section>
    </>
  );
};

export default Context;
