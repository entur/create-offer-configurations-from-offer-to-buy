This package has been superseded by the package
`@entur/offer-configuration-utilities`, which is a combination of
`@entur/reduce-customers-for-offer-configuration` and
`@entur/reduce-customers-for-offer-configuration`. This package will remain
private until someone outside the organization requests it.

If you work outside Entur, want to use `@entur/offer-configuration-utilities`,
and it is not public when you click the following link, send an email to Entur
describing the problem (and mention “Team betjent”):
https://www.npmjs.com/package/@entur/offer-configuration-utilities

# @entur/create-offer-configurations-from-offer-to-buy

Create an array of offer configurations exactly as prescribed by the
possibleTravellerIds field in an OfferToBuy

## This package is deprecated

This package was deprecated on 2023-12-22.
The team that maintained it at Entur has incorporated it into its (private) monorepo.
If you want to see public updates to it again, send an email to post@entur.org, and ask for Team betjent.

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

The function has an optional second parameter, `offerIfUsingOffersApiV1`. You
have to supply an argument for it if you are using
[Offers v1](https://developer.entur.org/pages-offers-docs-api-v1-reference). The
offer is used to map the items in `withUpgradeProducts` to
`selectableProductIds` in the output. The second argument is superfluous if you
are using
[Offers v2](https://developer.entur.org/pages-offers-docs-api-v2-reference),
because `selectableProductIds` are already present in the `offerToBuy`.

```javascript
import { createOfferConfigurationsFromOfferToBuy } from "@entur/create-offer-configurations-from-offer-to-buy";

createOfferConfigurationsFromOfferToBuy(
  {
    id: "7048884e-2c16-4305-92cc-b56fb4ea779a",
    numberToBuy: 2,
    withUpgradeProducts: [],
    possibleTravellerIds: [["3543283", "3518762"], ["ADULT-0-anonymous"]],
  },
  offerIfUsingOffersApiV1,
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
- [@kentandersen](https://github.com/kentandersen)
