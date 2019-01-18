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
        {faq.question1 && (
          <Question text={faq.question1.text} answer={faq.question1.answer} />
        )}
        {faq.question2 && (
          <Question text={faq.question2.text} answer={faq.question2.answer} />
        )}
        {faq.question3 && (
          <Question text={faq.question3.text} answer={faq.question3.answer} />
        )}
        {faq.question4 && (
          <Question text={faq.question4.text} answer={faq.question4.answer} />
        )}
        {faq.question5 && (
          <Question text={faq.question5.text} answer={faq.question5.answer} />
        )}
        {faq.question6 && (
          <Question text={faq.question6.text} answer={faq.question6.answer} />
        )}
        {faq.question7 && (
          <Question text={faq.question7.text} answer={faq.question7.answer} />
        )}
        {faq.question8 && (
          <Question text={faq.question8.text} answer={faq.question8.answer} />
        )}
        {faq.question9 && (
          <Question text={faq.question9.text} answer={faq.question9.answer} />
        )}
        {faq.question10 && (
          <Question text={faq.question10.text} answer={faq.question10.answer} />
        )}
        {faq.question11 && (
          <Question text={faq.question11.text} answer={faq.question11.answer} />
        )}
        {faq.question12 && (
          <Question text={faq.question12.text} answer={faq.question12.answer} />
        )}
        {faq.question13 && (
          <Question text={faq.question13.text} answer={faq.question13.answer} />
        )}
        {faq.question14 && (
          <Question text={faq.question14.text} answer={faq.question14.answer} />
        )}
        {faq.question15 && (
          <Question text={faq.question15.text} answer={faq.question15.answer} />
        )}
        {faq.question16 && (
          <Question text={faq.question16.text} answer={faq.question16.answer} />
        )}
        {faq.question17 && (
          <Question text={faq.question17.text} answer={faq.question17.answer} />
        )}
        {faq.question18 && (
          <Question text={faq.question18.text} answer={faq.question18.answer} />
        )}
        {faq.question19 && (
          <Question text={faq.question19.text} answer={faq.question19.answer} />
        )}
        {faq.question20 && (
          <Question text={faq.question20.text} answer={faq.question20.answer} />
        )}
        {faq.question21 && (
          <Question text={faq.question21.text} answer={faq.question21.answer} />
        )}
        {faq.question22 && (
          <Question text={faq.question22.text} answer={faq.question22.answer} />
        )}
      </div>
    );
  }
}

export default Translate(Faq);
