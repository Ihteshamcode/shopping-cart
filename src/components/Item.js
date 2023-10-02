import React from "react";
import "./cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { HiOutlineMinusSm } from "react-icons/hi";

const Item = (props) => {
  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={props.img} alt="img" />
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.desciption}</p>
        </div>
        <div className="add-minus-quantity">
          <GrFormAdd size={30} className="fa" />
          <input type="text" placeholder="1" />
          <HiOutlineMinusSm size={30} className="fa" />
        </div>
        <div className="price">
          <h3>{props.price}</h3>
        </div>
        <div className="remove-item">
          <AiOutlineDelete
            size={30}
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
