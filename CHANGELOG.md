# Changelog

## 3.0.0 (2022-02-17)

### Breaking

- **Throws errors if the second argument is necessary and not present when using
  [Offers v1](https://developer.entur.org/pages-offers-docs-api-v1-reference)**:
  - The function `createOfferConfigurationsFromOfferToBuy` will now throw an
    error if `offerToBuy.withUpgradeProducts` contains at least 1 item (i.e.
    some product that has to be mapped to a `selectableId`) and you have either
    supplied no offer or an offer whose ID does not match the ID of the
    offerToBuy.
  - Previously, the function would silently proceed with an empty
    `selectableProductIds` field in the configuration in such cases. Because
    these products are mandatory, you would probably receive an error when
    supplying the offer configuration to `reserve-offers`.

### New features

- **You no longer have to supply the second argument when using an OfferToBuy
  from Offers v2**:
  - The offerToBuy type in
    [Offers v2](https://developer.entur.org/pages-offers-docs-api-v2-reference)
    now supplies the field `selectableProductIds` itself. We therefore no longer
    have to map the IDs in `withUpgradeProducts` to the selectableIds.
  - The second argument is from now on simply ignored when using Offers v2. It
    does not matter whether you supply it or not.

## 2.1.0 (2022-01-26)

Add CommonJS build.

## 2.0.1 (2022-01-25)

Add `"type": "module"` to `package.json`.

## 2.0.0 (2022-01-21)

### Support withUpgradeProducts

The function `createOfferConfigurationsFromOfferToBuy` now adds the products
specified by the `withUpgradeProducts` key in the offer configuration to the
`selectableProductIds` array in the offer configurations it outputs. In order to
map these product IDs from their Netex ID to their `selectableProductId`, the
function now requires a second parameter. This must be either the referred Offer
(if you are using
[Offers v1](https://developer.entur.org/pages-offers-docs-api-v1-reference)) or
OptionalProduct (if you are using
[Offers v2](https://developer.entur.org/pages-offers-docs-api-v2-reference)).

## 1.0.1 (2021-11-12)

- Upgrade types

## 1.0.0 (2021-11-03)

- Initial version
