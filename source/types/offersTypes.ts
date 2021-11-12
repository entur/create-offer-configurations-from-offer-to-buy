/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Response from a price and product search.
 */
export interface ProductSearchResponse {
  /** Trip pattern offers. */
  tripPatternOffers: TripPatternOffers[];

  /** Debug information with details about what is processed */
  debug?: OffersDebug;
}

export type SeqFacilitySetEnumV2 = FacilitySetEnumV2[];

/**
 * The seating capacity of a product.
 */
export interface SeatingCapacity {
  /**
   * Netex ID of the product this capacity is valid for.
   * @example NSB:PreassignedFareProduct:Ordinary
   */
  fareProductId: string;

  /**
   * Dated service journey ID this capacity is valid for.
   * @example ENT:DatedServiceJourney:123
   */
  datedServiceJourneyId?: string;

  /**
   * Amount of available seats for this product on given service journey.
   * @format int32
   * @example 12
   */
  capacity?: number;

  /**
   * Shows the status of the seating capacity for a dated service journey.
   * @example CLOSED
   */
  status: "OPEN" | "CLOSED" | "UNKNOWN";
}

/**
 * Recommendation by multiple dimensions; by service journey combinations and types of recommendation with an inner layer of fare classes and facilitySetEnum.
 */
export interface MultidimensionalRecommendation {
  /** Which service journeys this dimensional recommendation covers. */
  serviceJourneysCovered: string[];

  /** Recommendations by type of recommendation, per fare class and per facility set. */
  perTypeOfRecommendation: MultidimensionalTypeOfRecommendationRecommendation[];
}

/**
 * TravellerGroup can be used to divide the total group of travellers into smaller groups with similar characteristics. This can be useful in order to get more detailed information about which products are valid for which traveller. The sum of numberOfPeople across every TravellerGroup should equal the total number of travellers
 */
export interface TravellerGroup {
  /** An unique id of the TravellerGroup. If not provided it will be set to a pseudo random string containing 6 characters. */
  id?: string;

  /** A TravellerSpec is used to limit the returned products to only those that are valid for travellers that has certain characteristics. The characteristics are described by the attributes in the TravellerSpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find only products that are valid for adults, or those valid for a student owning a student discount card */
  travellerSpec: TravellerSpec;

  /**
   * The number of travellers in the group.
   * @format int32
   * @example 1
   */
  numberOfTravellers: number;
}

/**
 * A reference to a group with price data.
 */
export interface PricedGroup {
  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** The type of this usage parameter. */
  typeOfUsageParameter?: string;

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /** Reference to a group */
  userProfiles: UserProfileInGroup[];

  /**
   * Basis on which pricing is done - per whole group
   * or per member.
   */
  pricingBasis?: "PER_OFFER" | "PER_PERSON";

  /**
   * Minimum number of persons in the priced group
   * @format int32
   */
  minNumberOfPersons?: number;

  /**
   * Maximum number of persons in the priced group
   * @format int32
   */
  maxNumberOfPersons?: number;
}

/**
 * @example STANDARD_CLASS
 */
export enum FareClassEnumV2 {
  FIRST_CLASS = "FIRST_CLASS",
  SECOND_CLASS = "SECOND_CLASS",
  THIRD_CLASS = "THIRD_CLASS",
  ECONOMY_CLASS = "ECONOMY_CLASS",
  BUSINESS_CLASS = "BUSINESS_CLASS",
  TURISTA = "TURISTA",
  PREFERENTE = "PREFERENTE",
  PREMIUM_CLASS = "PREMIUM_CLASS",
  ANY = "ANY",
  STANDARD_CLASS = "STANDARD_CLASS",
  UNKNOWN = "UNKNOWN",
}

/**
 * Information about which types and fare classes recommendations are wanted for.
 */
export interface LayeredRecommendationForOffers {
  /** Information about which types and fare classes recommendations are wanted for. */
  layeredRecommendationConfig: LayeredRecommendationConfigForOffers;

  /** The travellers wanted to be covered for this trip. */
  travellers: Traveler[];

  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * Configuration of which recommendations the client wants.
 */
export interface MultidimensionalRecommendationConfig {
  /** Specification of which dimensions apply for this recommendation. */
  dimensionSpec: DimensionSpec;

  /** Specification of which rules apply for this recommendation. */
  ruleSpec: RuleSpec;
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface SearchZonesRequest {
  /** The id of the origin zone. */
  from: string;

  /** Optional sequence of via zones. */
  via?: string[];

  /** The id of the destination zone. */
  to: string;

  /**
   * The expected start time of travel.
   * @format date-time
   */
  travelDate: string;

  /** The travellers. */
  travellers: Traveler[];

  /** Exclude offers that cover only a single trip. */
  excludeSingleTripOffers?: boolean;

  /** Exclude offers that cover multiple trips. */
  excludeMultiTripOffers?: boolean;

  /** Configuration of which recommendations the client wants. */
  recommendationConfig?: RecommendationConfigV2;
}

/**
 * Describes zones where a product is valid
 */
export interface ZonalValidityV2 {
  zones?: string[];
}

/**
 * Used to specify that the vehicle used on this leg is the same that will be used on the next leg
 */
export interface InterchangeTo {
  staySeated?: boolean;

  /** A planned vehicle journey with passengers. */
  fromServiceJourney?: ServiceJourney;

  /** A planned vehicle journey with passengers. */
  toServiceJourney?: ServiceJourney;
}

/**
 * Reference to a group
 */
export interface UserProfileInGroup {
  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];
  typeOfConcession?: string;

  /**
   * The number of people in the group.
   * @format int32
   */
  numberOfPeople: number;
}

/**
 * The distance info per namespace
 */
export type MapStringDistanceResponse = Record<string, DistanceResponse>;

/**
 * A set of recommendation for a type of recommendation and fare classes.
 */
export interface RecommendationByTypeAndPerFareClass {
  /** Type of recommendation this layered recommendation is for. Enum as string with the following values:FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT */
  typeOfRecommendation:
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT";

  /** Recommendations arranged by fare classes */
  perFareClass: RecommendationByFareClass[];
}

export interface OffersError {
  message: string;
  description: string;
}

/**
 * Reference to a Fare Structure Element and its configuration.
 */
export interface FareStructureElementConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:FareStructureElement:TENInterval
   */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Container object for other properties. */
  properties?: Properties;

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** The Geographical Interval with distance and zone data. */
  interval?: GeoIntervalData;

  /** A simple reference object containing enough information to lookup the object itself if needed. */
  qualityFactor?: DataManagedObjectData;

  /** A simple reference object containing enough information to lookup the object itself if needed. */
  distanceMatrixElement?: DataManagedObjectData;

  /** Quotas for the configuration */
  quotas?: Quota[];
}

/**
 * The response for a recommendation.
 */
export interface Recommendation {
  /** Service Journeys which are covered by the offers to buy. */
  serviceJourneysCoveredByOffers: string[];

  /** Which commercial condition the offer fulfills. */
  typeOfRecommendation:
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT";

  /** Recommendations filtered by type of flex */
  offersToBuy: OfferToBuy[];

  /** NetexId of the specified product. */
  specifiedProduct?: string;
}

export type SeqFareClassEnumV2 = FareClassEnumV2[];

/**
 * A group of routes which is generally known to the public by a similar name or number implements
 */
export interface Line {
  /**
   * ID of the Line
   * @example GJB:Line:R30
   */
  id: string;
}

/**
 * References to different distribution parameters.
 */
export interface DistributionParameters {
  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /** The version of the object */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Reference to a FullfillmentMethod with price information. */
  fulfillmentMethod?: string;

  /** Reference to a DistributionChannel with price information. */
  distributionChannel?: string;
}

/**
 * Quota information for leg
 */
export interface LegQuota {
  /** Quota ids */
  ids: string[];

  /**
   * The availability
   * @format int32
   */
  availability: number;
}

/**
 * EstimatedCall for the quay.
 */
export interface EstimatedCall {
  /** The date the estimated call is valid for. */
  date: string;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * The distance info per namespace
 */
export interface DistanceResponse {
  distance: number;
  stops: string[];
  bruttoStops: string[];
}

/**
 * Reference to different UsageParameters.
 */
export interface DiscountUsageParameters {
  /** Reference to reserving parameters with price information. */
  reserving?: PricedUsageParameter[];

  /** Reference to entitlement given parameters with price information. */
  entitlementGiven?: PricedUsageParameter[];
}

/**
 * A planned vehicle journey with passengers.
 */
export interface ServiceJourney {
  /**
   * The id of the service journey.
   * @example ENT:ServiceJourney:1-1605-1919
   */
  id: string;

