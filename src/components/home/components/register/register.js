import React, { Component } from 'react';
import { Form, Text, Select, Option } from 'informed';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import validator from 'email-validator';
import './register.css';
import Translate from '../../../translate';
import { signup } from '../../../../actions/signup';
import Loading from '../../../loading';
import CustomCheckbox from '../customCheckbox';

const baseurl = process.env.REACT_APP_SUB_URL;

class Register extends Component {
  constructor(props) {
    super(props);

    this.registerFormRef = React.createRef();
    this.registerFormDoneRef = React.createRef();

    // Remember!  This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this);
    this.onSubmitFailure = this.onSubmitFailure.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  state = {
    errors: {},
    formSubmitted: false,
    interestsCheckboxes: [],
    submissionCheckboxes: [],
  };

  componentDidMount() {
    // Preloads the image
    // https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
    const img = new Image();
    img.src = `${baseurl}/images/reboothack_default.png`;
  }

  componentDidUpdate(prevProps) {
    // If register done then scroll to thank you
    if (
      this.props.signup.result &&
      this.props.signup.result.success &&
      !prevProps.signup.result
    ) {
      const myDomNode = ReactDOM.findDOMNode(this.registerFormDoneRef.current);
      setTimeout(function() {
        myDomNode.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }, 150);
    }
  }

  validateName = value => {
    return !value || value.length < 1 ? 'name' : null;
  };

  validateEmail = value => {
    return !value || !validator.validate(value) ? 'email' : null;
  };

  validateAge = value => {
    return !value || value < 0 || value > 200 ? 'age' : null;
  };

  validateGraduation = value => {
    return !value || value.toString().length !== 4 ? 'graduation' : null;
  };

  scrollToError() {
    const myDomNode = ReactDOM.findDOMNode(this.registerFormRef.current);
    myDomNode.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  onSubmitFailure(errors) {
    this.scrollToError();

    this.setState({
      errors,
    });
  }

  onSubmit(data) {
    const {
      interestsFields,
      submissionFields,
    } = this.props.translations.home.register;

    // Validate data buttons
    const submission = submissionFields
      .filter(x => this.state.submissionCheckboxes[x.key])
      .map(x => x.key);

    if (submission.length !== 2) {
      this.setState({
        errors: {
          terms: 'terms',
        },
      });

      this.scrollToError();

      return;
    }

    this.setState({
      formSubmitted: true,
    });

    const interests = interestsFields
      .filter(x => this.state.interestsCheckboxes[x.key])
      .map(x => x.key);

    data = { ...data, interests, submission };

    const { dispatch } = this.props;

    dispatch(signup({ data }));
  }

  filterNumeric(values, key) {
    const value = values[key];
    if (value) {
      const clean = parseInt(value);

      if (clean !== value) {
        this.formApi.setValue(key, clean);
      }
    }
  }

  onValueChange(values) {
    this.filterNumeric(values, 'phone');
    this.filterNumeric(values, 'age');
    this.filterNumeric(values, 'graduation');
  }

  setFormApi(formApi) {
    this.formApi = formApi;

    const isDev = process.env.NODE_ENV === 'development';

    console.log('');
    console.log(this.formApi);

    if (isDev) {
      setTimeout(() => {
        this.formApi.setValue('firstname', 'Ketill');
        this.formApi.setValue('lastname', 'G');
        this.formApi.setValue('email', 'ketill@bu.edu');
        this.formApi.setValue('school', 'Boston University');
        this.formApi.setValue('phone', '8661581');
        this.formApi.setValue('age', '23');
        this.formApi.setValue('race', 'white');
        this.formApi.setValue('major', 'CS');
        this.formApi.setValue('studyLevel', 'Masters');
        this.formApi.setValue('graduation', '2019');
        this.formApi.setValue('diet', 'Coffee');
      }, 1);
    }
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

  checkboxClicked(i, type, e) {
    const boxes = this.state[`${type}Checkboxes`];
    boxes[i] = !boxes[i];

    this.setState({
      [`${type}Checkboxes`]: boxes,
    });
  }

  checkboxCreator(type, useLinks) {
    const fields = this.props.translations.home.register[`${type}Fields`];
    return fields.map(x => {
      //...
      return (
        <CustomCheckbox
          text={x.value}
          onChange={this.checkboxClicked.bind(this, x.key, type)}
          key={x.key}
          useLinks={useLinks}
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

    const interestCheckboxes = this.checkboxCreator('interests');
    const submissionCheckboxes = this.checkboxCreator('submission', true);

    if (signup.result && signup.result.success) {
      return (
        <div className="register success" ref={this.registerFormDoneRef}>
          <div className="text--thanks">
            <h2>{register.thanks}</h2>
          </div>
          <img
            src={`${baseurl}/images/reboothack_default.png`}
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
        <div id="registerForm" ref={this.registerFormRef} />
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
            onValueChange={this.onValueChange}
          >
            <div className="fieldset">
              <label htmlFor="firstname">{register.firstname}</label>
              <Text
                field="firstname"
                id="firstname"
                validate={this.validateName}
              />
            </div>

            <div className="fieldset">
              <label htmlFor="lastname">{register.lastname}</label>
              <Text field="lastname" id="lastname" />
            </div>

            <div className="fieldset">
              <label htmlFor="email">{register.email}</label>
              <Text field="email" id="email" validate={this.validateEmail} />
            </div>

            <div className="fieldset">
              <label htmlFor="school">{register.school}</label>
              <Text field="school" id="school" />
            </div>

            <div className="fieldset">
              <label htmlFor="phone">{register.phone}</label>
              <Text field="phone" id="phone" />
            </div>

            <div className="fieldset">
              <label htmlFor="age">{register.age}</label>
              <Text field="age" id="age" validate={this.validateAge} />
            </div>

            <div className="fieldset">
              <label htmlFor="race">{register.race}</label>
              <Text field="race" id="race" />
            </div>

            <div className="fieldset">
              <label htmlFor="major">{register.major}</label>
              <Text field="major" id="major" />
            </div>

            <div className="fieldset">
              <label htmlFor="studyLevel">{register.studyLevel}</label>
              <Text field="studyLevel" id="studyLevel" />
            </div>

            <div className="fieldset">
              <label htmlFor="graduation">{register.graduation}</label>
              <Text
                field="graduation"
                id="graduation"
                validate={this.validateGraduation}
              />
            </div>

            <div className="fieldset">
              <label htmlFor="diet">{register.diet}</label>
              <Text field="diet" id="diet" />
            </div>

            <div className="fieldset">
              <Select field="gender" id="gender">
                <Option value="0">{register.genderFields[0]}</Option>
                <Option value="1">{register.genderFields[1]}</Option>
                <Option value="2">{register.genderFields[2]}</Option>
                <Option value="3">{register.genderFields[3]}</Option>
              </Select>
            </div>

            <div className="fieldset">
              <Select field="eduroam" id="eduroam">
                <Option value="0">{register.eduroam[0]}</Option>
                <Option value="1">{register.eduroam[1]}</Option>
              </Select>
            </div>

            <div className="fieldset">
              <label htmlFor="checkboxInterest">{register.interest}</label>
              <div field="checkboxInterest" id="checkboxInterest" />
            </div>
            <div className="form__custom--checkbox">{interestCheckboxes}</div>

            <div className="fieldset">
              <label htmlFor="checkboxData">{register.submission}</label>
              <div field="checkboxData" id="checkboxData" />
            </div>
            <div className="form__custom--checkbox custom-data ">
              {submissionCheckboxes}
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
