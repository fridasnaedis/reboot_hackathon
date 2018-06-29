import React, { Component } from "react";
import { Form, Text } from "informed";
import { connect } from "react-redux";
import "./register.css";

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
    const { register } = this.props.translations.home;
    return (
      <div className="register">
        <Form className="form" getApi={this.setFormApi}>
          <fieldset>
            <label htmlFor="name">{register.name}:</label>
            <Text field="name" id="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">{register.email}:</label>
            <Text field="email" id="email" />
          </fieldset>
          <button type="submit">{register.submit}</button>
        </Form>
        {/*<button onClick={this.handleClick}>Print Form State</button>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Register);