  /**
   * The private code is actually the vehicle(train) number for this journey.
   * @example 1919
   */
  privateCode?: string;
}

export type SeqComponent = Component[];

/**
 * A specification of an existing ticket.
 */
export interface ExistingTicket {
  /**
   * The netex-id of the entity.
   * @example RUT:PreassignedFareProduct:SupplementaryTicket
   */
  id: string;

  /** The zones the existing ticket is valid for */
  zones?: string[];

  /** ServiceJourneys, not implemented */
  serviceJourneys?: string[];
}

/**
 * Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed.
 */
export interface Authority {
  /**
   * NeTEx-id of Authority.
   * @example ENT:Authority:ENT
   */
  id: string;

  /**
   * Name of Authority.
   * @example ENT
   */
  name?: string;
}

/**
 * Information about which types and fare classes recommendations are wanted for.
 */
export interface LayeredRecommendationsConfigForOffers {
  /** Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation */
  typesOfRecommendation: (
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT"
  )[];

  /** If this is set to true, you will receive recommendations on offers covering the same service journeys for each of the travellers. */
  sameTicketChange: boolean;

  /** Which types of fare classes recommendations are wanted for. */
  includeFareClasses?: (
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN"
  )[];

  /** If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left. */
  includeUnavailableOffers?: boolean;

  /**
   * There are three supported algorithms for organizing how we present each combination of service journeys. Given three service journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique service journey combinations covered by offers.
   */
  serviceJourneyOrganizeAlgorithm:
    | "SUBSEQUENT_COMBINATIONS"
    | "COMBINATIONS_FROM_OFFERS"
    | "FOR_EACH_AND_GROUPED_COMBINATIONS";

  /** If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper. */
  mixinOffersWithHigherFlexibility?: boolean;

  /** If set to true you can get recommendations for offers with supplement products. */
  includeUpgrades?: boolean;

  /** If set to true you can get recommendations for offers with multiple supplement products. */
  includeMultipleUpgrades?: boolean;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * The query uses JourneySpecs, TravellerGroups and ProductSpecs to filter away irrelevant products. JourneySpec is used to limit the returned products to only those valid for specific journeys. For a trip that contains multiple legs each one should be described by a separate JourneySpec. TravellerGroups is used to limit the returned product to only those valid for a specific group of people traveling. The group can be put into a single TravellerGroup, or divided into several according to some characteristics of the travellers described by a JourneySpec. ProductSpec is used to limit the returned product to only those matching the spec. Specs of different types (JourneySpec, TravellerSpec, ProductSpec) acts as a series of filters, only allowing products that are valid for every type of spec. However specs of the same type allows products that are valid for either spec.
 */
export interface ProductQuery {
  /** An list of JourneySpecs. */
  journeys?: JourneySpec[];

  /** A list of TravellerGroups. */
  travellers?: TravellerGroup[];

  /** A list of ProductSpecs */
  products?: ProductSpec[];
}

export interface SeatingCapacityRequest {
  originalDatedServiceJourneyId: string;
  datedServiceJourneyId: string;
  origin: string;
  destination: string;
}

export interface TripSpec {
  /** List of legs constituting a suggested sequence of rides and links for a specific trip. */
  tripPattern: TripPattern;
  travelScopes: TravelScope[];
}

/**
 * A recommendation of offers to buy for a facility set.
 */
export interface MultidimensionalFacilitySetRecommendation {
  /** Which facility sets these recommendations are for. Enum as string with the following values:SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET */
  facilitySet:
    | "SLEEPER"
    | "SEATING"
    | "DOUBLE_SLEEPER"
    | "SINGLE_SLEEPER"
    | "SPECIAL_SLEEPER"
    | "COUCHETTE"
    | "SINGLE_COUCHETTE"
    | "DOUBLE_COUCHETTE"
    | "RECLINING_SEAT"
    | "BABY_COMPARTMENT"
    | "FAMILY_COMPARTMENT"
    | "PANORAMA_COACH"
    | "PULLMAN_COACH"
    | "STANDING"
    | "ANY_FACILITY_SET";

  /** Which offers to buy to get the cheapest option for this facility set. */
  offersToBuy: OfferToBuy[];
}

/**
 * Seating capacity for leg
 */
export interface LegSeatingCapacity {
  /** The id of the product */
  id: string;

  /**
   * The availability
   * @format int32
   */
  availability?: number;
}

/**
 * A list of all zones for a stop place.
 */
export interface StopPlaceZones {
  /** ID of the stop place */
  stopPlaceId?: string;

  /** ID of the topographicPlaceRef */
  topographicPlaceRef?: string;

  /** ID of zones which the stop place is in, if any */
  zoneIds?: string[];
}

export type SeqTypeOfRecommendationEnumV2 = TypeOfRecommendationEnumV2[];

/**
 * Reference to a Sales Package and its configuration.
 */
export interface SalesPackageConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:SalesPackage:Ordinary
   */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Container object for other properties. */
  properties?: Properties;

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** Reference to the travelscope this configuration is for. */
  travelScopeIds?: string[];

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** References to different distribution parameters. */
  distributions: DistributionParameters[];

  /** Reference to a Fare Product and its configuration. */
  fareProducts: FareProductConfiguration[];
}

/**
 * Determines what rules to apply when categorizing and recommending offers for travellers
 */
export interface RuleSpecV2 {
  /**
   * There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
   */
  journeyOrganizeAlgorithm?: JourneyOrganizeAlgorithmV2;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: PriceComparisonAlgorithmV2;
  onlyIncludeRecommendedOffers?: boolean;
  onlyIncludeRecommendationsWithOffersToBuy?: boolean;
  mixinOffersWithHigherFlexibility?: boolean;
}

/**
 * An itinerary with offers.
 */
export interface TripPatternResponse {
  /** List of legs constituting a suggested sequence of rides and links for a specific trip. */
  tripPattern: TripPattern;

  /** Offers for the trip. */
  offers: Offer[];

  /** Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip. */
  recommendations: Recommendation[];

  /** Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip, with filters on types of recommendation and fare class. */
  layeredRecommendations?: LayeredRecommendation[];

  /** Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip, with filters on types of recommendation, fare class and facility set. */
  multidimensionalRecommendations?: MultidimensionalRecommendation[];

  /** Seating capacity for the trip. */
  seatingCapacity?: SeatingCapacity[];
}

/**
 * Information about which types and fare classes recommendations are wanted for.
 */
export interface LayeredRecommendationConfigForOffers {
  /** Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation */
  typesOfRecommendation: (
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT"
  )[];

  /** Which types of fare classes recommendations are wanted for. */
  fareClasses?: (
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN"
  )[];

  /** If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left. */
  includeUnavailableOffers?: boolean;

  /** If set to true; all possible combinations of subsequent service journey combinations will be available in the response. If set to false or not at set; only individual service journeys and largest group of service journeys will be a combination each. Ex. a trip pattern containing three legs with service journeys SJ-1, SJ-2, SJ-3 will give the combinations: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3) if set to false or not set. If set to true it will give the combinations: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3). */
  includeAllCombinationsOfSubsequentServiceJourneys?: boolean;

  /** If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper. */
  mixinOffersWithHigherFlexibility?: boolean;

  /** Should be 'true' if all travelers should change tickets on the same station on trips with multiple legs. */
  sameTicketChange?: boolean;

  /** If set to true you can get recommendations for offers with supplement products. */
  includeUpgrades?: boolean;

  /** If set to true you can get recommendations for offers with multiple supplement products. */
  includeMultipleUpgrades?: boolean;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * Configuration of which recommendations the client wants.
 */
export interface RecommendationConfigV2 {
  /** Determines what fields should be used to categorize the offers */
  categorySpec: CategorySpecV2;

  /** Determines what rules to apply when categorizing and recommending offers for travellers */
  ruleSpec?: RuleSpecV2;
}

export type SeqTraveler = Traveler[];

/**
 * Organisation that owns the given product.
 */
export interface OrganisationConfig {
  /** The netexId for the organisation. */
  id: string;

  /**
   * The privateCode for the organisation, used to integrate with the organisation register.
   * @format int64
   */
  privateCode?: number;
}

/**
 * The response for a recommendation.
 */
export interface RecommendationV2 {
  /** Describes the geographical validity covered by the recommendation. */
  geographicalValidityCovered?: GeographicalValidityCoveredV2[];
  typeOfRecommendation: TypeOfRecommendationEnumV2;
  durationType?: DurationEnum;

  /** Recommendations filtered by type of flex */
  offersToBuy?: OfferToBuy[];

  /** NetexId of the specified product. */
  specifiedProduct?: string;
}

/**
 * Lines where the product is valid
 */
export interface LineValidity {
  /** Valid on lines */
  validOn?: string[];

