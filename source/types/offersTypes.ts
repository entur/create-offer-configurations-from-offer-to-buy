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
 * @example null
 */
export interface ProductSearchResponse {
  /**
   * Trip pattern offers.
   * @example null
   */
  tripPatternOffers: TripPatternOffers[];
}

/** @example null */
export type SeqFacilitySetEnumV2 = FacilitySetEnumV2[];

/**
 * The seating capacity of a product.
 * @example null
 */
export interface SeatingCapacity {
  /**
   * Netex ID of the product this capacity is valid for.
   * @example "NSB:PreassignedFareProduct:Ordinary"
   */
  fareProductId: string;
  /**
   * Dated service journey ID this capacity is valid for.
   * @example "ENT:DatedServiceJourney:123"
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
   * @example "CLOSED"
   */
  status: "OPEN" | "CLOSED" | "UNKNOWN";
}

/**
 * Recommendation by multiple dimensions; by service journey combinations and types of recommendation with an inner layer of fare classes and facilitySetEnum.
 * @example null
 */
export interface MultidimensionalRecommendation {
  /**
   * Which service journeys this dimensional recommendation covers.
   * @example null
   */
  serviceJourneysCovered: string[];
  /**
   * Recommendations by type of recommendation, per fare class and per facility set.
   * @example null
   */
  perTypeOfRecommendation: MultidimensionalTypeOfRecommendationRecommendation[];
}

/**
 * TravellerGroup can be used to divide the total group of travellers into smaller groups with similar characteristics. This can be useful in order to get more detailed information about which products are valid for which traveller. The sum of numberOfPeople across every TravellerGroup should equal the total number of travellers
 * @example null
 */
