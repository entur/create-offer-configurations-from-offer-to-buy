import { OfferToBuy } from "./types/offersTypes.js";
import { OfferConfiguration } from "./types/reserveOfferTypes.js";

export type SetRequired<T, K extends keyof T> = Required<Pick<T, K>> &
	Omit<T, K>; // eslint-disable-line @typescript-eslint/ban-types

type OfferConfigurationWithCountOne = SetRequired<
	OfferConfiguration,
	"selectedTravellerIds" | "selectableProductIds"
> & { count?: 1 };

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
): OfferConfigurationWithCountOne[] {
	return offerToBuy.possibleTravellerIds.map((selectedTravellerIds) => ({
		offerId: offerToBuy.id,
		selectableProductIds: offerToBuy.selectableProductIds,
		selectedTravellerIds,
	}));
}