  /** Not valid on lines */
  notValidOn?: string[];
}

/**
 * Raw data from OTP
 */
export interface OTPDataJson {
  /** Raw trip from OTP */
  trip?: string;
}

/**
 * A place such as platform, stance, or quayside where passengers have access to PT vehicles.
 */
export interface Quay {
  id?: string;

  /** Name */
  name?: string;

  /** A stop place */
  stopPlace?: StopPlace;
}

/**
 * Debug information for a specific service journey
 */
export interface LegDebug {
  /** The ID of the service joruney */
  serviceJourneyId: string;

  /** The ID of the dated service joruney */
  datedServiceJourneyId?: string;

  /** The ID of the original dated service joruney */
  originalDatedServiceJourneyId?: string;

  /** Whether the leg has any offers or not */
  hasOffer: boolean;

  /** Whether all travellers are covered by offers for this leg or not */
  hasOfferForAllTravelers: boolean;

  /** List of IDs of supplement products that was removed due to no capacity for leg */
  supplementProductsRemovedByCapacity: string[];

  /** List of sales package IDs removed because of filtering by recommendation */
  salesPackagesRemovedByRecommendations: string[];

  /** The quotas for this leg */
  quotasUsedForLeg: LegQuota[];

  /** The seating capacity for this leg */
  capacitiesForLeg: LegSeatingCapacity[];
}

export type SeqRecommendationV2 = RecommendationV2[];

/**
 * A map with set of parameter IDs for the choices
 */
export type SetString = string[];

export type MapStringListString = Record<string, string[]>;

/**
 * Description of a travel between two places.
 */
export interface Trip {
  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  from?: Place;

  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  to?: Place;

  /** A list of possible trip patterns. */
  tripPatterns: TripPattern[];
}

/**
 * A travel scope that describes a detailed version of leg for a trip pattern
 */
export interface TravelScope {
  /**
   * Id
   * @format uuid
   */
  id: string;

  /** The start time of the travel scope */
  startTime: string;

  /** The end time of the travel scope */
  endTime: string;

  /**
   * Duration
   * @format float
   */
  duration?: number;

  /** A list of the via stops */
  via?: string[];

  /** A list of the operators */
  operators?: string[];

  /** The authority of the travel scope */
  authority?: string;

  /** Service journeys of the travel scope */
  serviceJourneyIds?: string[];

  /** Dated service journeys of the travel scope */
  datedServiceJourneys?: DatedServiceJourney[];

  /** Transport sub mode for the travel scope */
  submode?:
    | "unknown"
    | "undefined"
    | "internationalFlight"
    | "domesticFlight"
    | "intercontinentalFlight"
    | "domesticScheduledFlight"
    | "shuttleFlight"
    | "intercontinentalCharterFlight"
    | "internationalCharterFlight"
    | "roundTripCharterFlight"
    | "sightseeingFlight"
    | "helicopterService"
    | "domesticCharterFlight"
    | "SchengenAreaFlight"
    | "airshipService"
    | "shortHaulInternationalFlight"
    | "canalBarge"
    | "localBus"
    | "regionalBus"
    | "expressBus"
    | "nightBus"
    | "postBus"
    | "specialNeedsBus"
    | "mobilityBus"
    | "mobilityBusForRegisteredDisabled"
    | "sightseeingBus"
    | "shuttleBus"
    | "highFrequencyBus"
    | "dedicatedLaneBus"
    | "schoolBus"
    | "schoolAndPublicServiceBus"
    | "railReplacementBus"
    | "demandAndResponseBus"
    | "airportLinkBus"
    | "internationalCoach"
    | "nationalCoach"
    | "shuttleCoach"
    | "regionalCoach"
    | "specialCoach"
    | "schoolCoach"
    | "sightseeingCoach"
    | "touristCoach"
    | "commuterCoach"
    | "funicular"
    | "streetCableCar"
    | "allFunicularServices"
    | "undefinedFunicular"
    | "metro"
    | "tube"
    | "urbanRailway"
    | "cityTram"
    | "localTram"
    | "regionalTram"
    | "sightseeingTram"
    | "shuttleTram"
    | "trainTram"
    | "telecabin"
    | "cableCar"
    | "lift"
    | "chairLift"
    | "dragLift"
    | "telecabinLink"
    | "local"
    | "highSpeedRail"
    | "suburbanRailway"
    | "regionalRail"
    | "interregionalRail"
    | "longDistance"
    | "international"
    | "sleeperRailService"
    | "nightRail"
    | "carTransportRailService"
    | "touristRailway"
    | "airportLinkRail"
    | "railShuttle"
    | "replacementRailService"
    | "specialTrain"
    | "crossCountryRail"
    | "rackAndPinionRailway"
    | "internationalCarFerry"
    | "nationalCarFerry"
    | "regionalCarFerry"
    | "localCarFerry"
    | "internationalPassengerFerry"
    | "nationalPassengerFerry"
    | "regionalPassengerFerry"
    | "localPassengerFerry"
    | "postBoat"
    | "trainFerry"
    | "roadFerryLink"
    | "airportBoatLink"
    | "highSpeedVehicleService"
    | "highSpeedPassengerService"
    | "sightseeingService"
    | "schoolBoat"
    | "cableFerry"
    | "riverBus"
    | "scheduledFerry"
    | "shuttleFerryService"
    | "communalTaxi"
    | "charterTaxi"
    | "waterTaxi"
    | "railTaxi"
    | "bikeTaxi"
    | "blackCab"
    | "miniCab"
    | "allTaxiServices"
    | "hireCar"
    | "hireVan"
    | "hireMotorbike"
    | "hireCycle"
    | "allHireVehicle";

  /** Transport mode for the travel scope */
  vehicleMode:
    | "AIR"
    | "BUS"
    | "CABLE_WAY"
    | "WATER"
    | "FUNICULAR"
    | "LIFT"
    | "RAIL"
    | "METRO"
    | "TRAM"
    | "UNKNOWN";

  /** A list of all zones for a stop place. */
  fromStopPlaceZones?: StopPlaceZones;

  /** A list of all zones for a stop place. */
  toStopPlaceZones?: StopPlaceZones;

  /** Zones that intermediate origin and destination */
  intermediateStopPlaceZones?: StopPlaceZones[];

  /** A group of routes which is generally known to the public by a similar name or number implements */
  line?: Line;

  /** The available fareQuotaFactors */
  availableFareQuotaFactors?: FareQuotaFactorAvailability[];

  /** Polyline */
  polyLine?: string;

  /** Zones in sequence */
  zonesInSequencePrNameSpace?: Record<string, string[]>;

  /** The distance info per namespace */
  distanceInfoPrNameSpace?: Record<string, DistanceResponse>;

  /**
   * The shortest distance between zones
   * @format int32
   */
  zonesShortestDistance?: number;

  /**
   * The ten distance of the travel scope
   * @format double
   */
  tenDistance?: number;

  /** The distribution channel ID */
  distributionChannelId?: string;

  /** A flag if the travel scope is a roundt trip */
  isRoundTrip?: boolean;

  /** Luggage types included in the travel scope */
  luggageTypes?: (
    | "HANDBAG"
    | "HAND_LUGGAGE"
    | "SMALL_SUITCASE"
    | "SUITCASE"
    | "TRUNK"
    | "OVERSIZE_ITEM"
    | "BICYCLE"
    | "SPORTING_EQUIPMENT"
    | "SKIS"
    | "MUSICAL_INSTRUMENT"
    | "PUSH_CHAIR"
    | "MOTORIZED_WHEELCHAIR"
    | "LARGE_MOTORIZED_WHEELCHAIR"
    | "WHEELCHAIR"
    | "SMALL_ANIMAL"
    | "ANIMAL"
    | "GAME"
    | "MOTORCYCLE"
    | "OTHER"
  )[];

  /**
   * The order of the travel scope in the trip pattern
   * @format int32
   */
  orderInTripPattern?: number;

  /** Used to specify that the vehicle used on this leg is the same that will be used on the next leg */
  interchangeTo?: InterchangeTo;

  /** A request for seating capacity */
  seatingCapacityRequests?: SeatingCapacityRequest[];

  /** The shortest distance for the whole travel scope */
  shortestDistanceForWholePath?: ShortestDistanceForWholePath;

  /** Parameters for an inventory request */
  inventoryRequestParameters?: InventoryRequestParameters;
  bruttoZonesInSequencePrNameSpace: Record<string, string[]>;
  inventoryStock: Component[];
  actualFromStopPlace?: string;
  actualToStopPlace?: string;
}

/**
 * A map with set of parameter IDs for the choices
 */
export type MapStringSetString = Record<string, string[]>;

/**
 * A recommendation of offers to buy for a fare class.
 */
export interface RecommendationByFareClass {
  /** Which fare classes these recommendations are for. */
  fareClass:
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN";

