# Server

This Server is a simple `GraphQL` piece of code that acts as a source of data.

Contents:
- [Server](#server)
  - [Starting the server](#starting-the-server)
  - [Credit Agreements](#credit-agreements)
    - [Credit Agreements Request](#credit-agreements-request)
    - [Credit Agreements Response](#credit-agreements-response)
  - [Events](#events)
    - [Events Request](#events-request)
    - [Events Body](#events-body)
    - [Events Response](#events-response)

## Starting the server
Install the dependencies:
```bash
cd server
npm install
```
Run the server:
```bash
npm start
```
_server should be running on http://localhost:8080._


## Credit Agreements

- The credit agreement allows a merchant to get credit conditions with a single request.
- The credit conditions depend on order value, currency, and merchant.

### Credit Agreements Request

`GET <base>/credit_agreements`

```bash
$ curl -i http://localhost:8080/credit_agreements?totalWithTax=15000
```

**Parameters**
| Name | Value | Notes |
| ---- | ----- | ----- |
| totalWithTax | 15000 | Sample. Total value of the items (in EUR cents).|

### Credit Agreements Response

The response is a list of the requested financing products as keys and corresponding credit agreements as values. (the example has been reformatted for easier reading)

Each credit agreement contains fields specific to the financing product. Many of them include a numerical value together with a formatted string, which is ready to show.

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
...

[
    {
      "instalmentCount":        3,
      "apr":                    { "value":  10408, "string":   "104,08 %" },
      "totalWithTax":           { "value":  15000, "string":   "150,00 €" },
      "costOfCredit":           { "value":    900, "string":     "9,00 €" },
      "costOfCreditPct":        { "value":    600, "string":     "6,00 %" },
      "grandTotal":             { "value":  15900, "string":   "159,00 €" },
      "maxFinancedAmount":      { "value": 200000, "string": "2.000,00 €" },
      "instalmentAmount":       { "value":   5000, "string":    "50,00 €" },
      "instalmentFee":          { "value":    300, "string":     "3,00 €" },
      "instalmentTotal":        { "value":   5300, "string":    "53,00 €" },
    },
    {
      "instalmentCount":        6,
      ... //analogous details as above, but for 6 months credits
    },
    {
      "instalmentCount":        12,
      ... //analogous details as above, but for 12 months credits
    }
  ]
```

## Events

The events allows to store different user interactions during the purchase for further analysis.

### Events Request
`POST <base>/events`

```bash
$ curl -d '{"context":"checkoutWidget", "type":"simulatorInstalmentChanged", "selectedInstalment": 12}' -H "Content-Type: application/json" -X POST http://localhost:8080/events
```

### Events Body

Events expects a `JSON` object describing the event that wants to be stored. The only requirements for this object are a `context` and `type` keys with `string` values. The object can also include any extra information to help future analysis.

### Events Response

The status code for a successful response is `200` with an empty `body`, anything else should be treated as an error.
