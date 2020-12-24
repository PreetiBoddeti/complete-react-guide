import React, {Component} from "react";
import Aux from "../../../hoc/Auxiliary";

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('[OrderSumamry] WillUpdate');
  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return(
      <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredents:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
      <button btntype="Danger" onClick={this.props.purchaseCancelled}>CANCEL</button>
      <button btntype="Success" onClick={this.props.purchaseContinued}>CONTINUE</button>
    </Aux>
    );
 }
}
  
export default OrderSummary;