  /** Which offers to buy to get the cheapest option for this fare class. */
  offersToBuy: OfferToBuy[];
}

/**
 * The shortest distance for the whole travel scope
 */
export interface ShortestDistanceForWholePath {
  idsOfMergedTravelScopes: string[];
  distance: number;
  zones: string[];
}

export type SeqOffer = Offer[];

export interface TravelerOfferContainer {
  tripId: string;
  offers: Offer[];
  travelers: Traveler[];

  /** A configuration of how to group travellers in offers. */
  maybeGroupConfig?: GroupConfig;
}

/**
 * Container for specifying which types of recommendations are wanted and what kind of offers to look for.
 */
export interface RecommendationConfig {
  /** Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation */
  wantedRecommendations: (
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT"
  )[];

  /** Specifies which fare classes to include in recommendations, if it is empty all are included */
  includeFareClasses?: (
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN"
  )[];

  /** Specifies which authorities to include in recommendations, if it is empty all are included */
  includeAuthorities?: string[];

  /** If set to true the offers which are not recommended will be removed from output. */
  includeRecommendedOffersOnly?: boolean;

  /** If set to true offers which are unavailable will be included in recommendation */
  includeUnavailableOffers?: boolean;

  /** If set to true offers containing multiple preassigned fare products with different flexibility will be included in recommendations. */
  includeOffersWithMixedCommercialConditions?: boolean;

  /** Netex IDs of products which has to be included in a recommendation, this will only be used if one of the wantedRecommendations are SPECIFIED_PRODUCT. */
  specifiedProducts?: string[];

  /** If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper. */
  mixinOffersWithHigherFlexibility?: boolean;

  /** Should be 'true' if all travelers should change tickets on the same station on trips with multiple legs. */
  sameTicketChange?: boolean;

  /** If set to true you can get recommendations for offers with supplement products. */
  includeUpgrades?: boolean;

  /** If set to true you can get recommendations for offers with multiple supplement products. */
  includeMultipleUpgrades?: boolean;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

export type SeqDurationEnum = DurationEnum[];

export interface SearchZonesResponse {
  offers: Offer[];
  recommendations?: RecommendationV2[];
}

export type ListUUID = string[];

export type JValue = object;

/**
 * A request used to search for fare products for a specified trip.
 */
export interface PostTripExtensionRequest {
  /** Description of a travel between two places. */
  trip: Trip;

  /** A specification of a traveler. */
  traveler: Traveler;

  /** A specification of an existing ticket. */
  existingTicket: ExistingTicket;
}

/**
 * A TravellerSpec is used to limit the returned products to only those that are valid for travellers that has certain characteristics. The characteristics are described by the attributes in the TravellerSpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find only products that are valid for adults, or those valid for a student owning a student discount card
 */
export interface TravellerSpec {
  /**
   * The type of concession of the traveller.
   * @example NSB:TypeOfConcession:Student
   */
  typeOfConcession?: string;

  /**
   * The traveller has no concession
   * @example false
   */
  noConcession?: boolean;

  /**
   * The user type of the traveller.
   * @example ADULT
   */
  userType?:
    | "ANYONE"
    | "ADULT"
    | "CHILD"
    | "INFANT"
    | "ANIMAL"
    | "SENIOR"
    | "GUIDE_DOG"
    | "YOUTH"
    | "STUDENT"
    | "MILITARY";

  /**
   * References to products the traveller already owns.
   * @example NSB:SalesDiscountRight:CustomerCard
   */
  ownedProducts?: string[];
}

/**
 * All OFFERs within the same TAG are covering as many as possible SERVICE JOURNEYs for all TRAVELERs.
 */
export interface Tag {
  /** An identifier for the TAG. */
  name: string;

  /**
   * How many of this offer should be bought to cover the TRAVELERs
   * @format int32
   */
  nrToBuy: number;
}

/**
 * Debug information with details about what is processed
 */
export interface OffersDebug {
  /** The request type when making calls to products */
  tripSpecs: TripSpec[];

  /** The response from products */
  productResponse: TravelerOfferContainer[];

  /** The capacities that are aggregated from seating services and inventory */
  seatingCapacities: SeatingCapacity[];

  /** List of info about what was removed from each offer due to capacity */
  offersRemovedByCapacity: FilteredOffer[];

  /** List of which offers were removed due to recommendation filtering */
  offersRemovedByRecommendations: FilteredOffer[];

  /** List of details about each leg */
  legDebugs: LegDebug[];
}

/**
 * A summary of the properties of a fare product or package that can be used to generate passenger information.
 */
export interface ConditionSummary {
  /**
   * Whether the ticket is refundable.
   * @example true
   */
  isRefundable?: boolean;

  /**
   * Whether the ticket is exchangeable.
   * @example true
   */
  isExchangeable?: boolean;
}

/**
 * Super type for all places (stop places, quays, car parks, bike parks and bike rental stations)
 */
export interface Place {
  name?: string;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * A simple reference object containing enough information to lookup the object itself if needed.
 */
export interface DataManagedObjectData {
  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];
}

export interface TariffZone {
  id?: string;
  name?: string;
}

/**
 * Specification of which dimensions apply for this recommendation.
 */
export interface DimensionSpec {
  /**
   * There are three supported algorithms for organizing how we present each combination of service journeys. Given three service journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique service journey combinations covered by offers.
   */
  serviceJourneyOrganizeAlgorithm:
    | "SUBSEQUENT_COMBINATIONS"
    | "COMBINATIONS_FROM_OFFERS"
    | "FOR_EACH_AND_GROUPED_COMBINATIONS";

  /** Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation */
  includeTypesOfRecommendations: (
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT"
  )[];

  /** Which types of fare classes recommendations are wanted for. */
  includeFareClasses: (
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN"
  )[];

  /** Which types of accommodation facility sets recommendations are wanted for. */
  includeAccommodationFacilitySet: (
    | "SLEEPER"
    | "SEATING"
    | "DOUBLE_SLEEPER"
    | "SINGLE_SLEEPER"
    | "SPECIAL_SLEEPER"
    | "COUCHETTE"
    | "SINGLE_COUCHETTE"
    | "DOUBLE_COUCHETTE"
    | "RECLINING_SEAT"
    | "BABY_COMPARTMENT"
    | "FAMILY_COMPARTMENT"
    | "PANORAMA_COACH"
    | "PULLMAN_COACH"
    | "STANDING"
    | "ANY_FACILITY_SET"
  )[];
}

/**
 * Start and stop places where the product is valid
 */
export interface PointToPointValidityV2 {
  /**
   * Valid from place
   * @example NSR:StopPlace:398
   */
  fromPlace: string;

  /**
   * Valid to place
   * @example NSR:StopPlace:440
   */
  toPlace: string;
}

/**
 * A configuration of how to group travellers in offers.
 */
export interface GroupConfig {
  /**
   * Number of compartments to group travellers in.
   * @format int32
   */
  numberOfCompartments: number;
}

/**
 * Start and stop places where the product is valid
 */
export interface PointToPointValidity {
  /**
   * Valid from place
   * @example NSR:StopPlace:398
   */
  fromPlace?: string;

  /**
   * Valid to place
   * @example NSR:StopPlace:440
   */
  toPlace?: string;
}

/**
 * A set of recommendations for a type of recommendation and fare classes with facility set.
 */
export interface MultidimensionalTypeOfRecommendationRecommendation {
  /** Type of recommendation this advanced recommendation is for. Enum as string with the following values:FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT */
  typeOfRecommendation:
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT";

  /** Recommendations arranged by fare classes with facility sets */
  perFareClass: MultidimensionalFareClassWithFacilitySetRecommendation[];
}

/**
 * Container for the json response from OTP.
 */
export interface OTPJsonResponse {
  /** Raw data from OTP */
  data?: OTPDataJson;

  /** Errors if there are any */
  errors?: JValue[];
}

/**
* There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
* @example FOR_EACH_AND_GROUPED_COMBINATIONS
*/
export enum JourneyOrganizeAlgorithmV2 {
  SUBSEQUENT_COMBINATIONS = "SUBSEQUENT_COMBINATIONS",
  COMBINATIONS_FROM_OFFERS = "COMBINATIONS_FROM_OFFERS",
  FOR_EACH_AND_GROUPED_COMBINATIONS = "FOR_EACH_AND_GROUPED_COMBINATIONS",
}

/**
 * A specification of which travelers can use an offer, along with limitations on the number of travelers that must be selected from the group for the OFFER to be valid.
 */
export interface TravelerValidityGroup {
  /** The ids of the travelers. */
  travelerIds: string[];

