# @entur/create-offer-configurations-from-offer-to-buy

Create an array of offer configurations exactly as prescribed by the
possibleTravellerIds field in an OfferToBuy

## Installation

Install with npm

```bash
npm install @entur/create-offer-configurations-from-offer-to-buy
```

Install with yarn

```bash
yarn add @entur/create-offer-configurations-from-offer-to-buy
```

## Usage/Examples

```javascript
import { createOfferConfigurationsFromOfferToBuy } from "@entur/create-offer-configurations-from-offer-to-buy";

createOfferConfigurationsFromOfferToBuy(
  {
    id: "7048884e-2c16-4305-92cc-b56fb4ea779a",
    numberToBuy: 2,
    withUpgradeProducts: [],
    possibleTravellerIds: [["3543283", "3518762"], ["ADULT-0-anonymous"]],
  },
  offerOrOptionalProducts
);

/*
 * [
 *   {
 *     offerId: "7048884e-2c16-4305-92cc-b56fb4ea779a",
 *     selectedTravellerIds: ["3543283", "3518762"],
 *   },
 *   {
 *     offerId: "7048884e-2c16-4305-92cc-b56fb4ea779a",
 *     selectedTravellerIds: ["ADULT-0-anonymous"],
 *   },
 * ];
 */
```

## Running Tests

```bash
npm run test
```

## Contributing

Contributions are always welcome!

Fork the
[repository](https://github.com/entur/create-offer-configurations-from-offer-to-buy)
from and open a PR.

## Authors

- [@vages](https://www.github.com/vages)
