import React, { Component } from "react";
import { Form, Text } from "informed";
import validator from "email-validator";
import "./register.css";
import Translate from "../../../translate";

import Loading from "../../../loading";

class Register extends Component {
  constructor(props) {
    super(props);

    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this);
    this.onSubmitFailure = this.onSubmitFailure.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    errors: {},
    formSubmitted: false,
  };

  onSubmitFailure(errors) {
    this.setState({
      errors,
    });
  }
  onSubmit(values) {
    this.setState({
      formSubmitted: true,
    });
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  formButtonContent() {
    const { register } = this.props.translations.home;
    const { formSubmitted } = this.state;
    if (!formSubmitted) {
      return register.submit;
    } else {
      return <Loading dimensions="40" />;
    }
  }

  render() {
    const { defaultText } = this.props.translations;
    const { register } = this.props.translations.home;
    const { errors } = this.state;

    // Handles error
    let errorList = Object.entries(errors).map(e => <li>{e[1]}</li>);

    const buttonContent = this.formButtonContent();

    // Handles the register button
    return (
      <div className="register">
        <div className="form__container">
          <div className="register--text">
            <h3>{register.topText}</h3>
          </div>
          <ul className="form__errors">{errorList}</ul>
          <Form
            className="form"
            getApi={this.setFormApi}
            onSubmitFailure={this.onSubmitFailure}
            onSubmit={this.onSubmit}
          >
            <div className="fieldset">
              <label htmlFor="name">{register.name}</label>
              <Text field="name" id="name" />
            </div>
            <div className="fieldset">
              <label htmlFor="email">{register.email}</label>
              <Text field="email" id="email" validate={validate} />
            </div>
            <button type="submit" className="form__button">
              {buttonContent}
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

const validate = value => {
  console.log(validator.validate(value));
  return !value || !validator.validate(value) ? "Not a valid email" : null;
};

export default Translate(Register);
