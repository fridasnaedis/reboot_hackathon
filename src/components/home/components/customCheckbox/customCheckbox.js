import React, { Component } from 'react';
import './customCheckbox.css';

class CustomCheckbox extends Component {
  render() {
    const { text, useLinks } = this.props;

    const newId = Math.random();

    const textValue = useLinks ? (
      <p className="" dangerouslySetInnerHTML={{ __html: text }} />
    ) : (
      <label htmlFor={newId}>{text}</label>
    );

    return (
      <div className="item">
        <input
          onChange={this.props.onChange}
          type="checkbox"
          id={newId}
          name={newId}
          value={text}
        />
        <label htmlFor={newId}>{textValue}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
