import { YourIR } from 'yourir-react';
import './styles.css';

export function MyInvestorRelations() {
  return (
    <div>
      <h1>Share Price</h1>
      <YourIR>
        <span data-yourir="price"></span>
        <span data-yourir="change"></span>

        <h1>Simple Stock Quote</h1>
        <div id="simplequote">
          <span data-yourir="symbol"></span>: <span data-yourir="name"></span>
          <h1>
            <span data-yourir="price"></span>{' '}
            <span className="arrow">
              <span data-yourir="changeSignCSS"></span>
            </span>
          </h1>
          <div>
            Change: <span data-yourir="change"></span>
            <span data-yourir="pctChange"></span>
          </div>
          <div>
            <span data-yourir="currentTime format='[As at] Do MMM, h:mma'"></span>
          </div>
        </div>

        <h1>Extended Stock Quote</h1>
        <table className="quote">
          <tr>
            <th>Price</th>
            <th>Movement +/-</th>
            <th>Volume</th>
            <th>Daily High</th>
            <th>Daily Low</th>
            <th>52 Week Range</th>
            <th>Market Cap.</th>
          </tr>
          <tr>
            <td>
              <strong>
                <span data-yourir="price"></span>
              </strong>
            </td>
            <td>
              <span data-yourir="change"></span>
            </td>
            <td>
              <span data-yourir="volume"></span>
            </td>
            <td>
              <span data-yourir="high"></span>
            </td>
            <td>
              <span data-yourir="low"></span>
            </td>
            <td>
              <span data-yourir="yearLow"></span> /{' '}
              <span data-yourir="yearHigh"></span>
            </td>
            <td>
              <span data-yourir="marketCap scale=true"></span>
            </td>
          </tr>
        </table>
        <p>
          <span data-yourir="currentTime format='[As at] Do MMMM H:mm'"></span>
        </p>
      </YourIR>
    </div>
  );
}
