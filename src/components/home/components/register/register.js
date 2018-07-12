import React, { Component } from "react";
import { Form, Text } from "informed";
import { connect } from "react-redux";
import validator from "email-validator";
import "./register.css";
import Translate from "../../../translate";
import { signup } from "../../../../actions/signup";
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

  validateName = value => {
    return !value || value.length < 5 ? "name" : null;
  };

  validateEmail = value => {
    return !value || !validator.validate(value) ? "email" : null;
  };

  onSubmitFailure(errors) {
    this.setState({
      errors,
    });
  }
  onSubmit(data) {
    this.setState({
      formSubmitted: true,
    });

    const { dispatch } = this.props;

    dispatch(signup({ data }));
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
    const { signup } = this.props;
    const { errors: errorTranslations } = this.props.translations;
    const { register } = this.props.translations.home;
    const { errors } = this.state;

    // Handles error
    let errorList = Object.entries(errors).map(e => (
      <li key={e[0]}>{errorTranslations[e[1]]}</li>
    ));

    const buttonContent = this.formButtonContent();

    if (signup.result && signup.result.success) {
      return (
        <div className="register success">
          <div className="text--thanks">
            <h3>{register.thanks}</h3>
          </div>
          <img
            src="/images/reboothack_default.png"
            alt="The logo for the hackathon"
          />
        </div>
      );
    }

    if ((signup.result && !signup.result.success) || signup.errors) {
      return (
        <div className="register">
          <h3>{register.fail}</h3>
        </div>
      );
    }

    // Handles the register button
    return (
      <div className="register">
        <div className="form__container" id="register">
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
              <Text field="name" id="name" validate={this.validateName} />
            </div>
            <div className="fieldset">
              <label htmlFor="email">{register.email}</label>
              <Text field="email" id="email" validate={this.validateEmail} />
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

const mapStateToProps = state => {
  return {
    signup: {
      isFetching: state.signup.isFetching,
      result: state.signup.result,
      error: state.signup.error,
    },
  };
};

export default connect(mapStateToProps)(Translate(Register));