export interface TravellerGroup {
  /**
   * An unique id of the TravellerGroup. If not provided it will be set to a pseudo random string containing 6 characters.
   * @example null
   */
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
 * @example null
 */
export interface PricedGroup {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The type of this usage parameter.
   * @example null
   */
  typeOfUsageParameter?: string;
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * Reference to a group
   * @example null
   */
  userProfiles: UserProfileInGroup[];
  /**
   * Basis on which pricing is done - per whole group
   * or per member.
   * @example null
   */
  pricingBasis?: "PER_OFFER" | "PER_PERSON";
  /**
   * Minimum number of persons in the priced group
   * @format int32
   * @example null
   */
  minNumberOfPersons?: number;
  /**
   * Maximum number of persons in the priced group
   * @format int32
   * @example null
   */
  maxNumberOfPersons?: number;
}

/**
 * FareClassEnum
 * @example "STANDARD_CLASS"
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
 * @example null
 */
export interface LayeredRecommendationForOffers {
  /** Information about which types and fare classes recommendations are wanted for. */
  layeredRecommendationConfig: LayeredRecommendationConfigForOffers;
  /**
   * The travellers wanted to be covered for this trip.
   * @example null
   */
  travellers: Traveler[];
  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * Configuration of which recommendations the client wants.
 * @example null
 */
export interface MultidimensionalRecommendationConfig {
  /** Specification of which dimensions apply for this recommendation. */
  dimensionSpec: DimensionSpec;
  /** Specification of which rules apply for this recommendation. */
  ruleSpec: RuleSpec;
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface SearchZonesRequest {
  /**
   * The id of the origin zone.
   * @example null
   */
  from: string;
  /**
   * Optional sequence of via zones.
   * @example null
   */
  via?: string[];
  /**
   * The id of the destination zone.
   * @example null
   */
  to: string;
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
   */
  travelDate: string;
  /**
   * The travellers.
   * @example null
   */
  travellers: Traveler[];
  /**
   * Exclude offers that cover only a single trip.
   * @example null
   */
  excludeSingleTripOffers?: boolean;
  /**
   * Exclude offers that cover multiple trips.
   * @example null
   */
  excludeMultiTripOffers?: boolean;
  /** Configuration of which recommendations the client wants. */
  recommendationConfig?: RecommendationConfigV2;
}

/**
 * ZonalValidity
 * Describes zones where a product is valid
 * @example null
 */
export interface ZonalValidityV2 {
  /** @example null */
  zones?: string[];
}

/**
 * Used to specify that the vehicle used on this leg is the same that will be used on the next leg
 * @example null
 */
export interface InterchangeTo {
  /** @example null */
  staySeated?: boolean;
  /** A planned vehicle journey with passengers. */
  fromServiceJourney?: ServiceJourney;
  /** A planned vehicle journey with passengers. */
  toServiceJourney?: ServiceJourney;
}

/**
 * Reference to a group
 * @example null
 */
export interface UserProfileInGroup {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /** @example null */
  typeOfConcession?: string;
  /**
   * The number of people in the group.
   * @format int32
   * @example null
   */
  numberOfPeople: number;
}

/**
 * The type of accommodation
 * @example null
 */
export type AccommodationFacilityEnum = object;

/**
 * A set of recommendation for a type of recommendation and fare classes.
 * @example null
 */
export interface RecommendationByTypeAndPerFareClass {
  /**
   * Type of recommendation this layered recommendation is for. Enum as string with the following values:FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT
   * @example null
   */
  typeOfRecommendation: "FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT";
  /**
   * Recommendations arranged by fare classes
   * @example null
   */
  perFareClass: RecommendationByFareClass[];
}

/** @example null */
export interface OffersError {
  /** @example null */
  message: string;
  /** @example null */
  description: string;
}

/**
 * The fare class
 * @example null
 */
export type FareClassEnum = object;

/**
 * Reference to a Fare Structure Element and its configuration.
 * @example null
 */
export interface FareStructureElementConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:FareStructureElement:TENInterval"
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /** Container object for other properties. */
  properties?: Properties;
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /** The Geographical Interval with distance and zone data. */
  interval?: GeoIntervalData;
  /** A simple reference object containing enough information to lookup the object itself if needed. */
  qualityFactor?: DataManagedObjectData;
  /** A simple reference object containing enough information to lookup the object itself if needed. */
  distanceMatrixElement?: DataManagedObjectData;
  /**
   * Quotas for the configuration
   * @example null
   */
  quotas?: Quota[];
}

/**
 * The response for a recommendation.
 * @example null
 */
export interface Recommendation {
  /**
   * Service Journeys which are covered by the offers to buy.
   * @example null
   */
  serviceJourneysCoveredByOffers: string[];
  /**
   * Which commercial condition the offer fulfills.
   * @example null
   */
  typeOfRecommendation: "FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT";
  /**
   * Recommendations filtered by type of flex
   * @example null
   */
  offersToBuy: OfferToBuy[];
  /**
   * NetexId of the specified product.
   * @example null
   */
  specifiedProduct?: string;
}

/** @example null */
export type SeqFareClassEnumV2 = FareClassEnumV2[];

/**
 * A group of routes which is generally known to the public by a similar name or number implements
 * @example null
 */
export interface Line {
  /**
   * ID of the Line
   * @example "GJB:Line:R30"
   */
  id: string;
}

/**
 * References to different distribution parameters.
 * @example null
 */
export interface DistributionParameters {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * The version of the object
   * @example null
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * Reference to a FullfillmentMethod with price information.
   * @example null
   */
  fulfillmentMethod?: string;
  /**
   * Reference to a DistributionChannel with price information.
   * @example null
   */
  distributionChannel?: string;
}

/**
 * EstimatedCall for the quay.
 * @example null
 */
export interface EstimatedCall {
  /**
   * The date the estimated call is valid for.
   * @example null
   */
  date: string;
  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * Reference to different UsageParameters.
 * @example null
 */
export interface DiscountUsageParameters {
  /**
   * Reference to reserving parameters with price information.
   * @example null
   */
  reserving?: PricedUsageParameter[];
  /**
   * Reference to entitlement given parameters with price information.
   * @example null
   */
  entitlementGiven?: PricedUsageParameter[];
}

/**
 * A planned vehicle journey with passengers.
 * @example null
 */
export interface ServiceJourney {
  /**
   * The id of the service journey.
   * @example "ENT:ServiceJourney:1-1605-1919"
   */
  id: string;
  /**
   * The private code is actually the vehicle(train) number for this journey.
   * @example "1919"
   */
  privateCode?: string;
}

/**
 * A specification of an existing ticket.
 * @example null
 */
export interface ExistingTicket {
  /**
   * The netex-id of the entity.
   * @example "RUT:PreassignedFareProduct:SupplementaryTicket"
   */
  id: string;
  /**
   * The zones the existing ticket is valid for
   * @example null
   */
  zones?: string[];
  /**
   * ServiceJourneys, not implemented
   * @example null
   */
  serviceJourneys?: string[];
}

/**
 * Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed.
 * @example null
 */
export interface Authority {
  /**
   * NeTEx-id of Authority.
   * @example "ENT:Authority:ENT"
   */
  id: string;
  /**
   * Name of Authority.
   * @example "ENT"
   */
  name?: string;
}

/**
 * Information about which types and fare classes recommendations are wanted for.
 * @example null
 */
export interface LayeredRecommendationsConfigForOffers {
  /**
   * Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation
   * @example null
   */
  typesOfRecommendation: ("FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT")[];
  /**
   * If this is set to true, you will receive recommendations on offers covering the same service journeys for each of the travellers.
   * @example null
   */
  sameTicketChange: boolean;
  /**
   * Which types of fare classes recommendations are wanted for.
   * @example null
   */
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
  /**
   * If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left.
   * @example null
   */
  includeUnavailableOffers?: boolean;
  /**
   * There are three supported algorithms for organizing how we present each combination of service journeys. Given three service journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique service journey combinations covered by offers.
   * @example null
   */
  serviceJourneyOrganizeAlgorithm:
    | "SUBSEQUENT_COMBINATIONS"
    | "COMBINATIONS_FROM_OFFERS"
    | "FOR_EACH_AND_GROUPED_COMBINATIONS";
  /**
   * If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper.
   * @example null
   */
  mixinOffersWithHigherFlexibility?: boolean;
  /**
   * If set to true you can get recommendations for offers with supplement products.
   * @example null
   */
  includeUpgrades?: boolean;
  /**
   * If set to true you can get recommendations for offers with multiple supplement products.
   * @example null
   */
  includeMultipleUpgrades?: boolean;
  /**
   * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
   * @example null
   */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * The query uses JourneySpecs, TravellerGroups and ProductSpecs to filter away irrelevant products. JourneySpec is used to limit the returned products to only those valid for specific journeys. For a trip that contains multiple legs each one should be described by a separate JourneySpec. TravellerGroups is used to limit the returned product to only those valid for a specific group of people traveling. The group can be put into a single TravellerGroup, or divided into several according to some characteristics of the travellers described by a JourneySpec. ProductSpec is used to limit the returned product to only those matching the spec. Specs of different types (JourneySpec, TravellerSpec, ProductSpec) acts as a series of filters, only allowing products that are valid for every type of spec. However specs of the same type allows products that are valid for either spec.
 * @example null
 */
export interface ProductQuery {
  /**
   * An list of JourneySpecs.
   * @example null
   */
  journeys?: JourneySpec[];
  /**
   * A list of TravellerGroups.
   * @example null
   */
  travellers?: TravellerGroup[];
  /**
   * A list of ProductSpecs
   * @example null
   */
  products?: ProductSpec[];
}

/**
 * A recommendation of offers to buy for a facility set.
 * @example null
 */
export interface MultidimensionalFacilitySetRecommendation {
  /**
   * Which facility sets these recommendations are for. Enum as string with the following values:SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET
   * @example null
   */
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
  /**
   * Which offers to buy to get the cheapest option for this facility set.
   * @example null
   */
  offersToBuy: OfferToBuy[];
}

/** @example null */
export type SeqTypeOfRecommendationEnumV2 = TypeOfRecommendationEnumV2[];

/**
 * Reference to a Sales Package and its configuration.
 * @example null
 */
export interface SalesPackageConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:SalesPackage:Ordinary"
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /** Container object for other properties. */
  properties?: Properties;
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * Reference to the travelscope this configuration is for.
   * @example null
   */
  travelScopeIds?: string[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /**
   * References to different distribution parameters.
   * @example null
   */
  distributions: DistributionParameters[];
  /**
   * Reference to a Fare Product and its configuration.
   * @example null
   */
  fareProducts: FareProductConfiguration[];
  /**
   * A reference and version to the available fulfillment methods
   * @example null
   */
  availableFulfillmentMethods?: AvailableFulfillmentMethod[];
}

/**
 * RuleSpec
 * Determines what rules to apply when categorizing and recommending offers for travellers
 * @example null
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
  /**
   * @default false
   * @example null
   */
  onlyIncludeRecommendedOffers?: boolean;
  /**
   * @default true
   * @example null
   */
  onlyIncludeRecommendationsWithOffersToBuy?: boolean;
  /**
   * @default false
   * @example null
   */
  mixinOffersWithHigherFlexibility?: boolean;
}

/**
 * An itinerary with offers.
 * @example null
 */
export interface TripPatternResponse {
  /** List of legs constituting a suggested sequence of rides and links for a specific trip. */
  tripPattern: TripPattern;
  /**
   * Offers for the trip.
   * @example null
   */
  offers: Offer[];
  /**
   * Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip.
   * @example null
   */
  recommendations: Recommendation[];
  /**
   * Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip, with filters on types of recommendation and fare class.
   * @example null
   */
  layeredRecommendations?: LayeredRecommendation[];
  /**
   * Recommendations for which offers to buy to cover the travellers for the whole trip or parts of the trip, with filters on types of recommendation, fare class and facility set.
   * @example null
   */
  multidimensionalRecommendations?: MultidimensionalRecommendation[];
  /**
   * Seating capacity for the trip.
   * @example null
   */
  seatingCapacity?: SeatingCapacity[];
}

/**
 * Information about which types and fare classes recommendations are wanted for.
 * @example null
 */
export interface LayeredRecommendationConfigForOffers {
  /**
   * Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation
   * @example null
   */
  typesOfRecommendation: ("FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT")[];
  /**
   * Which types of fare classes recommendations are wanted for.
   * @example null
   */
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
  /**
   * If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left.
   * @example null
   */
  includeUnavailableOffers?: boolean;
  /**
   * If set to true; all possible combinations of subsequent service journey combinations will be available in the response. If set to false or not at set; only individual service journeys and largest group of service journeys will be a combination each. Ex. a trip pattern containing three legs with service journeys SJ-1, SJ-2, SJ-3 will give the combinations: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3) if set to false or not set. If set to true it will give the combinations: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3).
   * @example null
   */
  includeAllCombinationsOfSubsequentServiceJourneys?: boolean;
  /**
   * If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper.
   * @example null
   */
  mixinOffersWithHigherFlexibility?: boolean;
  /**
   * Should be 'true' if all travelers should change tickets on the same station on trips with multiple legs.
   * @example null
   */
  sameTicketChange?: boolean;
  /**
   * If set to true you can get recommendations for offers with supplement products.
   * @example null
   */
  includeUpgrades?: boolean;
  /**
   * If set to true you can get recommendations for offers with multiple supplement products.
   * @example null
   */
  includeMultipleUpgrades?: boolean;
  /**
   * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
   * @example null
   */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * Configuration of which recommendations the client wants.
 * @example null
 */
export interface RecommendationConfigV2 {
  /** Determines what fields should be used to categorize the offers */
  categorySpec: CategorySpecV2;
  /** Determines what rules to apply when categorizing and recommending offers for travellers */
  ruleSpec?: RuleSpecV2;
}

/**
 * Organisation that owns the given product.
 * @example null
 */
export interface OrganisationConfig {
  /**
   * The netexId for the organisation.
   * @example null
   */
  id: string;
  /**
   * The privateCode for the organisation, used to integrate with the organisation register.
   * @format int64
   * @example null
   */
  privateCode?: number;
}

/**
 * The response for a recommendation.
 * @example null
 */
export interface RecommendationV2 {
  /**
   * Describes the geographical validity covered by the recommendation.
   * @example null
   */
  geographicalValidityCovered?: GeographicalValidityCoveredV2[];
  typeOfRecommendation: TypeOfRecommendationEnumV2;
  durationType?: DurationEnum;
  /** The fare class */
  fareClass?: FareClassEnum;
  /** The type of accommodation */
  facilitySet?: AccommodationFacilityEnum;
  /**
   * Recommendations filtered by type of flex
   * @example null
   */
  offersToBuy?: OfferToBuy[];
  /**
   * NetexId of the specified product.
   * @example null
   */
  specifiedProduct?: string;
}

/**
 * Lines where the product is valid
 * @example null
 */
export interface LineValidity {
  /**
   * Valid on lines
   * @example null
   */
  validOn?: string[];
  /**
   * Not valid on lines
   * @example null
   */
  notValidOn?: string[];
}

/**
 * Raw data from OTP
 * @example null
 */
export interface OTPDataJson {
  /**
   * Raw trip from OTP
   * @example null
   */
  trip?: string;
}

/**
 * A place such as platform, stance, or quayside where passengers have access to PT vehicles.
 * @example null
 */
export interface Quay {
  /** @example null */
  id?: string;
  /**
   * Name
   * @example null
   */
  name?: string;
  /** A stop place */
  stopPlace?: StopPlace;
}

/** @example null */
export type SeqRecommendationV2 = RecommendationV2[];

/**
 * A map with set of parameter IDs for the choices
 * @uniqueItems true
 * @example null
 */
export type SetString = string[];

/**
 * Description of a travel between two places.
 * @example null
 */
export interface Trip {
  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  from?: Place;
  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  to?: Place;
  /**
   * A list of possible trip patterns.
   * @example null
   */
  tripPatterns: TripPattern[];
}

/** @example null */
export interface AvailableFulfillmentMethod {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:FulfillmentMethod:1"
   */
  id: string;
  /**
   * The version of the object
   * @example null
   */
  version: string;
}

/**
 * A map with set of parameter IDs for the choices
 * @example null
 */
export type MapStringSetString = Record<string, string[]>;

/**
 * A recommendation of offers to buy for a fare class.
 * @example null
 */
export interface RecommendationByFareClass {
  /**
   * Which fare classes these recommendations are for.
   * @example null
   */
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
  /**
   * Which offers to buy to get the cheapest option for this fare class.
   * @example null
   */
  offersToBuy: OfferToBuy[];
}

/** @example null */
export type SeqOffer = Offer[];

/**
 * Container for specifying which types of recommendations are wanted and what kind of offers to look for.
 * @example null
 */
export interface RecommendationConfig {
  /**
   * Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation
   * @example null
   */
  wantedRecommendations: ("FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT")[];
  /**
   * Specifies which fare classes to include in recommendations, if it is empty all are included
   * @example null
   */
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
  /**
   * Specifies which authorities to include in recommendations, if it is empty all are included
   * @example null
   */
  includeAuthorities?: string[];
  /**
   * If set to true the offers which are not recommended will be removed from output.
   * @example null
   */
  includeRecommendedOffersOnly?: boolean;
  /**
   * If set to true offers which are unavailable will be included in recommendation
   * @example null
   */
  includeUnavailableOffers?: boolean;
  /**
   * If set to true offers containing multiple preassigned fare products with different flexibility will be included in recommendations.
   * @example null
   */
  includeOffersWithMixedCommercialConditions?: boolean;
  /**
   * Netex IDs of products which has to be included in a recommendation, this will only be used if one of the wantedRecommendations are SPECIFIED_PRODUCT.
   * @example null
   */
  specifiedProducts?: string[];
  /**
   * If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper.
   * @example null
   */
  mixinOffersWithHigherFlexibility?: boolean;
  /**
   * Should be 'true' if all travelers should change tickets on the same station on trips with multiple legs.
   * @example null
   */
  sameTicketChange?: boolean;
  /**
   * If set to true you can get recommendations for offers with supplement products.
   * @example null
   */
  includeUpgrades?: boolean;
  /**
   * If set to true you can get recommendations for offers with multiple supplement products.
   * @example null
   */
  includeMultipleUpgrades?: boolean;
  /**
   * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
   * @example null
   */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/** @example null */
export type SeqDurationEnum = DurationEnum[];

/** @example null */
export interface SearchZonesResponse {
  /** @example null */
  offers: Offer[];
  /** @example null */
  recommendations?: RecommendationV2[];
}

/** @example null */
export type JValue = object;

/**
 * A request used to search for fare products for a specified trip.
 * @example null
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
 * @example null
 */
export interface TravellerSpec {
  /**
   * The type of concession of the traveller.
   * @example "NSB:TypeOfConcession:Student"
   */
  typeOfConcession?: string;
  /**
   * The traveller has no concession
   * @example false
   */
  noConcession?: boolean;
  /**
   * The user type of the traveller.
   * @example "ADULT"
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
   * @example "NSB:SalesDiscountRight:CustomerCard"
   */
  ownedProducts?: string[];
}

/**
 * All OFFERs within the same TAG are covering as many as possible SERVICE JOURNEYs for all TRAVELERs.
 * @example null
 */
export interface Tag {
  /**
   * An identifier for the TAG.
   * @example null
   */
  name: string;
  /**
   * How many of this offer should be bought to cover the TRAVELERs
   * @format int32
   * @example null
   */
  nrToBuy: number;
}

/**
 * A summary of the properties of a fare product or package that can be used to generate passenger information.
 * @example null
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
 * @example null
 */
export interface Place {
  /** @example null */
  name?: string;
  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * A simple reference object containing enough information to lookup the object itself if needed.
 * @example null
 */
export interface DataManagedObjectData {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
}

/** @example null */
export interface TariffZone {
  /** @example null */
  id?: string;
  /** @example null */
  name?: string;
}

/**
 * Specification of which dimensions apply for this recommendation.
 * @example null
 */
export interface DimensionSpec {
  /**
   * There are three supported algorithms for organizing how we present each combination of service journeys. Given three service journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique service journey combinations covered by offers.
   * @example null
   */
  serviceJourneyOrganizeAlgorithm:
    | "SUBSEQUENT_COMBINATIONS"
    | "COMBINATIONS_FROM_OFFERS"
    | "FOR_EACH_AND_GROUPED_COMBINATIONS";
  /**
   * Specification of which types of recommendation is wanted, these types are based off of the commercial conditions in the offer. Cheapest disregards these criteria and specified product lets the user specify a product which has to be in the recommendation
   * @example null
   */
  includeTypesOfRecommendations: ("FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT")[];
  /**
   * Which types of fare classes recommendations are wanted for.
   * @example null
   */
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
  /**
   * Which types of accommodation facility sets recommendations are wanted for.
   * @example null
   */
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
 * PointToPointValidity
 * Start and stop places where the product is valid
 * @example null
 */
export interface PointToPointValidityV2 {
  /**
   * Valid from place
   * @example "NSR:StopPlace:398"
   */
  fromPlace: string;
  /**
   * Valid to place
   * @example "NSR:StopPlace:440"
   */
  toPlace: string;
}

/**
 * A configuration of how to group travellers in offers.
 * @example null
 */
export interface GroupConfig {
  /**
   * Number of compartments to group travellers in.
   * @format int32
   * @example null
   */
  numberOfCompartments: number;
}

/**
 * Start and stop places where the product is valid
 * @example null
 */
export interface PointToPointValidity {
  /**
   * Valid from place
   * @example "NSR:StopPlace:398"
   */
  fromPlace?: string;
  /**
   * Valid to place
   * @example "NSR:StopPlace:440"
   */
  toPlace?: string;
}

/**
 * A set of recommendations for a type of recommendation and fare classes with facility set.
 * @example null
 */
export interface MultidimensionalTypeOfRecommendationRecommendation {
  /**
   * Type of recommendation this advanced recommendation is for. Enum as string with the following values:FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT
   * @example null
   */
  typeOfRecommendation: "FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT";
  /**
   * Recommendations arranged by fare classes with facility sets
   * @example null
   */
  perFareClass: MultidimensionalFareClassWithFacilitySetRecommendation[];
}

/**
 * Container for the json response from OTP.
 * @example null
 */
export interface OTPJsonResponse {
  /** Raw data from OTP */
  data?: OTPDataJson;
  /**
   * Errors if there are any
   * @example null
   */
  errors?: JValue[];
}

/**
 * JourneyOrganizeAlgorithm
 * There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
 * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
 * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
 * COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
 * @default "SUBSEQUENT_COMBINATIONS"
 * @example "FOR_EACH_AND_GROUPED_COMBINATIONS"
 */
export enum JourneyOrganizeAlgorithmV2 {
  SUBSEQUENT_COMBINATIONS = "SUBSEQUENT_COMBINATIONS",
  COMBINATIONS_FROM_OFFERS = "COMBINATIONS_FROM_OFFERS",
  FOR_EACH_AND_GROUPED_COMBINATIONS = "FOR_EACH_AND_GROUPED_COMBINATIONS",
}

/**
 * A specification of which travelers can use an offer, along with limitations on the number of travelers that must be selected from the group for the OFFER to be valid.
 * @example null
 */
export interface TravelerValidityGroup {
  /**
   * The ids of the travelers.
   * @example null
   */
  travelerIds: string[];
  /**
   * The maximum number of travelers that can be selected from the group.
   * @format int32
   * @example null
   */
  maxNumberOfTravelers: number;
  /**
   * The minimum number of travelers that can be selected from the group.
   * @format int32
   * @example null
   */
  minNumberOfTravelers: number;
  /**
   * Reference to the user profile associated with this offer.
   * @example null
   */
  userProfileId: string;
  /**
   * Version to the user profile associated with this offer.
   * @example null
   */
  userProfileVersion: string;
  /**
   * If the request uses traveller groups to specify the travellers this field holds the id of the group that the travellers belongs to.
   * @example null
   */
  travellerGroupId?: string;
  /**
   * If there are a through fare with two operators more user profiles are needed, this list represents these
   * @example null
   */
  userProfileIds?: string[];
}

/**
 * A place in a journey spec that can represent å stop place or a zone.
 * @example null
 */
export interface PlaceInJourneySpec {
  /** A stop place */
  stopPlace?: StopPlace;
  /**
   * A zone id.
   * @example null
   */
  zoneId?: string;
}

/**
 * A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'.
 * @example null
 */
export interface PricedResourceRef {
  /**
   * ID of the resource, e.g. an ID of a 'TripPattern'.
   * @example null
   */
  id: string;
  /**
   * Name of the resource.
   * @example null
   */
  resourceType: string;
}

/**
 * A ProductSpec is used to limit the returned products to only those that matches the characteristics of the ProductSpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find a specific product by id, or every product that a transport authority owns.
 * @example null
 */
export interface ProductSpec {
  /**
   * The id of the product.
   * @example "NSB:PreassignedFareProduct:Ordinary"
   */
  productId?: string;
  /**
   * The owner of the product.
   * @example "NSB:Authority:NSB"
   */
  authority?: string;
}

/**
 * A request used to update travelers for a persisted trip-pattern
 * @example null
 */
export interface UpdateRecordRequest {
  /**
   * Travelers to be updated.
   * @example null
   */
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
 * @example null
 */
export interface DatedServiceJourney {
  /**
   * A unique departure ID.
   * @example "ENT:DatedServiceJourney:151530"
   */
  datedServiceJourneyId: string;
  /**
   * A reference to the original dated service journey ID.
   * @example "ENT:DatedServiceJourney:151530"
   */
  originalDatedServiceJourneyId: string;
}

/**
 * Specification of which rules apply for this recommendation.
 * @example null
 */
export interface RuleSpec {
  /**
   * If this is set to true, you will receive recommendations on offers covering the same service journeys for each of the travellers.
   * @example null
   */
  sameTicketChange: boolean;
  /**
   * If this is set to true, you will receive recommendations on offers even if there is no quota or seating capacity left.
   * @example null
   */
  includeUnavailableOffers: boolean;
  /**
   * If set to true offers from other types of recommendations can be mixed in, in case offers with better flexibility is cheaper.
   * @example null
   */
  mixinOffersWithHigherFlexibility: boolean;
  /**
   * If set to true you can get recommendations for offers with supplement products.
   * @example null
   */
  includeUpgrades?: boolean;
  /**
   * If set to true you can get recommendations for offers with multiple supplement products.
   * @example null
   */
  includeMultipleUpgrades?: boolean;
  /**
   * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
   * @example null
   */
  priceComparisonAlgorithm?: "TOTAL_PRICE" | "BEFORE_SDR";
}

/**
 * Reference to a Validable Element and its configuration.
 * @example null
 */
export interface ValidableElementConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:ValidableElement:Ordinary"
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /** Container object for other properties. */
  properties?: Properties;
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /**
   * Reference to a Fare Structure Element and its configuration.
   * @example null
   */
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
 * @example null
 */
export interface TextInLanguage {
  /**
   * Language code.
   * @example null
   */
  lang?: string;
  /**
   * The text.
   * @example null
   */
  value?: string;
}

/**
 * DurationEnum
 * @example "DAY_PASS"
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
 * @example null
 */
export interface OfferRequest {
  /** The query uses JourneySpecs, TravellerGroups and ProductSpecs to filter away irrelevant products. JourneySpec is used to limit the returned products to only those valid for specific journeys. For a trip that contains multiple legs each one should be described by a separate JourneySpec. TravellerGroups is used to limit the returned product to only those valid for a specific group of people traveling. The group can be put into a single TravellerGroup, or divided into several according to some characteristics of the travellers described by a JourneySpec. ProductSpec is used to limit the returned product to only those matching the spec. Specs of different types (JourneySpec, TravellerSpec, ProductSpec) acts as a series of filters, only allowing products that are valid for every type of spec. However specs of the same type allows products that are valid for either spec. */
  query: ProductQuery;
  /**
   * A map with set of parameter IDs for the choices
   * @example null
   */
  requestedParameters?: Record<string, string[]>;
}

/**
 * A container pairing a TRIP PATTERN with a list of valid OFFERs.
 * @example null
 */
export interface TripPatternOffers {
  /**
   * A reference to the TRIP PATTERN by id.
   * @example null
   */
  tripPatternId: string;
  /**
   * A list of valid OFFERSs for the TRIP PATTERN.
   * @example null
   */
  offers: Offer[];
  /**
   * Seating capacity for the trip.
   * @example null
   */
  seatingCapacity?: SeatingCapacity[];
  /**
   * Recommendations for which offers to buy for each type of recommendation specified by the client.
   * @example null
   */
  recommendations?: Recommendation[];
  /**
   * Recommendations for which offers to buy for each type of recommendation and per fare class, both specified by the client.
   * @example null
   */
  layeredRecommendations?: LayeredRecommendation[];
  /**
   * Recommendations for which offers to buy for each type of recommendation, per fare class and per facility set, both specified by the client.
   * @example null
   */
  multidimensionalRecommendations?: MultidimensionalRecommendation[];
}

/** @example null */
export interface PreownedProductSpec {
  /**
   * The netex-id of the entity.
   * @example "NSB:FareTable:UserProfileDiscounts"
   */
  id: string;
  /**
   * The version of the entity. Assumes the latest version if no version is specified.
   * @example "NSB:Version:V1"
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
 * @example null
 */
export interface Offer {
  /**
   * The ID of the OFFER.
   * @format uuid
   * @example null
   */
  id: string;
  /**
   * The requested distribution channel
   * @example null
   */
  requestedByDistributionChannel?: string;
  /** A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'. */
  pricedResource?: PricedResourceRef;
  /** Reference to a Sales Package and its configuration. */
  salesPackageConfig: SalesPackageConfiguration;
  /**
   * Traveler limitations that applies to the SALES PACKAGE CONFIGURATION.
   * @example null
   */
  travelerMapping: TravelerValidityGroup[];
  /**
   * All OFFERs within the same TAG are covering as many as possible SERVICE JOURNEYs for all TRAVELERs.
   * @example null
   */
  tags: Tag[];
}

/**
 * Price with VAT and currency information
 * @example null
 */
export interface Price {
  /**
   * The amount.
   * @example null
   */
  amount: string;
  /**
   * The VAT group.
   * @example null
   */
  vatGroup?: string;
  /**
   * The currency of the amount.
   * @example "NOK"
   */
  currency: string;
}

/**
 * Reference to different UsageParameters.
 * @example null
 */
export interface UsageParameters {
  /** A reference to a user profile and price data. */
  userProfile?: PricedUserProfile;
  /**
   * Reference to a refund parameter with price information.
   * @example null
   */
  refunds: PricedUsageParameter[];
  /** A reference to a user parameter and price data. */
  usageValidityPeriod?: PricedUsageParameter;
  /**
   * Reference to luggage allowance parameters with price information.
   * @example null
   */
  luggageAllowances: PricedUsageParameter[];
  /**
   * Reference to exchanging parameters with price information.
   * @example null
   */
  exchanging: PricedUsageParameter[];
  /**
   * Reference to reserving parameters with price information.
   * @example null
   */
  reserving: PricedUsageParameter[];
  /**
   * Reference to replacing parameters with price information.
   * @example null
   */
  replacing: PricedUsageParameter[];
  /**
   * Reference to purchase window parameters with price information.
   * @example null
   */
  purchaseWindow: PricedUsageParameter[];
  /**
   * Reference to entitlement given parameters with price information.
   * @example null
   */
  entitlementGiven: PricedUsageParameter[];
  /**
   * Reference to round trip parameters with price information
   * @example null
   */
  roundTrip: PricedUsageParameter[];
  /** A reference to a group with price data. */
  group?: PricedGroup;
  /**
   * Reference to transferability parameters with price information.
   * @example null
   */
  transferability?: PricedUsageParameter[];
}

/**
 * Reference to a Fare Product and its configuration.
 * @example null
 */
export interface FareProductConfiguration {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:PreassignedFareProduct:Ordinary"
   */
  id: string;
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /** Organisation that owns the given product. */
  organisation: OrganisationConfig;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /** Container object for other properties. */
  properties?: Properties;
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * Reference to a Validable Element and its configuration.
   * @example null
   */
  validableElements: ValidableElementConfiguration[];
  /**
   * A classification of this fare product
   * @example null
   */
  typeOfFareProduct?: string;
  /** A summary of the properties of a fare product or package that can be used to generate passenger information. */
  conditionSummary?: ConditionSummary;
  /** A sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRight;
  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveler had an entitlement product.
   * @example null
   */
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
   * @example null
   */
  amount?: number;
  /**
   * Type of priced unit
   * @example null
   */
  productType?: "TRIP_CARNET" | "PASS_CARNET" | "UNIT_COUPONS" | "STORED_VALUE" | "OTHER";
  /**
   * Type of supplement product
   * @example null
   */
  supplementProductType?:
    | "SEAT_RESERVATION"
    | "BICYCLE"
    | "DOG"
    | "ANIMAL"
    | "MEAL"
    | "WIFI"
    | "EXTRA_LUGGAGE"
    | "PENALTY"
    | "UPGRADE"
    | "JOURNEY_EXTENSION"
    | "JOURNEY_ADD_ON"
    | "EVENT_ADD_ON"
    | "PARKING";
}

/**
 * A reference to a user parameter and price data.
 * @example null
 */
export interface PricedUsageParameter {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:UserProfile:Adult"
   */
  id: string;
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The type of this usage parameter.
   * @example null
   */
  typeOfUsageParameter?: string;
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
}

/**
 * The Geographical Interval with distance and zone data.
 * @example null
 */
export interface GeoIntervalData {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:GeographicalInterval:60TEN"
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The distance in KM or TEN for this interval.
   * @format double
   * @example null
   */
  distance?: number;
  /**
   * The number of zones in this interval.
   * @format int32
   * @example null
   */
  zoneCount?: number;
  /**
   * A list of the zones that exist in this interval. Empty if not relevant.
   * @example null
   */
  zones: string[];
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface SearchStopPlaceRequest {
  /**
   * The id of the origin stop place.
   * @example null
   */
  from: string;
  /**
   * The id of the destination stop place.
   * @example null
   */
  to: string;
  /**
   * The authority of the stop place.
   * @example null
   */
  authority?: string;
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
   */
  travelDate: string;
  /**
   * The travellers.
   * @example null
   */
  travellers: Traveler[];
  /**
   * If true then offers for single ticket products will not be included in the response.
   * @example null
   */
  excludeSingleTripOffers?: boolean;
  /**
   * Exclude offers that cover multiple trips.
   * @example null
   */
  excludeMultiTripOffers?: boolean;
  /**
   * If true then only offers that covers whole trip will be returned. False if not set
   * @example null
   */
  offersForWholeTripOnly?: boolean;
  /** Configuration of which recommendations the client wants. */
  recommendationConfig?: RecommendationConfigV2;
}

/**
 * FacilitySetEnum
 * @example "SLEEPER"
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
 * @example null
 */
export interface Operator {
  /**
   * NeTEx-id of Operator.
   * @example null
   */
  id?: string;
  /**
   * Name of Operator.
   * @example null
   */
  name?: string;
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface SearchRequest {
  /** Description of a travel between two places. */
  trip: Trip;
  /**
   * The travelers for the set trip
   * @example null
   */
  travelers: Traveler[];
  /**
   * Conditions that should be included, Enum as string with the following values: FLEXIBLE, SEMI_FLEXIBLE, NON_FLEXIBLE, CHEAPEST, SPECIFIED_PRODUCT
   * @example null
   */
  includeConditions?: ("FLEXIBLE" | "SEMI_FLEXIBLE" | "NON_FLEXIBLE" | "CHEAPEST" | "SPECIFIED_PRODUCT")[];
  /** Container for specifying which types of recommendations are wanted and what kind of offers to look for. */
  recommendationConfig?: RecommendationConfig;
  /** Information about which types and fare classes recommendations are wanted for. */
  layeredRecommendationConfig?: LayeredRecommendationConfigForOffers;
  /** Configuration of which recommendations the client wants. */
  multidimensionalRecommendationConfig?: MultidimensionalRecommendationConfig;
  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
  /**
   * Set this to true if you want additional debug information in the response. Only use it for testing and debugging.
   * @example null
   */
  debug?: boolean;
}

/**
 * A stop place
 * @example null
 */
export interface StopPlace {
  /**
   * ID
   * @example null
   */
  id: string;
  /**
   * Name of stop place.
   * @example null
   */
  name?: string;
  /**
   * Tariff zones
   * @example null
   */
  tariffZones?: TariffZone[];
  /**
   * Longitude
   * @format double
   * @example null
   */
  longitude?: number;
  /**
   * Latitude
   * @format double
   * @example null
   */
  latitude?: number;
}

/**
 * GeographicalValidityCovered
 * Describes the geographical validity covered by the recommendation
 * @example null
 */
export interface GeographicalValidityCoveredV2 {
  /** @example null */
  serviceJourneys?: string[];
  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidityV2;
  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidityV2;
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface SearchZonesExtensionRequest {
  /**
   * The id of the origin zone.
   * @example null
   */
  from: string;
  /**
   * Optional sequence of via zones.
   * @example null
   */
  via?: string[];
  /**
   * The id of the destination zone.
   * @example null
   */
  to: string;
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
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
 * Zones where the product is valid
 * @example null
 */
export interface ZonalValidity {
  /**
   * Valid in zones
   * @example "['RUT:TariffZone:1']"
   */
  zones?: string[];
}

/**
 * Recommendation by multiple dimensions; by service journey combinations and types of recommendation with an inner layer of fare classes.
 * @example null
 */
export interface LayeredRecommendation {
  /**
   * Which service journeys this layered recommendation covers.
   * @example null
   */
  serviceJourneysCovered: string[];
  /**
   * Recommendations by type of recommendation and per fare class.
   * @example null
   */
  recommendations: RecommendationByTypeAndPerFareClass[];
}

/**
 * Valid offers for a query.
 * @example null
 */
export interface OfferResponse {
  /**
   * A list of offers.
   * @example null
   */
  offers: Offer[];
}

/**
 * A sale discount right that has been applied to the fare product.
 * @example null
 */
export interface DiscountRight {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "SJN:SaleDiscountRight:Premium"
   */
  id: string;
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * The version of the object
   * @example "SJN:Version:SDR-Premium-1"
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name?: TextInLanguage[];
  /**
   * The description of the object.
   * @example null
   */
  description?: TextInLanguage[];
  /** Organisation that owns the given product. */
  organisation: OrganisationConfig;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /** Reference to different UsageParameters. */
  parameters?: DiscountUsageParameters;
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveler had an entitlement product.
   * @example null
   */
  originatingFromProductId?: string;
}

/**
 * Container object for other properties.
 * @example null
 */
export interface Properties {
  /**
   * FareClasses. Enum as string with the following values: FIRST_CLASS, SECOND_CLASS, THIRD_CLASS, ECONOMY_CLASS, BUSINESS_CLASS, TURISTA, PREFERENTE, STANDARD_CLASS, PREMIUM_CLASS, ANY, UNKNOWN
   * @example null
   */
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
  /**
   * Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING
   * @example null
   */
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
 * @example null
 */
export type SeqSeqString = string[][];

/** @example null */
export interface FutureHttpResponse {
  /** @example null */
  completed: boolean;
}

/** @example null */
export type SeqString = string[];

/**
 * A reference to a user profile and price data.
 * @example null
 */
export interface PricedUserProfile {
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * The version of the object
   * @example null
   */
  version: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /** @example null */
  typeOfConcession?: string;
}

/**
 * CategorySpec
 * Determines what fields should be used to categorize the offers
 * @example null
 */
export interface CategorySpecV2 {
  /** @example null */
  typesOfRecommendation: TypeOfRecommendationEnumV2[];
  /** @example null */
  durationTypes?: DurationEnum[];
  /** @example null */
  fareClasses?: FareClassEnumV2[];
  /** @example null */
  facilitySet?: FacilitySetEnumV2[];
  /** @example null */
  specifiedProducts?: string[];
}

/**
 * A JourneySpec is used to limit the returned products to only those that are valid for journeys that has certain characteristics. The characteristics are described by the attributes in the JourneySpec. If a field is left empty it will not be regarded when searching for products. This can for example be used to find every product that is valid on a journey operated by NSB, or those valid on a specific journey from Oslo to Gjøvik on 23.july.
 * @example null
 */
export interface JourneySpec {
  /**
   * The start time of the journey.
   * @format date-time
   * @example null
   */
  startTime?: string;
  /**
   * The end time of the journey.
   * @format date-time
   * @example null
   */
  endTime?: string;
  /**
   * The id of the operator on the journey
   * @example "NSB:Operator:NSB"
   */
  operator?: string;
  /**
   * The id of the authority on the journey
   * @example "NSB:Authority:NSB"
   */
  authority?: string;
  /**
   * The vehicle mode of the journey
   * @example "RAIL"
   */
  vehicleMode?: "AIR" | "BUS" | "CABLE_WAY" | "WATER" | "FUNICULAR" | "LIFT" | "RAIL" | "METRO" | "TRAM" | "UNKNOWN";
  /**
   * The transport submode of the journey
   * @example "nightRail"
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
  /**
   * The stop places along the journey. Must be in order from start to end. Intermediate stop places may be omitted
   * @example null
   */
  placesInJourney?: PlaceInJourneySpec[];
  /**
   * The line of the journey
   * @example "NSB:Line:1"
   */
  line?: string;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 * @example null
 */
export interface TripPattern {
  /**
   * ID of the trip pattern
   * @example null
   */
  id?: string;
  /**
   * Legs constituting a suggested sequence of rides and links for this trip
   * @example null
   */
  legs?: Leg[];
  /** @example null */
  isPotentialRoundtrip?: boolean;
  /** @example null */
  expired?: boolean;
}

/**
 * TypeOfRecommendationEnum
 * @example "CHEAPEST"
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
 * @example null
 */
export interface Leg {
  /**
   * The aimed date and time this leg starts.
   * @format date-time
   * @example null
   */
  aimedStartTime: string;
  /**
   * The aimed date and time this leg ends.
   * @format date-time
   * @example null
   */
  aimedEndTime: string;
  /**
   * The expected date and time this leg starts.
   * @format date-time
   * @example null
   */
  expectedStartTime?: string;
  /**
   * The expected date and time this leg ends.
   * @format date-time
   * @example null
   */
  expectedEndTime?: string;
  /**
   * The mode of transport or access (e.g., foot) used when traversing this leg.
   * @example null
   */
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
  /**
   * The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride
   * @example null
   */
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
  /**
   * Whether this leg is a ride leg or not.
   * @example null
   */
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
  /**
   * For ride legs, intermediate quays between the Place where the leg originates and the Place where the leg ends. For non-ride legs, null.
   * @example null
   */
  intermediateQuays: Quay[];
  /** A list of coordinates encoded as a polyline string (see http://code.google.com/apis/maps/documentation/polylinealgorithm.html) */
  pointsOnLink?: PointsOnLink;
  /** Used to specify that the vehicle used on this leg is the same that will be used on the next leg */
  interchangeTo?: InterchangeTo;
  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeFromQuay?: Quay;
  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeToQuay?: Quay;
  /** @example null */
  hasToFromQuays?: boolean;
}

/**
 * PriceComparisonAlgorithm
 * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
 * @default "TOTAL_PRICE"
 * @example "TOTAL_PRICE"
 */
export enum PriceComparisonAlgorithmV2 {
  TOTAL_PRICE = "TOTAL_PRICE",
  BEFORE_SDR = "BEFORE_SDR",
}

/**
 * Quota for the priceable object
 * @example null
 */
export interface Quota {
  /**
   * The corresponding service journey id for this stock
   * @example "NSB:ServiceJourney:X"
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
 * @example null
 */
export interface PointsOnLink {
  /**
   * The encoded points of the polyline.
   * @example null
   */
  points: string;
}

/**
 * The graphql query with the travel information
 * @example null
 */
export interface QueryQLRequest {
  /**
   * The graphql query string.
   * @example null
   */
  query: string;
}

/**
 * Describes which offer to buy and how many of this offer to buy to satisfy a recommendation.
 * @example null
 */
export interface OfferToBuy {
  /**
   * Id of the offer to buy.
   * @format uuid
   * @example null
   */
  id: string;
  /**
   * Number of this offer to buy.
   * @format int32
   * @example null
   */
  numberToBuy: number;
  /**
   * NetexId of the supplement products which upgrades a product.
   * @example null
   */
  withUpgradeProduct?: string;
  /**
   * NetexId of the supplement products which upgrades a product.
   * @example null
   */
  withUpgradeProducts: string[];
  /**
   * One possible grouping of travellers for the number of offers to buy
   * @example null
   */
  possibleTravellerIds: string[][];
}

/**
 * A specification of a traveler.
 * @example null
 */
export interface Traveler {
  /**
   * Identifier of the traveler. Only unique within an http-transaction with Products.
   * @example null
   */
  id?: string;
  /**
   * A user type
   * @example "ADULT"
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
   * A list of references to products that the traveler already owns
   * @example null
   */
  products?: PreownedProductSpec[];
  /**
   * The id of the traveller group that the traveller belongs to if any.
   * @example null
   */
  parentGroupId?: string;
  /**
   * A filter for what kind of luggage the traveller wants offers for. The type is enum as string with the following possible values: HANDBAG, HAND_LUGGAGE, SMALL_SUITCASE, SUITCASE, TRUNK, OVERSIZE_ITEM, BICYCLE, SPORTING_EQUIPMENT, SKIS, MUSICAL_INSTRUMENT, PUSH_CHAIR, MOTORIZED_WHEELCHAIR,LARGE_MOTORIZED_WHEELCHAIR, WHEELCHAIR, SMALL_ANIMAL, ANIMAL, GAME, MOTORCYCLE, OTHER
   * @example "ANIMAL"
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
  /**
   * A specified UserProfile that restricts which UserProfile Products should select.
   * @example null
   */
  userProfileRefs?: string[];
  /**
   * The age of the traveler.
   * @format int32
   * @example 28
   */
  age?: number;
}

/**
 * A recommendation for a fare class with facility sets.
 * @example null
 */
export interface MultidimensionalFareClassWithFacilitySetRecommendation {
  /**
   * Which fare classes these recommendations are for.
   * @example null
   */
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
  /**
   * Recommendations arranged by facility sets
   * @example null
   */
  perFacilitySet: MultidimensionalFacilitySetRecommendation[];
}

/** @example null */
export interface SearchStopPlacesResponse {
  /** @example null */
  offers: Offer[];
  /** @example null */
  recommendations?: RecommendationV2[];
}
