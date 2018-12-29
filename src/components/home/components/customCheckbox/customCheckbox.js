import React, { Component } from 'react';
import './customCheckbox.css';

class CustomCheckbox extends Component {
  render() {
    const { text, useLinks } = this.props;

    const textValue = useLinks ? (
      <p className="" dangerouslySetInnerHTML={{ __html: text }} />
    ) : (
      <label htmlFor={text}>{text}</label>
    );

    return (
      <div className="item">
        <input
          onChange={this.props.onChange}
          type="checkbox"
          id={text}
          name={text}
          value={text}
        />
        <label htmlFor={text}>{textValue}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
