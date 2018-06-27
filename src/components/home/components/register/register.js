import React, { Component } from "react";
import { Form, Text } from "informed";
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    // Remember! This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  handleClick() {
    console.log(this.formApi.getState());
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  render() {
    return (
      <div className="register">
        <Form className="form" getApi={this.setFormApi}>
        <fieldset>

          <label htmlFor="name">Name:</label>
          <Text field="name" id="name" />
        </fieldset>
        <fieldset>

          <label htmlFor="email">Email:</label>
          <Text field="email" id="email" />
        </fieldset>
          <button type="submit">Submit</button>
        </Form>
        {/*<button onClick={this.handleClick}>Print Form State</button>*/}
      </div>
    );
  }
}

export default Register;
