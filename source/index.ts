import {OfferToBuy as OfferToBuy2} from './types/offers2Types';
import {FareProductConfiguration, Offer, OfferToBuy} from './types/offersTypes';
import {OfferConfiguration} from './types/reserveOfferTypes';

export type SetRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>; // eslint-disable-line @typescript-eslint/ban-types

/**
 * These are stripped down versions of the Offer types,
 * containing only the data that we need.
 * The hope is that this will lead to fewer updates because
 * the type has changed.
 */
type StrippedFareProductConfiguration = Pick<
  FareProductConfiguration,
  'id' | 'selectableId'
>;

type StrippedOffer = Pick<Offer, 'id'> & {
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
  offerToBuy: OfferToBuy | OfferToBuy2,
  offerIfUsingOffersApiV1?: StrippedOffer
): OfferConfigurationWithCountOne[] {
  const selectableProductIds = extractSelectableProductIds(
    offerToBuy,
    offerIfUsingOffersApiV1
  );

  return offerToBuy.possibleTravellerIds.map((selectedTravellerIds) => ({
    offerId: offerToBuy.id,
    selectableProductIds,
    selectedTravellerIds
  }));
}

function extractSelectableProductIds(
  offerToBuy: OfferToBuy | OfferToBuy2,
  offerIfUsingOffersApiV1?: StrippedOffer
): string[] {
  const offerToBuyIsFromOffersV2 = 'selectableProductIds' in offerToBuy;
  if (offerToBuyIsFromOffersV2) {
    return offerToBuy.selectableProductIds;
  }

  if (!offerIfUsingOffersApiV1) {
    const netexIds = offerToBuy.withUpgradeProducts;
    const userShouldHaveSuppliedAnOffer = netexIds.length > 0;
    if (userShouldHaveSuppliedAnOffer) {
      throw new Error(
        `offerToBuy.withUpgradeProducts contains product IDs (${JSON.stringify(
          netexIds
        )}), but the second argument was undefined. Supply the offer referenced by offerToBuy (id: ${
          offerToBuy.id
        }) to fix this error.`
      );
    }

    return [];
  }

  return getSelectableProductIdsMatchingNetexIdFromOffer(
    offerToBuy,
    offerIfUsingOffersApiV1
  );
}

function getSelectableProductIdsMatchingNetexIdFromOffer(
  offerToBuy: OfferToBuy,
  offerFromV1: StrippedOffer
): string[] {
  if (offerToBuy.id !== offerFromV1.id) {
    throw new Error(
      `The ID of the offer you supplied (${offerFromV1.id}) does not match the ID of the offerToBuy (${offerToBuy.id}). Supply the referenced offer to fix this error.`
    );
  }

  const netexIds = offerToBuy.withUpgradeProducts;
  const {fareProducts} = offerFromV1.salesPackageConfig;
  return netexIds.flatMap((netexId) =>
    fareProducts
      .filter((product) => product.id === netexId)
      .map((product) => product.selectableId)
  );
}