  /**
   * The maximum number of travelers that can be selected from the group.
   * @format int32
   */
  maxNumberOfTravelers: number;

  /**
   * The minimum number of travelers that can be selected from the group.
   * @format int32
   */
  minNumberOfTravelers: number;

  /** Reference to the user profile associated with this offer. */
  userProfileId: string;

  /** Version to the user profile associated with this offer. */
  userProfileVersion: string;

  /** If the request uses traveller groups to specify the travellers this field holds the id of the group that the travellers belongs to. */
  travellerGroupId?: string;

  /** If there are a through fare with two operators more user profiles are needed, this list represents these */
  userProfileIds?: string[];
}

/**
 * A place in a journey spec that can represent å stop place or a zone.
 */
export interface PlaceInJourneySpec {
  /** A stop place */
  stopPlace?: StopPlace;

  /** A zone id. */
  zoneId?: string;
}

/**
 * A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'.
 */
export interface PricedResourceRef {
  /** ID of the resource, e.g. an ID of a 'TripPattern'. */
  id: string;

  /** Name of the resource. */
  resourceType: string;
}

export interface FareQuotaFactorAvailability {
  serviceJourneyId: string;
  netexIds: string[];

  /** @format int32 */
  availability: number;
}

/**
 * A ProductSpec is used to limit the returned products to only those that matches the characteristics of the ProductSpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find a specific product by id, or every product that a transport authority owns.
 */
export interface ProductSpec {
  /**
   * The id of the product.
   * @example NSB:PreassignedFareProduct:Ordinary
   */
  productId?: string;

  /**
   * The owner of the product.
   * @example NSB:Authority:NSB
   */
  authority?: string;
}

/**
 * A request used to update travelers for a persisted trip-pattern
 */
export interface UpdateRecordRequest {
  /** Travelers to be updated. */
  travelers: Traveler[];

  /** Container for specifying which types of recommendations are wanted and what kind of offers to look for. */
  recommendationConfig?: RecommendationConfig;

  /** Information about which types and fare classes recommendations are wanted for. */
  layeredRecommendationConfig: LayeredRecommendationsConfigForOffers;

  /** Configuration of which recommendations the client wants. */
  multidimensionalRecommendationConfig?: MultidimensionalRecommendationConfig;

  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * A planned vehicle journey with passengers.
 */
export interface DatedServiceJourney {
  /**
   * A unique departure ID.
   * @example ENT:DatedServiceJourney:151530
   */
  datedServiceJourneyId: string;

  /**
   * A reference to the original dated service journey ID.
   * @example ENT:DatedServiceJourney:151530
   */
  originalDatedServiceJourneyId: string;
}

/**
 * Specification of which rules apply for this recommendation.
 */
export interface RuleSpec {
  /** If this is set to true, you will receive recommendations on offers covering the same service journeys for each of the travellers. */
  sameTicketChange: boolean;

  /** If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left. */
  includeUnavailableOffers: boolean;

  /** If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper. */
  mixinOffersWithHigherFlexibility: boolean;

  /** If set to true you can get recommendations for offers with supplement products. */
  includeUpgrades?: boolean;

  /** If set to true you can get recommendations for offers with multiple supplement products. */
  includeMultipleUpgrades?: boolean;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * Reference to a Validable Element and its configuration.
 */
export interface ValidableElementConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:ValidableElement:Ordinary
   */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Container object for other properties. */
  properties?: Properties;

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** Reference to a Fare Structure Element and its configuration. */
  fareStructureElements: FareStructureElementConfiguration[];

  /**
   * How many repeatable validable elements
   * @format int32
   * @example 10
   */
  occurs?: number;
}

/**
 * Text in a specific language.
 */
export interface TextInLanguage {
  /** Language code. */
  lang?: string;

  /** The text. */
  value?: string;
}

/**
 * @example DAY_PASS
 */
export enum DurationEnum {
  SINGLE_TRIP = "SINGLE_TRIP",
  RETURN_TRIP = "RETURN_TRIP",
  CARNET = "CARNET",
  DAY_PASS = "DAY_PASS",
  WEEKLY_PASS = "WEEKLY_PASS",
  WEEKEND_PASS = "WEEKEND_PASS",
  MONTHLY_PASS = "MONTHLY_PASS",
  SEASON_TICKET = "SEASON_TICKET",
  PROFILE_MEMBERSHIP = "PROFILE_MEMBERSHIP",
  OPEN_ENDED = "OPEN_ENDED",
  OTHER = "OTHER",
}

/**
 * A ProductRequest is used to find products or offers that satisfy a query
 */
export interface OfferRequest {
  /** The query uses JourneySpecs, TravellerGroups and ProductSpecs to filter away irrelevant products. JourneySpec is used to limit the returned products to only those valid for specific journeys. For a trip that contains multiple legs each one should be described by a separate JourneySpec. TravellerGroups is used to limit the returned product to only those valid for a specific group of people traveling. The group can be put into a single TravellerGroup, or divided into several according to some characteristics of the travellers described by a JourneySpec. ProductSpec is used to limit the returned product to only those matching the spec. Specs of different types (JourneySpec, TravellerSpec, ProductSpec) acts as a series of filters, only allowing products that are valid for every type of spec. However specs of the same type allows products that are valid for either spec. */
  query: ProductQuery;

  /** A map with set of parameter IDs for the choices */
  requestedParameters?: Record<string, string[]>;
}

/**
 * A container pairing a TRIP PATTERN with a list of valid OFFERs.
 */
export interface TripPatternOffers {
  /** A reference to the TRIP PATTERN by id. */
  tripPatternId: string;

  /** A list of valid OFFERSs for the TRIP PATTERN. */
  offers: Offer[];

  /** Seating capacity for the trip. */
  seatingCapacity?: SeatingCapacity[];

  /** Recommendations for which offers to buy for each type of recommendation specified by the client. */
  recommendations?: Recommendation[];

  /** Recommendations for which offers to buy for each type of recommendation and per fare class, both specified by the client. */
  layeredRecommendations?: LayeredRecommendation[];

  /** Recommendations for which offers to buy for each type of recommendation, per fare class and per facility set, both specified by the client. */
  multidimensionalRecommendations?: MultidimensionalRecommendation[];
}

export interface PreownedProductSpec {
  /**
   * The netex-id of the entity.
   * @example NSB:FareTable:UserProfileDiscounts
   */
  id: string;

  /**
   * The version of the entity. Assumes the latest version if no version is specified.
   * @example NSB:Version:V1
   */
  version?: string;

  /**
   * List of zones covered by the product referred to by this entity.
   * @example ["RUT:TariffZone:3V"]
   */
  validZones?: string[];
}

/**
 * An identifiable SALES PACKAGE CONFIGURATION paired with information regarding which travelers can use it.
 */
export interface Offer {
  /**
   * The ID of the OFFER.
   * @format uuid
   */
  id: string;

  /** The requested distribution channel */
  requestedByDistributionChannel?: string;

  /** A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'. */
  pricedResource?: PricedResourceRef;

  /** Reference to a Sales Package and its configuration. */
  salesPackageConfig: SalesPackageConfiguration;

  /** Traveler limitations that applies to the SALES PACKAGE CONFIGURATION. */
  travelerMapping: TravelerValidityGroup[];

  /** All OFFERs within the same TAG are covering as many as possible SERVICE JOURNEYs for all TRAVELERs. */
  tags: Tag[];
}

/**
 * Price with VAT and currency information
 */
export interface Price {
  /** The amount. */
  amount: string;

  /** The VAT group. */
  vatGroup?: string;

  /**
   * The currency of the amount.
   * @example NOK
   */
  currency: string;
}

/**
 * Reference to different UsageParameters.
 */
export interface UsageParameters {
  /** A reference to a user profile and price data. */
  userProfile?: PricedUserProfile;

  /** Reference to a refund parameter with price information. */
  refunds: PricedUsageParameter[];

  /** A reference to a user parameter and price data. */
  usageValidityPeriod?: PricedUsageParameter;

  /** Reference to luggage allowance parameters with price information. */
  luggageAllowances: PricedUsageParameter[];

  /** Reference to exchanging parameters with price information. */
  exchanging: PricedUsageParameter[];

  /** Reference to reserving parameters with price information. */
  reserving: PricedUsageParameter[];

  /** Reference to replacing parameters with price information. */
  replacing: PricedUsageParameter[];

  /** Reference to purchase window parameters with price information. */
  purchaseWindow: PricedUsageParameter[];

