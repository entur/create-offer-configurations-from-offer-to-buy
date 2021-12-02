import {createOfferConfigurationsFromOfferToBuy} from '../source';

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
        selectedTravellerIds: ['ADULT-0-anonymous']
      },
      {
        offerId: '10e3099a-8ea0-46f8-8643-e10b49816f41',
        selectedTravellerIds: ['ADULT-1-anonymous']
      },
      {
        offerId: '10e3099a-8ea0-46f8-8643-e10b49816f41',
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
    test.todo(
      'Adds Netex IDs from withUpgradeProducts to selectableProductIds'
    );

    test.todo(
      'Translates the added Netex IDs to selectableProductIds if the offer is supplied'
    );
  });
});
