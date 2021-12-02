import {SetRequired} from 'type-fest';

import {FareProductConfiguration, Offer, OfferToBuy} from './types/offersTypes';
import {OfferConfiguration} from './types/reserveOfferTypes';

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
  offer?: Offer
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
  if (!offer) {
    return offerConfigurationsWithOnlyNetexIdsAsSelectableProductIds;
  }

  return offerConfigurationsWithOnlyNetexIdsAsSelectableProductIds.map(
    (offerConfiguration) => ({
      ...offerConfiguration,
      selectableProductIds: offerConfiguration.selectableProductIds.flatMap(
        (netexId) =>
          getSelectableProductIdsMatchingNetexIdFromOffer(
            offer.salesPackageConfig.fareProducts,
            netexId
          )
      )
    })
  );
}

export function getSelectableProductIdsMatchingNetexIdFromOffer(
  fareProducts: FareProductConfiguration[],
  netexId: string
): string[] {
  return fareProducts
    .filter((fareProduct) => fareProduct.id === netexId)
    .map((fareProduct) => fareProduct.selectableId);
}