  /** Reference to entitlement given parameters with price information. */
  entitlementGiven: PricedUsageParameter[];

  /** Reference to round trip parameters with price information */
  roundTrip: PricedUsageParameter[];

  /** A reference to a group with price data. */
  group?: PricedGroup;

  /** Reference to transferability parameters with price information. */
  transferability?: PricedUsageParameter[];
}

/**
 * Reference to a Fare Product and its configuration.
 */
export interface FareProductConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:PreassignedFareProduct:Ordinary
   */
  id: string;

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** Organisation that owns the given product. */
  organisation: OrganisationConfig;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Container object for other properties. */
  properties?: Properties;

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /** Reference to a Validable Element and its configuration. */
  validableElements: ValidableElementConfiguration[];

  /** A classification of this fare product */
  typeOfFareProduct?: string;

  /** A summary of the properties of a fare product or package that can be used to generate passenger information. */
  conditionSummary?: ConditionSummary;

  /** A sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRight;

  /** The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveler had an entitlement product. */
  originatingFromProductId?: string;

  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;

  /** Zones where the product is valid */
  zonalValidity?: ZonalValidity;

  /** Lines where the product is valid */
  lineValidity?: LineValidity;

  /**
   * Amount of priced unit
   * @format int32
   */
  amount?: number;

  /** Type of priced unit */
  productType?:
    | "TRIP_CARNET"
    | "PASS_CARNET"
    | "UNIT_COUPONS"
    | "STORED_VALUE"
    | "OTHER";
}

/**
 * A reference to a user parameter and price data.
 */
export interface PricedUsageParameter {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:UserProfile:Adult
   */
  id: string;

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** The type of this usage parameter. */
  typeOfUsageParameter?: string;

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;
}

/**
 * The Geographical Interval with distance and zone data.
 */
export interface GeoIntervalData {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:GeographicalInterval:60TEN
   */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /**
   * The distance in KM or TEN for this interval.
   * @format double
   */
  distance?: number;

  /**
   * The number of zones in this interval.
   * @format int32
   */
  zoneCount?: number;

  /** A list of the zones that exist in this interval. Empty if not relevant. */
  zones: string[];
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface SearchStopPlaceRequest {
  /** The id of the origin stop place. */
  from: string;

  /** The id of the destination stop place. */
  to: string;

  /** The authority of the stop place. */
  authority?: string;

  /**
   * The expected start time of travel.
   * @format date-time
   */
  travelDate: string;

  /** The travellers. */
  travellers: Traveler[];

  /** If true then offers for single ticket products will not be included in the response. */
  excludeSingleTripOffers?: boolean;

  /** Exclude offers that cover multiple trips. */
  excludeMultiTripOffers?: boolean;

  /** If true then only offers that covers whole trip will be returned. False if not set */
  offersForWholeTripOnly?: boolean;

  /** Configuration of which recommendations the client wants. */
  recommendationConfig?: RecommendationConfigV2;
}

/**
 * @example SLEEPER
 */
export enum FacilitySetEnumV2 {
  SLEEPER = "SLEEPER",
  SEATING = "SEATING",
  DOUBLE_SLEEPER = "DOUBLE_SLEEPER",
  SINGLE_SLEEPER = "SINGLE_SLEEPER",
  SPECIAL_SLEEPER = "SPECIAL_SLEEPER",
  COUCHETTE = "COUCHETTE",
  SINGLE_COUCHETTE = "SINGLE_COUCHETTE",
  DOUBLE_COUCHETTE = "DOUBLE_COUCHETTE",
  RECLINING_SEAT = "RECLINING_SEAT",
  BABY_COMPARTMENT = "BABY_COMPARTMENT",
  FAMILY_COMPARTMENT = "FAMILY_COMPARTMENT",
  PANORAMA_COACH = "PANORAMA_COACH",
  PULLMAN_COACH = "PULLMAN_COACH",
  STANDING = "STANDING",
  ANY_FACILITY_SET = "ANY_FACILITY_SET",
}

/**
 * Organisation providing public transport services.
 */
export interface Operator {
  /** NeTEx-id of Operator. */
  id?: string;

  /** Name of Operator. */
  name?: string;
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface SearchRequest {
  /** Description of a travel between two places. */
  trip: Trip;

  /** The travelers for the set trip */
  travelers: Traveler[];

  /** Conditions that should be included, Enum as string with the following values: FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT */
  includeConditions?: (
    | "FLEXIBLE"
    | "SEMI_FLEXIBLE"
    | "NON_FLEXIBLE"
    | "CHEAPEST"
    | "SPECIFIED_PRODUCT"
  )[];

  /** Container for specifying which types of recommendations are wanted and what kind of offers to look for. */
  recommendationConfig?: RecommendationConfig;

  /** Information about which types and fare classes recommendations are wanted for. */
  layeredRecommendationConfig?: LayeredRecommendationConfigForOffers;

  /** Configuration of which recommendations the client wants. */
  multidimensionalRecommendationConfig?: MultidimensionalRecommendationConfig;

  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;

  /** Set this to true if you want additional debug information in the response. Only use it for testing and debugging. */
  debug?: boolean;
}

/**
 * A stop place
 */
export interface StopPlace {
  /** ID */
  id: string;

  /** Name of stop place. */
  name?: string;

  /** Tariff zones */
  tariffZones?: TariffZone[];

  /**
   * Longitude
   * @format double
   */
  longitude?: number;

  /**
   * Latitude
   * @format double
   */
  latitude?: number;
}

/**
 * Describes the geographical validity covered by the recommendation
 */
export interface GeographicalValidityCoveredV2 {
  serviceJourneys?: string[];

  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidityV2;

  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidityV2;
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface SearchZonesExtensionRequest {
  /** The id of the origin zone. */
  from: string;

  /** Optional sequence of via zones. */
  via?: string[];

  /** The id of the destination zone. */
  to: string;

  /**
   * The expected start time of travel.
   * @format date-time
   */
  travelDate: string;

  /** A specification of a traveler. */
  traveller: Traveler;

  /** A specification of an existing ticket. */
  existingTicket: ExistingTicket;

  /** Configuration of which recommendations the client wants. */
  recommendationConfig?: RecommendationConfigV2;
}

/**
 * Parameters for an inventory request
 */
export interface InventoryRequestParameters {
  /** Part of a trip pattern. Either a ride on a public transport vehicle or access or path link to/from/between places */
  leg: Leg;

  /** @format int32 */
  travelGroupSize: number;
}

/**
 * Zones where the product is valid
 */
export interface ZonalValidity {
  /**
   * Valid in zones
   * @example ['RUT:TariffZone:1']
   */
  zones?: string[];
}

/**
 * Recommendation by multiple dimensions; by service journey combinations and types of recommendation with an inner layer of fare classes.
 */
export interface LayeredRecommendation {
  /** Which service journeys this layered recommendation covers. */
  serviceJourneysCovered: string[];

  /** Recommendations by type of recommendation and per fare class. */
  recommendations: RecommendationByTypeAndPerFareClass[];
}

export type SeqTravelScope = TravelScope[];

/**
 * Valid offers for a query.
 */
export interface OfferResponse {
  /** A list of offers. */
  offers: Offer[];
}

/**
 * A sale discount right that has been applied to the fare product.
 */
export interface DiscountRight {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example SJN:SaleDiscountRight:Premium
   */
  id: string;

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /**
   * The version of the object
   * @example SJN:Version:SDR-Premium-1
   */
  version: string;

  /** The name of the object. */
  name?: TextInLanguage[];

  /** The description of the object. */
  description?: TextInLanguage[];

  /** Organisation that owns the given product. */
  organisation: OrganisationConfig;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** Reference to different UsageParameters. */
  parameters?: DiscountUsageParameters;

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /** The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveler had an entitlement product. */
  originatingFromProductId?: string;
}

/**
 * Container object for other properties.
 */
export interface Properties {
  /** FareClasses. Enum as string with the following values: FIRST_CLASS, SECOND_CLASS, THIRD_CLASS, ECONOMY_CLASS, BUSINESS_CLASS, TURISTA, PREFERENTE, STANDARD_CLASS, PREMIUM_CLASS, ANY, UNKNOWN */
  fareClasses?: (
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN"
  )[];

