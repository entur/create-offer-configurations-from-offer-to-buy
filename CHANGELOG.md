# Changelog

## 2.0.0 (2022-01-21)

### Support withUpgradeProducts

The function `createOfferConfigurationsFromOfferToBuy` now adds the products
specified by the `withUpgradeProducts` key in the offer configuration to the
`selectableProductIds` array in the offer configurations it outputs. In order to
map these product IDs from their Netex ID to their `selectableProductId`, the
function now requires a second parameter. This must be either the referred Offer
(if you are using
[Offers v1](https://developer.entur.org/pages-offers-docs-api)) or
OptionalProduct (if you are using
[Offers v2](https://developer.entur.org/pages-offers-docs-api-v2)).

## 1.0.1 (2021-11-12)

- Upgrade types

## 1.0.0 (2021-11-03)

- Initial version
