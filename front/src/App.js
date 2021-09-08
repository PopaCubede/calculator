import React from 'react';
import Buttons from './components/buttons';
import Display from './components/display';
import * as Operations from './utils/operations';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: [],
      input: '0',
      afterEqual: false
    }

    this.onNumber = this.onNumber.bind(this);
    this.onOperator = this.onOperator.bind(this);
    this.onDot = this.onDot.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onEqual = this.onEqual.bind(this);
  }

  onNumber({ target }) {
    const number = target.innerText;
    const input = this.state.input;

    if (this.state.afterEqual) {
      this.setState({
        input: number,
        afterEqual: false
      });
    } else if (input === '0') {
      this.setState({
        input: number
      });
    } else if (Operations.isNotNumber(input)) {
      this.setState({
        input: number,
        formula: this.state.formula.concat(input)
      });
    } else {
      this.setState({
        input: input.concat(number)
      });
    }
  }

  onOperator({ target }) {
    const operator = target.innerText;
    const input = this.state.input;

    if (Operations.isOperator(input)) {
      this.setState({
        input: operator,
        afterEqual: false
      });
    } else if (input !== '(') {
      this.setState({
        formula: this.state.formula.concat(this.state.input),
        input: operator,
        afterEqual: false
      });
    }
  }

  onDot({ target }) {
    const dot = target.innerText;
    const input = this.state.input;

    if (this.state.afterEqual) {
      this.setState({
        input: `0${dot}`,
        afterEqual: false
      });
    } else if (Operations.isNotNumber(input)) {
      this.setState({
        input: `0${dot}`,
        formula: this.state.formula.concat(input)
      });
    } else if (!input.includes(dot)) {
      this.setState({
        input: input.concat(dot),
      });
    }
  }

  onClear() {
    this.setState({
      formula: [],
      input: '0',
      afterEqual: false
    });
  }

  onEqual() {
    const finalFormula = this.state.formula.concat(this.state.input);
    // Call to API
    const result = Operations.getResult(finalFormula);
    console.log("RESULT: ", result);

    if (!Number.isNaN(result)) {
      this.setState({
        input: result + "",
        formula: [],
        afterEqual: true
      });
    }
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className="calculator">
            <Display
              formula={this.state.formula}
              input={this.state.input}
            />

            <Buttons
              onNumber={this.onNumber}
              onOperator={this.onOperator}
              onDot={this.onDot}
              onClear={this.onClear}
              onEqual={this.onEqual}
            />
          </div>
        </header>
      </div>
    );
  };
}

// export default App;