  /** Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING */
  accommodations?: (
    | "SLEEPER"
    | "SEATING"
    | "DOUBLE_SLEEPER"
    | "SINGLE_SLEEPER"
    | "SPECIAL_SLEEPER"
    | "COUCHETTE"
    | "SINGLE_COUCHETTE"
    | "DOUBLE_COUCHETTE"
    | "RECLINING_SEAT"
    | "BABY_COMPARTMENT"
    | "FAMILY_COMPARTMENT"
    | "PANORAMA_COACH"
    | "PULLMAN_COACH"
    | "STANDING"
  )[];
}

/**
 * One possible grouping of travellers for the number of offers to buy
 */
export type SeqSeqString = string[][];

export interface FutureHttpResponse {
  completed: boolean;
}

export type SeqString = string[];

/**
 * Information about what configs is removed from an offer
 */
export interface FilteredOffer {
  /**
   * ID of an offer
   * @format uuid
   */
  id: string;

  /** List of tiny configs */
  removedConfigs: TinyConfig[];
}

/**
 * A component for the stock. Can be a root nest, a nest or a product. Specifies availability in regards to counting rules.
 */
export interface Component {
  /** The group type, i.e "travel document". */
  nestingGroup?: string;

  /**
   * The combined availability of all all components.
   * @format int32
   */
  aggregatedAvailability?: number;

  /** The products for which the component is valid. */
  products?: string[];

  /**
   * The quota left for this component.
   * @format int32
   */
  leftInQuota?: number;

  /**
   * The priority of the component in regards to other components on the same level. Goes from high to low.
   * @format int32
   */
  priority?: number;

  /** The selection rule says something about how the quotas are consumed */
  selectionRule?: "single" | "combined";

  /** The consumption rule says something about how inventory counts their quotas. */
  consumptionRule?: string;

  /** The nested components. If it's empty then it is a product, otherwise the component is a nest. */
  components?: Component[];
  rootNode?: boolean;
  leafNode?: boolean;
}

/**
 * A reference to a user profile and price data.
 */
export interface PricedUserProfile {
  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /** The version of the object */
  version: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;
  typeOfConcession?: string;
}

/**
 * Tiny representation of a config with just id and service journey ids
 */
export interface TinyConfig {
  /** NetEx id of the config */
  id: string;

  /** Service journeys covered by config */
  serviceJourneys: string[];
}

/**
 * Determines what fields should be used to categorize the offers
 */
export interface CategorySpecV2 {
  typesOfRecommendation: TypeOfRecommendationEnumV2[];
  durationTypes?: DurationEnum[];
  fareClasses?: FareClassEnumV2[];
  facilitySet?: FacilitySetEnumV2[];
  specifiedProducts?: string[];
}

/**
 * A JourneySpec is used to limit the returned products to only those that are valid for journeys that has certain characteristics. The characteristics are described by the attributes in the JourneySpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find every product that is valid on a journey operated by NSB, or those valid on a specific journey from Oslo to Gjøvik on 23.july.
 */
export interface JourneySpec {
  /**
   * The start time of the journey.
   * @format date-time
   */
  startTime?: string;

  /**
   * The end time of the journey.
   * @format date-time
   */
  endTime?: string;

  /**
   * The id of the operator on the journey
   * @example NSB:Operator:NSB
   */
  operator?: string;

  /**
   * The id of the authority on the journey
   * @example NSB:Authority:NSB
   */
  authority?: string;

  /**
   * The vehicle mode of the journey
   * @example RAIL
   */
  vehicleMode?:
    | "AIR"
    | "BUS"
    | "CABLE_WAY"
    | "WATER"
    | "FUNICULAR"
    | "LIFT"
    | "RAIL"
    | "METRO"
    | "TRAM"
    | "UNKNOWN";

  /**
   * The transport submode of the journey
   * @example nightRail
   */
  subMode?:
    | "unknown"
    | "undefined"
    | "internationalFlight"
    | "domesticFlight"
    | "intercontinentalFlight"
    | "domesticScheduledFlight"
    | "shuttleFlight"
    | "intercontinentalCharterFlight"
    | "internationalCharterFlight"
    | "roundTripCharterFlight"
    | "sightseeingFlight"
    | "helicopterService"
    | "domesticCharterFlight"
    | "SchengenAreaFlight"
    | "airshipService"
    | "shortHaulInternationalFlight"
    | "canalBarge"
    | "localBus"
    | "regionalBus"
    | "expressBus"
    | "nightBus"
    | "postBus"
    | "specialNeedsBus"
    | "mobilityBus"
    | "mobilityBusForRegisteredDisabled"
    | "sightseeingBus"
    | "shuttleBus"
    | "highFrequencyBus"
    | "dedicatedLaneBus"
    | "schoolBus"
    | "schoolAndPublicServiceBus"
    | "railReplacementBus"
    | "demandAndResponseBus"
    | "airportLinkBus"
    | "internationalCoach"
    | "nationalCoach"
    | "shuttleCoach"
    | "regionalCoach"
    | "specialCoach"
    | "schoolCoach"
    | "sightseeingCoach"
    | "touristCoach"
    | "commuterCoach"
    | "funicular"
    | "streetCableCar"
    | "allFunicularServices"
    | "undefinedFunicular"
    | "metro"
    | "tube"
    | "urbanRailway"
    | "cityTram"
    | "localTram"
    | "regionalTram"
    | "sightseeingTram"
    | "shuttleTram"
    | "trainTram"
    | "telecabin"
    | "cableCar"
    | "lift"
    | "chairLift"
    | "dragLift"
    | "telecabinLink"
    | "local"
    | "highSpeedRail"
    | "suburbanRailway"
    | "regionalRail"
    | "interregionalRail"
    | "longDistance"
    | "international"
    | "sleeperRailService"
    | "nightRail"
    | "carTransportRailService"
    | "touristRailway"
    | "airportLinkRail"
    | "railShuttle"
    | "replacementRailService"
    | "specialTrain"
    | "crossCountryRail"
    | "rackAndPinionRailway"
    | "internationalCarFerry"
    | "nationalCarFerry"
    | "regionalCarFerry"
    | "localCarFerry"
    | "internationalPassengerFerry"
    | "nationalPassengerFerry"
    | "regionalPassengerFerry"
    | "localPassengerFerry"
    | "postBoat"
    | "trainFerry"
    | "roadFerryLink"
    | "airportBoatLink"
    | "highSpeedVehicleService"
    | "highSpeedPassengerService"
    | "sightseeingService"
    | "schoolBoat"
    | "cableFerry"
    | "riverBus"
    | "scheduledFerry"
    | "shuttleFerryService"
    | "communalTaxi"
    | "charterTaxi"
    | "waterTaxi"
    | "railTaxi"
    | "bikeTaxi"
    | "blackCab"
    | "miniCab"
    | "allTaxiServices"
    | "hireCar"
    | "hireVan"
    | "hireMotorbike"
    | "hireCycle"
    | "allHireVehicle";

  /** The stop places along the journey. Must be in order from start to end. Intermediate stop places may be omitted */
  placesInJourney?: PlaceInJourneySpec[];

  /**
   * The line of the journey
   * @example NSB:Line:1
   */
  line?: string;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 */
export interface TripPattern {
  /** ID of the trip pattern */
  id?: string;

  /** Legs constituting a suggested sequence of rides and links for this trip */
  legs?: Leg[];
  isPotentialRoundtrip?: boolean;
  expired?: boolean;
}

/**
 * @example CHEAPEST
 */
export enum TypeOfRecommendationEnumV2 {
  FLEXIBLE = "FLEXIBLE",
  SEMI_FLEXIBLE = "SEMI_FLEXIBLE",
  NON_FLEXIBLE = "NON_FLEXIBLE",
  CHEAPEST = "CHEAPEST",
  SPECIFIED_PRODUCT = "SPECIFIED_PRODUCT",
}

/**
 * Part of a trip pattern. Either a ride on a public transport vehicle or access or path link to/from/between places
 */
export interface Leg {
  /**
   * The aimed date and time this leg starts.
   * @format date-time
   */
  aimedStartTime: string;

  /**
   * The aimed date and time this leg ends.
   * @format date-time
   */
  aimedEndTime: string;

  /**
   * The expected date and time this leg starts.
   * @format date-time
   */
  expectedStartTime?: string;

  /**
   * The expected date and time this leg ends.
   * @format date-time
   */
  expectedEndTime?: string;

  /** The mode of transport or access (e.g., foot) used when traversing this leg. */
  mode:
    | "air"
    | "bicycle"
    | "bus"
    | "cableway"
    | "car"
    | "water"
    | "funicular"
    | "lift"
    | "rail"
    | "metro"
    | "tram"
    | "coach"
    | "transit"
    | "foot"
    | "car_park"
    | "car_pickup"
    | "car_dropoff";

