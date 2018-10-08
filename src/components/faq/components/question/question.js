import React, { Component } from 'react';
import './question.css';

class Question extends Component {
  render() {
    const { text, answer } = this.props;

    return (
      <div className="question__answer">
        <h3 className="question">{text}</h3>
        <p className="answer" dangerouslySetInnerHTML={{ __html: answer}}/>
      </div>
    );
  }
}

export default Question;
