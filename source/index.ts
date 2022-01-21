import {OptionalProduct} from './types/offers2Types';
import {FareProductConfiguration, OfferToBuy} from './types/offersTypes';
import {OfferConfiguration} from './types/reserveOfferTypes';

export type SetRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>; // eslint-disable-line @typescript-eslint/ban-types

/**
 * This is a stripped down version of the Offer types,
 * containing only the root keys that we need.
 * The hope is that this will lead to fewer updates because
 * the type has changed.
 */
type StrippedOptionalProduct = Pick<OptionalProduct, 'id' | 'selectableId'>;

type StrippedFareProductConfiguration = Pick<
  FareProductConfiguration,
  'id' | 'selectableId'
>;

type StrippedOffer = {
  salesPackageConfig: {
    fareProducts: StrippedFareProductConfiguration[];
  };
};

type OfferConfigurationWithCountOne = SetRequired<
  OfferConfiguration,
  'selectedTravellerIds' | 'selectableProductIds'
> & {count?: 1};

/**
 * Creates an array of offer configurations exactly as prescribed by the
 * possibleTravellerIds field in an OfferToBuy.
 *
 * Because each item in possibleTravellerIds is only useful for one offer, the offer
 * configurations output by this function will never have a value in the count
 * field that represents anything other than buying 1 of the offer.
 * We just avoid setting the count field, because 1 is the default value.
 */
export function createOfferConfigurationsFromOfferToBuy(
  offerToBuy: OfferToBuy,
  offerOrOptionalProducts: StrippedOffer | StrippedOptionalProduct[]
): OfferConfigurationWithCountOne[] {
  const netexIds = offerToBuy.withUpgradeProducts;
  const offerConfigurationsWithOnlyNetexIdsAsSelectableProductIds =
    offerToBuy.possibleTravellerIds.map(
      (travellerIds): OfferConfigurationWithCountOne => ({
        offerId: offerToBuy.id,
        selectableProductIds: netexIds,
        selectedTravellerIds: travellerIds
      })
    );

  return offerConfigurationsWithOnlyNetexIdsAsSelectableProductIds.map(
    (offerConfiguration) => ({
      ...offerConfiguration,
      selectableProductIds: offerConfiguration.selectableProductIds.flatMap(
        (netexId) =>
          getSelectableProductIdsMatchingNetexIdFromProducts(
            isOffer(offerOrOptionalProducts)
              ? offerOrOptionalProducts.salesPackageConfig.fareProducts
              : offerOrOptionalProducts,
            netexId
          )
      )
    })
  );
}

export function getSelectableProductIdsMatchingNetexIdFromProducts(
  products: StrippedFareProductConfiguration[] | StrippedOptionalProduct[],
  netexId: string
): string[] {
  return products
    .filter((product) => product.id === netexId)
    .map((product) => product.selectableId);
}

function isOffer(
  offerOrOptionalProducts: StrippedOffer | StrippedOptionalProduct[]
): offerOrOptionalProducts is StrippedOffer {
  return 'salesPackageConfig' in offerOrOptionalProducts;
}
