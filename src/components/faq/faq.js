import React, { Component } from 'react';
import './faq.css';
import Question from './components/question';
import Translate from '../translate';

class Faq extends Component {
  render() {
    const { faq } = this.props.translations;
    return (
      <div className="faq__total">
        <h1 className="faq__main__header">{faq.title}</h1>
        <Question text={faq.question1.text} answer={faq.question1.answer} />
        <Question text={faq.question2.text} answer={faq.question2.answer} />
        <Question text={faq.question3.text} answer={faq.question3.answer} />
        <Question text={faq.question4.text} answer={faq.question4.answer} />
        <Question text={faq.question5.text} answer={faq.question5.answer} />
        <Question text={faq.question6.text} answer={faq.question6.answer} />
        <Question text={faq.question7.text} answer={faq.question7.answer} />
        <Question text={faq.question8.text} answer={faq.question8.answer} />
        <Question text={faq.question9.text} answer={faq.question9.answer} />
        <Question text={faq.question10.text} answer={faq.question10.answer} />
        <Question text={faq.question11.text} answer={faq.question11.answer} />
        <Question text={faq.question12.text} answer={faq.question12.answer} />
        <Question text={faq.question13.text} answer={faq.question13.answer} />
      </div>
    );
  }
}

export default Translate(Faq);
