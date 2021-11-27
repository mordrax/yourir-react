import React from 'react';
import ReactDOM from 'react-dom';
import { YourIR } from 'yourir-react';
import './styles.css';

export class OldInvestor extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    ReactDOM.render(
      <YourIR>
        <div data-yourir="chart indicator=price" id="example-price-fill"></div>
      </YourIR>,

      document.getElementById('your-ir-entry'),
    );
  }

  render() {
    return (
      <div>
        <h1>React.Component</h1>
        <YourIR>
          <div id="your-ir-entry"></div>
        </YourIR>
      </div>
    );
  }
}
