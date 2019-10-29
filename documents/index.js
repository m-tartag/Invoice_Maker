
module.exports = ({ bill_to, bill_to_email, client, location, date, start_time, end_time, rate }) => {
  const today = new Date();
  return `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Invoice Template</title>
    <style>
      .clearfix:after {
        content: '';
        display: table;
        clear: both;
      }

      a {
        color: #5d6975;
        text-decoration: underline;
      }

      body {
				padding: 20px;
        color: #001028;
        background: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 12px;
        font-family: Arial;
      }

      header {
        padding: 10px 0;
        margin-bottom: 30px;
      }

      #logo {
        text-align: center;
        margin-bottom: 10px;
      }

      #logo img {
        width: 90px;
      }

      h1 {
        border-top: 1px solid #5d6975;
        border-bottom: 1px solid #5d6975;
        color: #5d6975;
        font-size: 2.4em;
        line-height: 1.4em;
        font-weight: normal;
        text-align: center;
        margin: 0 0 20px 0;
        background: url(dimension.png);
      }

      #project {
        float: left;
      }

      #project span {
        color: #5d6975;
        text-align: right;
        width: 52px;
        margin-right: 10px;
        display: inline-block;
        font-size: 0.8em;
      }

      #company {
        float: right;
        text-align: right;
      }

      #project div,
      #company div {
        white-space: nowrap;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
      }

      table tr:nth-child(2n-1) td {
        background: #f5f5f5;
      }

      table th,
      table td {
        text-align: center;
      }

      table th {
        padding: 5px 20px;
        color: #5d6975;
				border-bottom: 1px solid #c1ced9;
				border-top: 1px solid #c1ced9;
        white-space: nowrap;
        font-weight: normal;
      }

      table .service,
      table .desc {
        text-align: left;
      }

      table td {
        padding: 20px;
        text-align: right;
      }

      table td.service,
      table td.desc {
        vertical-align: top;
      }

      table td.unit,
      table td.qty,
      table td.total {
        font-size: 1.2em;
      }

      table td.grand {
        border-top: 1px solid #5d6975;
      }

      #notices .notice {
        color: #5d6975;
        font-size: 1.2em;
      }

      footer {
        color: #5d6975;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #c1ced9;
        padding: 8px 0;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <header class="clearfix">
      <h1>INVOICE</h1>
      <div id="company" class="clearfix">
        <div>Matt Tartaglia</div>
        <div>
          8 Whitford Avenue<br />
          Pawtucket, RI, 02860
        </div>
        <div>(401)-954-2249</div>
        <div><a href="mailto:company@example.com">mattbrs51@gmail.com</a></div>
      </div>
      <div id="project">
        <div><span>Bill To:</span></div>
        <div><span>Company</span> ${bill_to}</div>
        <div><span>E-Mail</span><a href=${bill_to_email}>${bill_to_email}</a></div>
        <div><span>Date</span> ${`${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`}</div>
      </div>
    </header>
    <main>
      <table>
        <thead>
					<tr>
						<th>DATE</th>
            <th class="service">CLIENT</th>
            <th class="desc">LOCATION</th>
            <th>HOURS</th>
            <th>RATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service">${date}</td>
            <td class="service">${client}</td>
						<td class="service">${location}</td>
						<td class="service">${`${start_time}-${end_time}`}</td>
            <td class="service">${rate}</td>
          </tr>
          <tr>
            <td colspan="4" class="grand total">TOTAL</td>
            <td class="grand total">${rate}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </body>
</html>
  `;
};