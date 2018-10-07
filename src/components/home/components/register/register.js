import React, { Component } from 'react';
import { Form, Text } from 'informed';
import { connect } from 'react-redux';
import validator from 'email-validator';
import './register.css';
import Translate from '../../../translate';
import { signup } from '../../../../actions/signup';
import Loading from '../../../loading';
import CustomCheckbox from '../customCheckbox';

class Register extends Component {
  constructor(props) {
    super(props);

    // Remember!  This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this);
    this.onSubmitFailure = this.onSubmitFailure.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    errors: {},
    formSubmitted: false,
    formCheckboxes: [],
  };

  validateName = value => {
    return !value || value.length < 5 ? 'name' : null;
  };

  validateEmail = value => {
    return !value || !validator.validate(value) ? 'email' : null;
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

    const { interestFields } = this.props.translations.home.register;

    const interests = interestFields
      .filter(x => this.state.formCheckboxes[x.key])
      .map(x => x.key);

    data = { ...data, interests };

    console.log(data);

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

  checkboxClicked(i, e) {
    const boxes = this.state.formCheckboxes;
    boxes[i] = !boxes[i];

    this.setState({
      formCheckboxes: boxes,
    });
  }

  checkboxCreator() {
    const { interestFields } = this.props.translations.home.register;
    return interestFields.map(x => {
      //...
      return (
        <CustomCheckbox
          text={x.value}
          onChange={this.checkboxClicked.bind(this, x.key)}
          key={x.key}
        />
      );
    });
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

    const checkboxes = this.checkboxCreator();

    if (signup.result && signup.result.success) {
      return (
        <div className="register success">
          <div className="text--thanks">
            <h2>{register.thanks}</h2>
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
        <div id="registerForm" />
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

            <div className="fieldset">
              <label htmlFor="checkbox">{register.interest}</label>
              <div field="checkbox" id="checkbox" />
            </div>

            <div className="form__custom--checkbox">{checkboxes}</div>

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
