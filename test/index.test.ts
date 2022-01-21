import {createOfferConfigurationsFromOfferToBuy} from '../source';
import optionalProducts from './optionalProducts.json';
import withUpgradeProductsOffer from './withUpgradeProductsOffer.json';

describe('createOfferConfigurationFromOfferToBuy', () => {
  test('One element in possibleTravellerIds', () => {
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

  test('Three elements in possibleTravellerIds', () => {
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

  test('Group ticket', () => {
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

  describe('withUpgradeProducts', () => {
    const offerToBuy = {
      id: '7f3d172f-a1db-4479-9c79-b68ffb433318',
      numberToBuy: 1,
      possibleTravellerIds: [['190920e5-e5fc-4b44-a9d0-a81931614d7b']],
      withUpgradeProduct: 'SJN:SupplementProduct:Sleeper',
      withUpgradeProducts: ['SJN:SupplementProduct:Sleeper']
    };

    test('Adds Netex IDs from withUpgradeProducts to selectableProductIds', () => {
      const expectedOfferConfigurations = [
        {
          offerId: '7f3d172f-a1db-4479-9c79-b68ffb433318',
          selectableProductIds: ['SJN:SupplementProduct:Sleeper'],
          selectedTravellerIds: ['190920e5-e5fc-4b44-a9d0-a81931614d7b']
        }
      ];

      const offerConfigurations =
        createOfferConfigurationsFromOfferToBuy(offerToBuy);
      expect(offerConfigurations).toEqual(expectedOfferConfigurations);
    });

    test('Translates the added Netex IDs to selectableProductIds if the offer is supplied', () => {
      const expectedOfferConfigurations = [
        {
          offerId: '7f3d172f-a1db-4479-9c79-b68ffb433318',
          selectableProductIds: ['3cfBvn'],
          selectedTravellerIds: ['190920e5-e5fc-4b44-a9d0-a81931614d7b']
        }
      ];

      const offerConfigurations = createOfferConfigurationsFromOfferToBuy(
        offerToBuy,
        withUpgradeProductsOffer
      );
      expect(offerConfigurations).toEqual(expectedOfferConfigurations);
    });

    test('Offers 2.0 Translates the added Netex IDs to selectableProductIds if the offer is supplied', () => {
      const expectedOfferConfigurations = [
        {
          offerId: '7f3d172f-a1db-4479-9c79-b68ffb433318',
          selectableProductIds: ['3cfBvn'],
          selectedTravellerIds: ['190920e5-e5fc-4b44-a9d0-a81931614d7b']
        }
      ];

      const offerConfigurations = createOfferConfigurationsFromOfferToBuy(
        offerToBuy,
        optionalProducts
      );
      expect(offerConfigurations).toEqual(expectedOfferConfigurations);
    });
  });
});
