import { describe, expect, it } from "vitest";

import { createOfferConfigurationsFromOfferToBuy } from "../source/index.js";

describe("createOfferConfigurationFromOfferToBuy", () => {
	it("works with one element in possibleTravellerIds", () => {
		expect(
			createOfferConfigurationsFromOfferToBuy({
				id: "08b47e1e-b2d0-49d6-8a8d-7ab059732e85",
				numberToBuy: 1,
				possibleTravellerIds: [["ADULT-0-anonymous"]],
				selectableProductIds: [],
			}),
		).toEqual([
			{
				offerId: "08b47e1e-b2d0-49d6-8a8d-7ab059732e85",
				selectableProductIds: [],
				selectedTravellerIds: ["ADULT-0-anonymous"],
			},
		]);
	});

	it("works with three elements in possibleTravellerIds", () => {
		expect(
			createOfferConfigurationsFromOfferToBuy({
				id: "10e3099a-8ea0-46f8-8643-e10b49816f41",
				numberToBuy: 3,
				possibleTravellerIds: [
					["ADULT-0-anonymous"],
					["ADULT-1-anonymous"],
					["ADULT-2-anonymous"],
				],
				selectableProductIds: [],
			}),
		).toEqual([
			{
				offerId: "10e3099a-8ea0-46f8-8643-e10b49816f41",
				selectableProductIds: [],
				selectedTravellerIds: ["ADULT-0-anonymous"],
			},
			{
				offerId: "10e3099a-8ea0-46f8-8643-e10b49816f41",
				selectableProductIds: [],
				selectedTravellerIds: ["ADULT-1-anonymous"],
			},
			{
				offerId: "10e3099a-8ea0-46f8-8643-e10b49816f41",
				selectableProductIds: [],
				selectedTravellerIds: ["ADULT-2-anonymous"],
			},
		]);
	});

	it("works with group ticket", () => {
		expect(
			createOfferConfigurationsFromOfferToBuy({
				id: "a15347d8-75ae-44ef-877c-297984c73b07",
				numberToBuy: 1,
				possibleTravellerIds: [["3518762", "3543283"]],
				selectableProductIds: [],
			}),
		).toEqual([
			{
				offerId: "a15347d8-75ae-44ef-877c-297984c73b07",
				selectableProductIds: [],
				selectedTravellerIds: ["3518762", "3543283"],
			},
		]);
	});

	it("applies selectableProductIds to all output offerConfigurations", () => {
		expect(
			createOfferConfigurationsFromOfferToBuy({
				id: "7f3d172f-a1db-4479-9c79-b68ffb433318",
				numberToBuy: 1,
				possibleTravellerIds: [["190920e5-e5fc-4b44-a9d0-a81931614d7b"]],
				selectableProductIds: ["3cfBvn"],
			}),
		).toEqual([
			{
				offerId: "7f3d172f-a1db-4479-9c79-b68ffb433318",
				selectableProductIds: ["3cfBvn"],
				selectedTravellerIds: ["190920e5-e5fc-4b44-a9d0-a81931614d7b"],
			},
		]);
	});
});
