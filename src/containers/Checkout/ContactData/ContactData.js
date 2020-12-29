import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    // alert('You Continue!!');
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: "Prakash",
        address: {
          street: "Test Street",
          zipcode: "16278",
          country: "India",
        },
        email: "preeti@gmail.com",
      },
      deliveryMethod: "fastTest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Your name"
        ></input>
        <input
          type="email"
          className={classes.Input}
          name="name"
          placeholder="Your email"
        ></input>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Street"
        ></input>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Postal Code"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