  /** The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride */
  transportSubmode?:
    | "unknown"
    | "undefined"
    | "internationalFlight"
    | "domesticFlight"
    | "intercontinentalFlight"
    | "domesticScheduledFlight"
    | "shuttleFlight"
    | "intercontinentalCharterFlight"
    | "internationalCharterFlight"
    | "roundTripCharterFlight"
    | "sightseeingFlight"
    | "helicopterService"
    | "domesticCharterFlight"
    | "SchengenAreaFlight"
    | "airshipService"
    | "shortHaulInternationalFlight"
    | "canalBarge"
    | "localBus"
    | "regionalBus"
    | "expressBus"
    | "nightBus"
    | "postBus"
    | "specialNeedsBus"
    | "mobilityBus"
    | "mobilityBusForRegisteredDisabled"
    | "sightseeingBus"
    | "shuttleBus"
    | "highFrequencyBus"
    | "dedicatedLaneBus"
    | "schoolBus"
    | "schoolAndPublicServiceBus"
    | "railReplacementBus"
    | "demandAndResponseBus"
    | "airportLinkBus"
    | "internationalCoach"
    | "nationalCoach"
    | "shuttleCoach"
    | "regionalCoach"
    | "specialCoach"
    | "schoolCoach"
    | "sightseeingCoach"
    | "touristCoach"
    | "commuterCoach"
    | "funicular"
    | "streetCableCar"
    | "allFunicularServices"
    | "undefinedFunicular"
    | "metro"
    | "tube"
    | "urbanRailway"
    | "cityTram"
    | "localTram"
    | "regionalTram"
    | "sightseeingTram"
    | "shuttleTram"
    | "trainTram"
    | "telecabin"
    | "cableCar"
    | "lift"
    | "chairLift"
    | "dragLift"
    | "telecabinLink"
    | "local"
    | "highSpeedRail"
    | "suburbanRailway"
    | "regionalRail"
    | "interregionalRail"
    | "longDistance"
    | "international"
    | "sleeperRailService"
    | "nightRail"
    | "carTransportRailService"
    | "touristRailway"
    | "airportLinkRail"
    | "railShuttle"
    | "replacementRailService"
    | "specialTrain"
    | "crossCountryRail"
    | "rackAndPinionRailway"
    | "internationalCarFerry"
    | "nationalCarFerry"
    | "regionalCarFerry"
    | "localCarFerry"
    | "internationalPassengerFerry"
    | "nationalPassengerFerry"
    | "regionalPassengerFerry"
    | "localPassengerFerry"
    | "postBoat"
    | "trainFerry"
    | "roadFerryLink"
    | "airportBoatLink"
    | "highSpeedVehicleService"
    | "highSpeedPassengerService"
    | "sightseeingService"
    | "schoolBoat"
    | "cableFerry"
    | "riverBus"
    | "scheduledFerry"
    | "shuttleFerryService"
    | "communalTaxi"
    | "charterTaxi"
    | "waterTaxi"
    | "railTaxi"
    | "bikeTaxi"
    | "blackCab"
    | "miniCab"
    | "allTaxiServices"
    | "hireCar"
    | "hireVan"
    | "hireMotorbike"
    | "hireCycle"
    | "allHireVehicle";

  /** Organisation providing public transport services. */
  operator?: Operator;

  /** Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed. */
  authority?: Authority;

  /** Whether this leg is a ride leg or not. */
  ride: boolean;

  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  fromPlace: Place;

  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  toPlace: Place;

  /** A group of routes which is generally known to the public by a similar name or number implements */
  line?: Line;

  /** A planned vehicle journey with passengers. */
  serviceJourney?: ServiceJourney;

  /** A planned vehicle journey with passengers. */
  datedServiceJourney?: DatedServiceJourney;

  /** EstimatedCall for the quay. */
  fromEstimatedCall?: EstimatedCall;

  /** EstimatedCall for the quay. */
  toEstimatedCall?: EstimatedCall;

  /** For ride legs, intermediate quays between the Place where the leg originates and the Place where the leg ends. For non-ride legs, null. */
  intermediateQuays: Quay[];

  /** A list of coordinates encoded as a polyline string (see http://code.google.com/apis/maps/documentation/polylinealgorithm.html) */
  pointsOnLink?: PointsOnLink;

  /** Used to specify that the vehicle used on this leg is the same that will be used on the next leg */
  interchangeTo?: InterchangeTo;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeFromQuay?: Quay;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeToQuay?: Quay;
  hasToFromQuays?: boolean;
}

/**
 * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
 * @example TOTAL_PRICE
 */
export enum PriceComparisonAlgorithmV2 {
  TOTAL_PRICE = "TOTAL_PRICE",
  BEFORE_SDR = "BEFORE_SDR",
}

/**
 * Quota for the priceable object
 */
export interface Quota {
  /**
   * The corresponding service journey id for this stock
   * @example NSB:ServiceJourney:X
   */
  serviceJourneyId: string;

  /**
   * The amount of stock for this priceable object.
   * @format int32
   * @example 10
   */
  stock: number;
}

/**
 * A list of coordinates encoded as a polyline string (see http://code.google.com/apis/maps/documentation/polylinealgorithm.html)
 */
export interface PointsOnLink {
  /** The encoded points of the polyline. */
  points: string;
}

/**
 * The graphql query with the travel information
 */
export interface QueryQLRequest {
  /** The graphql query string. */
  query: string;
}

/**
 * Describes which offer to buy and how many of this offer to buy to satisfy a recommendation.
 */
export interface OfferToBuy {
  /**
   * Id of the offer to buy.
   * @format uuid
   */
  id: string;

  /**
   * Number of this offer to buy.
   * @format int32
   */
  numberToBuy: number;

  /** NetexId of the supplement products which upgrades a product. */
  withUpgradeProduct?: string;

  /** NetexId of the supplement products which upgrades a product. */
  withUpgradeProducts: string[];

  /** One possible grouping of travellers for the number of offers to buy */
  possibleTravellerIds: string[][];
}

/**
 * A specification of a traveler.
 */
export interface Traveler {
  /** Identifier of the traveler. Only unique within an http-transaction with Products. */
  id?: string;

  /** A specified UserProfile that restricts which UserProfile Products should select. */
  userProfileRefs?: string[];

  /**
   * A user type
   * @example ADULT
   */
  userType?:
    | "ANYONE"
    | "ADULT"
    | "CHILD"
    | "INFANT"
    | "ANIMAL"
    | "SENIOR"
    | "GUIDE_DOG"
    | "YOUTH"
    | "STUDENT"
    | "MILITARY";

  /** A list of references to products that the traveler already owns */
  products?: PreownedProductSpec[];

  /** The id of the traveller group that the traveller belongs to if any. */
  parentGroupId?: string;

  /**
   * A filter for what kind of luggage the traveller wants offers for. The type is enum as string with the following possible values: HANDBAG, HAND_LUGGAGE, SMALL_SUITCASE, SUITCASE, TRUNK, OVERSIZE_ITEM, BICYCLE, SPORTING_EQUIPMENT, SKIS, MUSICAL_INSTRUMENT, PUSH_CHAIR, MOTORIZED_WHEELCHAIR,LARGE_MOTORIZED_WHEELCHAIR, WHEELCHAIR, SMALL_ANIMAL, ANIMAL, GAME, MOTORCYCLE, OTHER
   * @example ANIMAL
   */
  luggageTypes?: (
    | "HANDBAG"
    | "HAND_LUGGAGE"
    | "SMALL_SUITCASE"
    | "SUITCASE"
    | "TRUNK"
    | "OVERSIZE_ITEM"
    | "BICYCLE"
    | "SPORTING_EQUIPMENT"
    | "SKIS"
    | "MUSICAL_INSTRUMENT"
    | "PUSH_CHAIR"
    | "MOTORIZED_WHEELCHAIR"
    | "LARGE_MOTORIZED_WHEELCHAIR"
    | "WHEELCHAIR"
    | "SMALL_ANIMAL"
    | "ANIMAL"
    | "GAME"
    | "MOTORCYCLE"
    | "OTHER"
  )[];
}

/**
 * A recommendation for a fare class with facility sets.
 */
export interface MultidimensionalFareClassWithFacilitySetRecommendation {
  /** Which fare classes these recommendations are for. */
  fareClass:
    | "FIRST_CLASS"
    | "SECOND_CLASS"
    | "THIRD_CLASS"
    | "ECONOMY_CLASS"
    | "BUSINESS_CLASS"
    | "TURISTA"
    | "PREFERENTE"
    | "STANDARD_CLASS"
    | "PREMIUM_CLASS"
    | "ANY"
    | "UNKNOWN";

  /** Recommendations arranged by facility sets */
  perFacilitySet: MultidimensionalFacilitySetRecommendation[];
}

export type ListString = string[];

export interface SearchStopPlacesResponse {
  offers: Offer[];
  recommendations?: RecommendationV2[];
}
