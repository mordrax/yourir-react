import { YourIR } from 'yourir-react';
import './styles.css';

export function MyInvestorRelations() {
  return (
    <div>
      <h1>Cmoponent</h1>
      <YourIR>
        <span>Ticker Code: </span>
        <input type="text" data-yourir="symbol" />
        <div data-yourir="name"></div>
        <div data-yourir="price"></div>
        <span data-yourir="price"></span>
        <span data-yourir="change"></span>
        <span data-yourir="symbol"></span>
        <span data-yourir="price"></span>
        <span data-yourir="change"></span>
        <span data-yourir="pctChange"></span>

        <br />
        <b data-yourir="symbol"></b>
        <span data-yourir="name"></span>

        <dl>
          <dt>Open</dt>
          <dd data-yourir="price"></dd>
          <dt>High</dt>
          <dd data-yourir="high"></dd>
          <dt>Low</dt>
          <dd data-yourir="low"></dd>
          <dt>Last</dt>
          <dd data-yourir="price"></dd>
          <dt>Change</dt>
          <dd data-yourir="change"></dd>
          <dt>% Change</dt>
          <dd data-yourir="pctChange"></dd>
          <dt>Volume</dt>
          <dd data-yourir="volume"></dd>
          <dt>Value</dt>
          <dd data-yourir="value"></dd>
        </dl>

        <div data-yourir="chart indicator=price" id="example-price-fill"></div>
      </YourIR>
    </div>
  );
}
