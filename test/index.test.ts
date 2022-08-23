/* eslint-disable max-nested-callbacks -- in order to structure this test file, we need a lot of callbacks */
// eslint-disable-next-line simple-import-sort/imports
import {readFile} from 'node:fs/promises';
import {URL} from 'node:url';
import {expect} from 'expect';
import {describe, it} from 'mocha';

import {
  createOfferConfigurationsFromOfferToBuy,
  StrippedOffer
} from '../source/index.js';

async function readJSON<T>(path: string) {
  return JSON.parse(
    await readFile(new URL(path, import.meta.url), 'utf-8')
  ) as Promise<T>;
}

describe('createOfferConfigurationFromOfferToBuy', () => {
  describe('Offers v1', () => {
    describe('Without upgrade products', () => {
      it('One element in possibleTravellerIds', () => {
        const offerToBuy = {
          id: '08b47e1e-b2d0-49d6-8a8d-7ab059732e85',
          numberToBuy: 1,
          possibleTravellerIds: [['ADULT-0-anonymous']],
          withUpgradeProducts: []
        };

        const expectedOfferConfigurations = [
          {
            offerId: '08b47e1e-b2d0-49d6-8a8d-7ab059732e85',
            selectableProductIds: [],
            selectedTravellerIds: ['ADULT-0-anonymous']
          }
        ];

        const offerConfigurations =
          createOfferConfigurationsFromOfferToBuy(offerToBuy);
        expect(offerConfigurations).toEqual(expectedOfferConfigurations);
      });

      it('Three elements in possibleTravellerIds', () => {
        const offerToBuy = {
          id: '10e3099a-8ea0-46f8-8643-e10b49816f41',
          numberToBuy: 3,
          possibleTravellerIds: [
            ['ADULT-0-anonymous'],
            ['ADULT-1-anonymous'],
            ['ADULT-2-anonymous']
          ],
          withUpgradeProducts: []
        };

        const expectedOfferConfigurations = [
          {
            offerId: '10e3099a-8ea0-46f8-8643-e10b49816f41',
            selectableProductIds: [],
            selectedTravellerIds: ['ADULT-0-anonymous']
          },
          {
            offerId: '10e3099a-8ea0-46f8-8643-e10b49816f41',
            selectableProductIds: [],
            selectedTravellerIds: ['ADULT-1-anonymous']
          },
          {
            offerId: '10e3099a-8ea0-46f8-8643-e10b49816f41',
            selectableProductIds: [],
            selectedTravellerIds: ['ADULT-2-anonymous']
          }
        ];

        const offerConfigurations =
          createOfferConfigurationsFromOfferToBuy(offerToBuy);
        expect(offerConfigurations).toEqual(expectedOfferConfigurations);
      });

      it('Group ticket', () => {
        const expectedOfferConfigurations = [
          {
            offerId: 'a15347d8-75ae-44ef-877c-297984c73b07',
            selectableProductIds: [],
            selectedTravellerIds: ['3518762', '3543283']
          }
        ];

        const offerToBuy = {
          id: 'a15347d8-75ae-44ef-877c-297984c73b07',
          numberToBuy: 1,
          possibleTravellerIds: [['3518762', '3543283']],
          withUpgradeProducts: []
        };

        const offerConfigurations =
          createOfferConfigurationsFromOfferToBuy(offerToBuy);
        expect(offerConfigurations).toEqual(expectedOfferConfigurations);
      });
    });

    describe('withUpgradeProducts', () => {
      const offerToBuy = {
        id: '7f3d172f-a1db-4479-9c79-b68ffb433318',
        numberToBuy: 1,
        possibleTravellerIds: [['190920e5-e5fc-4b44-a9d0-a81931614d7b']],
        withUpgradeProduct: 'SJN:SupplementProduct:Sleeper',
        withUpgradeProducts: ['SJN:SupplementProduct:Sleeper']
      };

      it('Translates the added Netex IDs to selectableProductIds if the offer is supplied', async () => {
        const data = await readJSON<StrippedOffer>(
          './withUpgradeProductsOffer.json'
        );
        const expectedOfferConfigurations = [
          {
            offerId: '7f3d172f-a1db-4479-9c79-b68ffb433318',
            selectableProductIds: ['3cfBvn'],
            selectedTravellerIds: ['190920e5-e5fc-4b44-a9d0-a81931614d7b']
          }
        ];

        const offerConfigurations = createOfferConfigurationsFromOfferToBuy(
          offerToBuy,
          data
        );
        expect(offerConfigurations).toEqual(expectedOfferConfigurations);
      });

      it('Throws error when you do not supply an offer', () => {
        expect(() => {
          createOfferConfigurationsFromOfferToBuy(offerToBuy);
        }).toThrowError(
          'offerToBuy.withUpgradeProducts contains product IDs (["SJN:SupplementProduct:Sleeper"]), but the second argument was undefined. Supply the offer referenced by offerToBuy (id: 7f3d172f-a1db-4479-9c79-b68ffb433318) to fix this error.'
        );
      });

      it('Throws error when you supply the wrong offer', async () => {
        const data = await readJSON<StrippedOffer>(
          './withUpgradeProductsOffer.json'
        );
        expect(() => {
          createOfferConfigurationsFromOfferToBuy(offerToBuy, {
            ...data,
            id: 'wrong-id'
          });
        }).toThrowError(
          'The ID of the offer you supplied (wrong-id) does not match the ID of the offerToBuy (7f3d172f-a1db-4479-9c79-b68ffb433318). Supply the referenced offer to fix this error.'
        );
      });
    });
  });

  describe('Offers 2.0 selectableProductIds', () => {
    it('SelectableProductIds', () => {
      const offerToBuy = {
        id: '7f3d172f-a1db-4479-9c79-b68ffb433318',
        numberToBuy: 1,
        possibleTravellerIds: [['190920e5-e5fc-4b44-a9d0-a81931614d7b']],
        selectableProductIds: ['3cfBvn'],
        withUpgradeProducts: ['SJN:SupplementProduct:Sleeper']
      };

      const expectedOfferConfigurations = [
        {
          offerId: '7f3d172f-a1db-4479-9c79-b68ffb433318',
          selectableProductIds: ['3cfBvn'],
          selectedTravellerIds: ['190920e5-e5fc-4b44-a9d0-a81931614d7b']
        }
      ];

      const offerConfigurations =
        createOfferConfigurationsFromOfferToBuy(offerToBuy);
      expect(offerConfigurations).toEqual(expectedOfferConfigurations);
    });
  });
});
