import React from 'react';
import './buttons.css';

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="seven" onClick={this.props.onNumber}>7</button>
        <button id="eight" onClick={this.props.onNumber}>8</button>
        <button id="nine" onClick={this.props.onNumber}>9</button>
        <button id="divide" onClick={this.props.onOperator}>/</button>

        <button id="four" onClick={this.props.onNumber}>4</button>
        <button id="five" onClick={this.props.onNumber}>5</button>
        <button id="six" onClick={this.props.onNumber}>6</button>
        <button id="multiply" onClick={this.props.onOperator}>*</button>

        <button id="one" onClick={this.props.onNumber}>1</button>
        <button id="two" onClick={this.props.onNumber}>2</button>
        <button id="three" onClick={this.props.onNumber}>3</button>
        <button id="minus" onClick={this.props.onOperator}>-</button>

        <button id="zero" onClick={this.props.onNumber}>0</button>
        <button id="dot" onClick={this.props.onDot}>.</button>
        <button id="clear" onClick={this.props.onClear}>C</button>
        <button id="add" onClick={this.props.onOperator}>+</button>

        <button id="equals" onClick={this.props.onEqual}>=</button>
      </div>
    )
  }
}