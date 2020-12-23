import React from "react";
import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredents:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <button btntype="Danger" onClick={props.purchaseCancelled}>CANCEL</button>
      <button btntype="Success" onClick={props.purchaseContinued}>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
