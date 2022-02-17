import {OfferToBuy as OfferToBuy2} from './types/offers2Types';
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
  offerToBuy: OfferToBuy | OfferToBuy2,
  offer?: StrippedOffer
): OfferConfigurationWithCountOne[] {
  const selectableProductIds = extractSelectableProductIds(offerToBuy, offer);

  return offerToBuy.possibleTravellerIds.map((selectedTravellerIds) => ({
    offerId: offerToBuy.id,
    selectableProductIds,
    selectedTravellerIds
  }));
}

function extractSelectableProductIds(
  offerToBuy: OfferToBuy | OfferToBuy2,
  offer?: StrippedOffer
): string[] {
  const offerToBuyIsFromOffersV2 = 'selectableProductIds' in offerToBuy;
  if (offerToBuyIsFromOffersV2) {
    return offerToBuy.selectableProductIds;
  }

  if (!offer) {
    return [];
  }

  return getSelectableProductIdsMatchingNetexIdsFromOffer(
    offerToBuy.withUpgradeProducts,
    offer
  );
}

export function getSelectableProductIdsMatchingNetexIdsFromOffer(
  netexIds: string[],
  offer: StrippedOffer
): string[] {
  const {fareProducts} = offer.salesPackageConfig;
  return netexIds.flatMap((netexId) =>
    fareProducts
      .filter((product) => product.id === netexId)
      .map((product) => product.selectableId)
  );
}
