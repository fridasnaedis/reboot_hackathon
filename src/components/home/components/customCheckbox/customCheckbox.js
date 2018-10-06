import React, { Component } from 'react';

class CustomCheckbox extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="item">
        <input
          onChange={this.props.onChange}
          type="checkbox"
          id={text}
          name={text}
          value={text}
        />
        <label htmlFor={text}>{text}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
