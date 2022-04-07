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
 * Properties of an unavailable product
 */
export interface UnavailableProductProperties {
  /** Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET */
  accommodations?: AccommodationFacilityEnum[];
  fareClasses?: FareClassEnum[];

  /** id and and name of an organisation */
  organisation?: OrganisationSummary;
  isExchangeable?: boolean;
  isRefundable?: boolean;
}

/**
 * A discount might be given based on previous transactions if CappedDiscountRequest was specified.
 */
export interface CappedDiscountOption {
  cappedDiscountRightRef: RefType;
  alternatives?: CappingAlternative[];
  cappedDiscountRuleRef: RefType;
}

/**
 * Summary of a sale discount right that has been applied to the fare product.
 */
export interface DiscountRightSummary {
  /** @example ENT:EntitlementProduct:levelA1 */
  originatingFromProductId?: string;
  price: PriceSummary;

  /** @example Premiumrabatt */
  name: string;

  /** @example Premiumrabatt */
  description: string;

  /** @example SJN:SaleDiscountRight:Premium */
  id: string;

  /** @example SJN:Version:SDR-Premium-1 */
  version: string;
}

/**
 * id and and name of an organisation
 */
export interface OrganisationSummary {
  /**
   * the name of the organisation
   * @example Go-Ahead Nordic
   */
  name: string;

  /**
   * the netex-id of organisation
   * @example GOA:Authority:GOA
   */
  id: string;
}

/**
 * A reference to a group with price data.
 */
export interface PricedGroup {
  /** Reference to a group */
  userProfiles: UserProfileInGroup[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /** Minimum number of persons in the group */
  minNumberOfPersons?: number;

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** Maximum number of persons in the group */
  maxNumberOfPersons?: number;

  /** The name of the object. */
  name: TextInLanguage[];

  /** Used for selecting a unique element in the configurations */
  selectableId: string;

  /**
   * Basis on which pricing is done - per whole group
   * or per member.
   */
  pricingBasis?: PricingBasisEnum;

  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /** The type of this usage parameter. */
  typeOfUsageParameter?: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];
}

/**
 * The mode of transport or access (e.g., foot) used when traversing this leg.
 * @example RAIL
 */
export enum TransportModeEnum {
  AIR = "AIR",
  BICYCLE = "BICYCLE",
  BUS = "BUS",
  CABLEWAY = "CABLEWAY",
  CAR = "CAR",
  WATER = "WATER",
  FUNICULAR = "FUNICULAR",
  LIFT = "LIFT",
  RAIL = "RAIL",
  METRO = "METRO",
  TRAM = "TRAM",
  COACH = "COACH",
  TRANSIT = "TRANSIT",
  FOOT = "FOOT",
  CAR_PARK = "CAR_PARK",
  CAR_PICKUP = "CAR_PICKUP",
  CAR_DROPOFF = "CAR_DROPOFF",
}

/**
 * A request used to search for fare products valid between zones.
 */
export interface SearchZonesRequest {
  recommendationConfig?: RecommendationConfig;

  /** The travellers. */
  travellers: Traveller[];

  /**
   * The expected start time of travel.
   * @format date-time
   */
  travelDate: string;

  /**
   * The id of the origin zone.
   * @example RUT:TariffZone:1
   */
  from: string;

  /** A specification of an existing ticket. */
  existingTicket?: ExistingTicket;

  /**
   * The id of the destination zone.
   * @example RUT:TariffZone:3N
   */
  to: string;

  /** Optional sequence of via zones. */
  via?: string[];
}

/**
 * @example BICYCLE
 */
export enum BaggageTypeEnum {
  HANDBAG = "HANDBAG",
  HAND_LUGGAGE = "HAND_LUGGAGE",
  SMALL_SUITCASE = "SMALL_SUITCASE",
  SUITCASE = "SUITCASE",
  TRUNK = "TRUNK",
  OVERSIZE_ITEM = "OVERSIZE_ITEM",
  BICYCLE = "BICYCLE",
  SPORTING_EQUIPMENT = "SPORTING_EQUIPMENT",
  SKIS = "SKIS",
  MUSICAL_INSTRUMENT = "MUSICAL_INSTRUMENT",
  PUSH_CHAIR = "PUSH_CHAIR",
  MOTORIZED_WHEELCHAIR = "MOTORIZED_WHEELCHAIR",
  LARGE_MOTORIZED_WHEELCHAIR = "LARGE_MOTORIZED_WHEELCHAIR",
  WHEELCHAIR = "WHEELCHAIR",
  SMALL_ANIMAL = "SMALL_ANIMAL",
  ANIMAL = "ANIMAL",
  GAME = "GAME",
  MOTORCYCLE = "MOTORCYCLE",
  OTHER = "OTHER",
}

/**
 * Object ref
 */
export interface ObjectRef {
  /** object ref ref */
  ref: string;

  /** object ref version */
  version?: string;
}

export interface ServiceJourneySummary {
  /** @example NSB:ServiceJourney:56789 */
  serviceJourneyId: string;

  /** @example ENT:DatedServiceJourney:12345 */
  datedServiceJourneyId: string;
}

/**
 * Used to specify that the vehicle used on this leg is the same that will be used on the next leg
 */
export interface InterchangeTo {
  toServiceJourney?: ServiceJourney;
  staySeated?: boolean;
  fromServiceJourney?: ServiceJourney;
}

/**
 * Reference to a group
 */
export interface UserProfileInGroup {
  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The ID of the object on the format < context : type : instance name > */
  id: string;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** @example NSB:TypeOfConcession:Student */
  typeOfConcession?: string;

  /**
   * The number of people in the group.
   * @format int32
   */
  numberOfPeople: number;
}

export enum AccommodationFacilityEnum {
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
}

/**
 * @example CHEAPEST
 */
export enum TypeOfRecommendationEnum {
  FLEXIBLE = "FLEXIBLE",
  SEMI_FLEXIBLE = "SEMI_FLEXIBLE",
  NON_FLEXIBLE = "NON_FLEXIBLE",
  CHEAPEST = "CHEAPEST",
  SPECIFIED_PRODUCT = "SPECIFIED_PRODUCT",
}

/**
 * A request used to search for fare products between stop places
 */
export interface SearchStopPlacesRequest {
  recommendationConfig?: RecommendationConfig;

  /** The travellers. */
  travellers: Traveller[];

  /**
   * The expected start time of travel.
   * @format date-time
   */
  travelDate: string;

  /**
   * The id of the origin stop place.
   * @example NSR:StopPlace:548
   */
  from: string;

  /**
   * The id of the destination stop place.
   * @example NSR:StopPlace:337
   */
  to: string;
  offersForWholeTripOnly?: boolean;
}

/**
 * @example STANDARD_CLASS
 */
export enum FareClassEnum {
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
 * Representation of a optional product that can be selected together with mandatory products in an offer
 */
export interface OptionalProduct {
  /** Summary of a sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRightSummary;
  price: PriceSummary;

  /** @example Sykkel som bagasje */
  name: string;

  /**
   * Antallet valgfrie produkter som er tilgjengelig for å kjøpe
   * @example 4
   */
  available?: number;

  /** @example ZO9Qjn */
  selectableId: string;

  /** @example Sykkel som bagasje */
  description: string;

  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;

  /** @example NSB:SupplementProduct:BicycleReserving */
  id: string;
  supplementProductType?: SupplementProductTypeEnum;

  /** @example NSB:Version:V1 */
  version: string;

  /** Summary of properties for a product */
  properties: PropertiesSummary;
}

/**
 * Reference to a Fare Structure Element and its configuration.
 */
export interface FareStructureElementConfiguration {
  /** A simple reference object containing enough information to lookup the object itself if needed. */
  qualityFactor?: DataManagedObjectData;

  /** Specific parameter assignments */
  specificParameterAssignments?: ParameterSpecification[];

  /** Quotas for the configuration */
  quotas: Quota[];

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** A simple reference object containing enough information to lookup the object itself if needed. */
  distanceMatrixElement?: DataManagedObjectData;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The Geographical Interval with distance and zone data. */
  interval?: GeoIntervalData;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:FareStructureElement:TENInterval
   */
  id: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Leg request describing a part of a journey
 */
export interface LegRequest {
  /**
   * Stop place id for the destination of the leg
   * @example NSR:StopPlace:640
   */
  toStopPlaceId: string;

  /**
   * The expected date and time this leg starts.
   * @format date
   * @example 2020-05-13
   */
  travelDate: string;

  /**
   * Stop place id for he origin of the leg
   * @example NSR:StopPlace:635
   */
  fromStopPlaceId: string;

  /**
   * Service journey id for the leg
   * @example NSB:ServiceJourney:1-232-1016-20201117132
   */
  serviceJourneyId: string;
}

/**
 * An alternative is based on previous transactions might have a discount at the expense of setting the start date in the past.
 */
export interface CappingAlternative {
  /**
   * The start date of this alternative.
   * @format date-time
   */
  startDateTime: string;

  /** A pseudo random string that is used to select what alternative to use when purchasing an offer. */
  selectableId: string;
  discount: PriceSummary;

  /**
   * The end date of this alternative.
   * @format date-time
   */
  endDateTime: string;
}

export interface Recommendation {
  typeOfRecommendation: TypeOfRecommendationEnum;
  facilitySet?: AccommodationFacilityForRecommendationsEnum;
  fareClass?: FareClassEnum;

  /** @example ENT:PreassignedFareProduct:StandardFlexible */
  specifiedProduct?: string;
  offersToBuy: OfferToBuy[];

  /** Describes the geographical validity covered by the recommendation */
  geographicalValidityCovered: GeographicalValidityCovered;
  durationType?: DurationEnum;
}

/**
 * Describes the geographical validity covered by the recommendation
 */
export interface GeographicalValidityCovered {
  serviceJourneys?: string[];

  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;

  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;
}

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

export interface OfferSummary {
  /** A discount might be given based on previous transactions if CappedDiscountRequest was specified. */
  cappedDiscountOption?: CappedDiscountOption;
  preassignedProducts: PreassignedProduct[];
  optionalProductsSelectableIds?: string[];
  price: PriceSummary;

  /** @example Flex Refunderbar */
  name: string;

  /**
   * Antall tilbud tilgjengelig for å kjøpe
   * @example 14
   */
  available?: number;

  /** @example Flex Refunderbar */
  description: string;

  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;

  /** @example 00faf83-56c3-4f4e-8be9-e793c255a77b */
  id: string;
  travellerMapping?: TravellerMappingSummary[];
}

/**
 * References to different distribution parameters.
 */
export interface DistributionParameters {
  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /**
   * Reference to a FullfillmentMethod with price information.
   * @example TRAVEL_CARD
   */
  fulfillmentMethod?: string;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example ENT:DistributionMethod:NOD
   */
  id: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * Reference to a DistributionChannel with price information.
   * @example ENT:DistributionChannel:Online
   */
  distributionChannel?: string;

  /**
   * The version of the object
   * @example ENT:Version:V1
   */
  version: string;
}

/**
 * DynamicDistanceMatrixElement type
 */
export interface DynamicDistanceMatrixElement {
  /** Object ref */
  endStopPointRef?: ObjectRef;

  /** Object ref */
  startTariffZoneRef?: ObjectRef;

  /** Object ref */
  startStopPointRef?: ObjectRef;

  /** Object ref */
  endTariffZoneRef?: ObjectRef;

  /** DynamicDistanceMatrixElement id */
  id: string;

  /** DynamicDistanceMatrixElement version */
  version: string;
}

/**
 * Accommodation for service journey
 */
export interface AccommodationForServiceJourney {
  serviceJourney: ServiceJourneySummary;
  accommodation: AccommodationFacilityEnum[];
}

export interface SpecificParameterAssignment {
  /** Object ref */
  distanceMatrixElementRef?: ObjectRef;

  /** DynamicDistanceMatrixElement type */
  dynamicDistanceMatrixElement?: DynamicDistanceMatrixElement;

  /** Logical operator */
  includesGroupingType?: LogicalOperatorEnum;

  /** Validity parameters */
  validityParameters?: ValidityParameter[];

  /** Object ref */
  typeOfAccessRightAssignmentRef?: ObjectRef;

  /** Logical operator */
  validityParameterGroupingType?: LogicalOperatorEnum;

  /** Logical operator */
  limitationGroupingType?: LogicalOperatorEnum;

  /** Included SpecificParameterAssignments */
  includes?: SpecificParameterAssignment[];

  /** Limitations */
  limitations?: Limitation[];
}

/**
 * EstimatedCall for the quay.
 */
export interface EstimatedCall {
  /**
   * The date the estimated call is valid for.
   * @example 2020-12-24T16:00:00Z
   */
  date: string;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

export enum UsageTriggerEnum {
  ENROLMENT = "ENROLMENT",
  RESERVATION = "RESERVATION",
  PURCHASE = "PURCHASE",
  FULFILMENT = "FULFILMENT",
  ACTIVATION = "ACTIVATION",
  SPECIFIED_START_DATE = "SPECIFIED_START_DATE",
  START_OUTBOUND_RIDE = "START_OUTBOUND_RIDE",
  END_OUTBOUND_RIDE = "END_OUTBOUND_RIDE",
  START_RETURN_RIDE = "START_RETURN_RIDE",
  START_OF_PERIOD = "START_OF_PERIOD",
  DAY_OFFSET_BEFORE_CALENDAR_PERIOD = "DAY_OFFSET_BEFORE_CALENDAR_PERIOD",
}

/**
 * Reference to different UsageParameters.
 */
export interface DiscountUsageParameters {
  /** Reference to entitlement given parameters with price information. */
  entitlementGiven: PricedUsageParameter[];

  /** Reference to reserving parameters with price information. */
  reserving: PricedUsageParameter[];
}

export interface ServiceJourney {
  /** @example ENT:ServiceJourney:1-1605-1919 */
  id: string;

  /** @example 1919 */
  privateCode?: string;
}

/**
 * A specification of an existing ticket.
 */
export interface ExistingTicket {
  /** ServiceJourneys, not implemented */
  serviceJourneys?: string[];

  /**
   * The netex-id of the entity.
   * @example RUT:PreassignedFareProduct:SupplementaryTicket
   */
  id: string;

  /** The zones the existing ticket is valid for */
  zones?: string[];
}

/**
 * Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed.
 */
export interface Authority {
  /**
   * Name of Authority.
   * @example ENT
   */
  name?: string;

  /**
   * NeTEx-id of Authority.
   * @example ENT:Authority:ENT
   */
  id: string;
}

/**
 * ValidityParameter object.
 */
export interface ValidityParameter {
  /** Object ref */
  serviceJourneyRef?: ObjectRef;

  /** Object ref */
  tariffZoneRef?: ObjectRef;

  /** Object ref */
  passengerSeatRef?: ObjectRef;
}

/**
 * The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride
 * @example LOCAL
 */
export enum TransportSubModeEnum {
  UNKNOWN = "UNKNOWN",
  UNDEFINED = "UNDEFINED",
  INTERNATIONAL_FLIGHT = "INTERNATIONAL_FLIGHT",
  DOMESTIC_FLIGHT = "DOMESTIC_FLIGHT",
  INTERCONTINENTAL_FLIGHT = "INTERCONTINENTAL_FLIGHT",
  DOMESTIC_SCHEDULED_FLIGHT = "DOMESTIC_SCHEDULED_FLIGHT",
  SHUTTLE_FLIGHT = "SHUTTLE_FLIGHT",
  INTERCONTINENTAL_CHARTER_FLIGHT = "INTERCONTINENTAL_CHARTER_FLIGHT",
  INTERNATIONAL_CHARTER_FLIGHT = "INTERNATIONAL_CHARTER_FLIGHT",
  ROUND_TRIP_CHARTER_FLIGHT = "ROUND_TRIP_CHARTER_FLIGHT",
  SIGHTSEEING_FLIGHT = "SIGHTSEEING_FLIGHT",
  HELICOPTER_SERVICE = "HELICOPTER_SERVICE",
  DOMESTIC_CHARTER_FLIGHT = "DOMESTIC_CHARTER_FLIGHT",
  SCHENGEN_AREA_FLIGHT = "SCHENGEN_AREA_FLIGHT",
  AIRSHIP_SERVICE = "AIRSHIP_SERVICE",
  SHORT_HAUL_INTERNATIONAL_FLIGHT = "SHORT_HAUL_INTERNATIONAL_FLIGHT",
  CANAL_BARGE = "CANAL_BARGE",
  LOCAL_BUS = "LOCAL_BUS",
  REGIONAL_BUS = "REGIONAL_BUS",
  EXPRESS_BUS = "EXPRESS_BUS",
  NIGHT_BUS = "NIGHT_BUS",
  POST_BUS = "POST_BUS",
  SPECIAL_NEEDS_BUS = "SPECIAL_NEEDS_BUS",
  MOBILITY_BUS = "MOBILITY_BUS",
  MOBILITY_BUS_FOR_REGISTERED_DISABLED = "MOBILITY_BUS_FOR_REGISTERED_DISABLED",
  SIGHTSEEING_BUS = "SIGHTSEEING_BUS",
  SHUTTLE_BUS = "SHUTTLE_BUS",
  HIGH_FREQUENCY_BUS = "HIGH_FREQUENCY_BUS",
  DEDICATED_LANE_BUS = "DEDICATED_LANE_BUS",
  SCHOOL_BUS = "SCHOOL_BUS",
  SCHOOL_AND_PUBLIC_SERVICE_BUS = "SCHOOL_AND_PUBLIC_SERVICE_BUS",
  RAIL_REPLACEMENT_BUS = "RAIL_REPLACEMENT_BUS",
  DEMAND_AND_RESPONSE_BUS = "DEMAND_AND_RESPONSE_BUS",
  AIRPORT_LINK_BUS = "AIRPORT_LINK_BUS",
  INTERNATIONAL_COACH = "INTERNATIONAL_COACH",
  NATIONAL_COACH = "NATIONAL_COACH",
  SHUTTLE_COACH = "SHUTTLE_COACH",
  REGIONAL_COACH = "REGIONAL_COACH",
  SPECIAL_COACH = "SPECIAL_COACH",
  SCHOOL_COACH = "SCHOOL_COACH",
  SIGHTSEEING_COACH = "SIGHTSEEING_COACH",
  TOURIST_COACH = "TOURIST_COACH",
  COMMUTER_COACH = "COMMUTER_COACH",
  FUNICULAR = "FUNICULAR",
  STREET_CABLE_CAR = "STREET_CABLE_CAR",
  ALL_FUNICULAR_SERVICES = "ALL_FUNICULAR_SERVICES",
  UNDEFINED_FUNICULAR = "UNDEFINED_FUNICULAR",
  METRO = "METRO",
  TUBE = "TUBE",
  URBAN_RAILWAY = "URBAN_RAILWAY",
  CITY_TRAM = "CITY_TRAM",
  LOCAL_TRAM = "LOCAL_TRAM",
  REGIONAL_TRAM = "REGIONAL_TRAM",
  SIGHTSEEING_TRAM = "SIGHTSEEING_TRAM",
  SHUTTLE_TRAM = "SHUTTLE_TRAM",
  TRAIN_TRAM = "TRAIN_TRAM",
  TELECABIN = "TELECABIN",
  CABLE_CAR = "CABLE_CAR",
  LIFT = "LIFT",
  CHAIR_LIFT = "CHAIR_LIFT",
  DRAG_LIFT = "DRAG_LIFT",
  TELECABIN_LINK = "TELECABIN_LINK",
  LOCAL = "LOCAL",
  HIGH_SPEED_RAIL = "HIGH_SPEED_RAIL",
  SUBURBAN_RAILWAY = "SUBURBAN_RAILWAY",
  REGIONAL_RAIL = "REGIONAL_RAIL",
  INTERREGIONAL_RAIL = "INTERREGIONAL_RAIL",
  LONG_DISTANCE = "LONG_DISTANCE",
  INTERNATIONAL = "INTERNATIONAL",
  SLEEPER_RAIL_SERVICE = "SLEEPER_RAIL_SERVICE",
  NIGHT_RAIL = "NIGHT_RAIL",
  CAR_TRANSPORT_RAIL_SERVICE = "CAR_TRANSPORT_RAIL_SERVICE",
  TOURIST_RAILWAY = "TOURIST_RAILWAY",
  AIRPORT_LINK_RAIL = "AIRPORT_LINK_RAIL",
  RAIL_SHUTTLE = "RAIL_SHUTTLE",
  REPLACEMENT_RAIL_SERVICE = "REPLACEMENT_RAIL_SERVICE",
  SPECIAL_TRAIN = "SPECIAL_TRAIN",
  CROSS_COUNTRY_RAIL = "CROSS_COUNTRY_RAIL",
  RACK_AND_PINION_RAILWAY = "RACK_AND_PINION_RAILWAY",
  INTERNATIONAL_CAR_FERRY = "INTERNATIONAL_CAR_FERRY",
  NATIONAL_CAR_FERRY = "NATIONAL_CAR_FERRY",
  REGIONAL_CAR_FERRY = "REGIONAL_CAR_FERRY",
  LOCAL_CAR_FERRY = "LOCAL_CAR_FERRY",
  INTERNATIONAL_PASSENGER_FERRY = "INTERNATIONAL_PASSENGER_FERRY",
  NATIONAL_PASSENGER_FERRY = "NATIONAL_PASSENGER_FERRY",
  REGIONAL_PASSENGER_FERRY = "REGIONAL_PASSENGER_FERRY",
  LOCAL_PASSENGER_FERRY = "LOCAL_PASSENGER_FERRY",
  POST_BOAT = "POST_BOAT",
  TRAIN_FERRY = "TRAIN_FERRY",
  ROAD_FERRY_LINK = "ROAD_FERRY_LINK",
  AIRPORT_BOAT_LINK = "AIRPORT_BOAT_LINK",
  HIGH_SPEED_VEHICLE_SERVICE = "HIGH_SPEED_VEHICLE_SERVICE",
  HIGH_SPEED_PASSENGER_SERVICE = "HIGH_SPEED_PASSENGER_SERVICE",
  SIGHTSEEING_SERVICE = "SIGHTSEEING_SERVICE",
  SCHOOL_BOAT = "SCHOOL_BOAT",
  CABLE_FERRY = "CABLE_FERRY",
  RIVER_BUS = "RIVER_BUS",
  SCHEDULED_FERRY = "SCHEDULED_FERRY",
  SHUTTLE_FERRY_SERVICE = "SHUTTLE_FERRY_SERVICE",
  COMMUNAL_TAXI = "COMMUNAL_TAXI",
  CHARTER_TAXI = "CHARTER_TAXI",
  WATER_TAXI = "WATER_TAXI",
  RAIL_TAXI = "RAIL_TAXI",
  BIKE_TAXI = "BIKE_TAXI",
  BLACK_CAB = "BLACK_CAB",
  MINI_CAB = "MINI_CAB",
  ALL_TAXI_SERVICES = "ALL_TAXI_SERVICES",
  HIRE_CAR = "HIRE_CAR",
  HIRE_VAN = "HIRE_VAN",
  HIRE_MOTORBIKE = "HIRE_MOTORBIKE",
  HIRE_CYCLE = "HIRE_CYCLE",
  ALL_HIRE_VEHICLES = "ALL_HIRE_VEHICLES",
}

/**
 * Reference to a Sales Package and its configuration.
 */
export interface SalesPackageConfiguration {
  /** Specific parameter assignments */
  specificParameterAssignments?: ParameterSpecification[];

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys: DatedServiceJourney[];

  /** References to different distribution parameters. */
  distributions: DistributionParameters[];

  /** The name of the object. */
  name: TextInLanguage[];

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:SalesPackage:Ordinary
   */
  id: string;

  /** Reference to a Fare Product and its configuration. */
  fareProducts: FareProductConfiguration[];

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Representation of a product that is unavailable, but would have been included in an offer if available.
 */
export interface UnavailableProduct {
  serviceJourney: ServiceJourneySummary;

  /** @example SJN:PreassignedFareProduct:StandardFullFlex */
  id: string;

  /** Properties of an unavailable product */
  properties?: UnavailableProductProperties;
  status: UnavailableEnum;
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface OrganisationConfig {
  /**
   * The netexId for the organisation.
   * @example ENT:Organisation:ENT
   */
  id: string;

  /**
   * The privateCode for the organisation, used to integrate with the organisation register.
   * @format int64
   * @example 1
   */
  privateCode?: number;
}

/**
 * Lines where the product is valid
 */
export interface LineValidity {
  /** Valid on lines */
  validOn: string[];

  /** Not valid on lines */
  notValidOn: string[];
}

/**
 * A place such as platform, stance, or quayside where passengers have access to PT vehicles.
 */
export interface Quay {
  /** A stop place */
  stopPlace?: StopPlace;

  /**
   * Name
   * @example Nydalen
   */
  name?: string;

  /** @example NSR:Quay:11151 */
  id?: string;
}

/**
 * Describes the geographical validity of a product
 */
export interface GeographicalValidity {
  serviceJourneys?: ServiceJourneySummary[];

  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;

  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;
}

export interface ReservingRequirementForServiceJourney {
  seatMapIsAvailable: boolean;
  reservingRequirement?: ReservingRequirementEnum;
  serviceJourney: ServiceJourneySummary;
}

/**
 * @example BICYCLE
 */
export enum SupplementProductTypeEnum {
  SEAT_RESERVATION = "SEAT_RESERVATION",
  BICYCLE = "BICYCLE",
  DOG = "DOG",
  ANIMAL = "ANIMAL",
  MEAL = "MEAL",
  WIFI = "WIFI",
  EXTRA_LUGGAGE = "EXTRA_LUGGAGE",
  PENALTY = "PENALTY",
  UPGRADE = "UPGRADE",
  JOURNEY_EXTENSION = "JOURNEY_EXTENSION",
  JOURNEY_ADD_ON = "JOURNEY_ADD_ON",
  EVENT_ADD_ON = "EVENT_ADD_ON",
  PARKING = "PARKING",
}

export interface RecommendationConfig {
  /** Determines what rules to apply when categorizing and recommending offers for travellers */
  ruleSpec?: RuleSpec;

  /** Determines what fields should be used to categorize the offers */
  categorySpec?: CategorySpec;
}

export interface GroupSummary {
  /** @example Familiebillett */
  name?: string;
  userProfiles: UserProfileInGroupSummary[];
  description: string;

  /** @example ENT:GroupTicket:Family */
  id: string;

  /** @example ENT:Version:V1 */
  version: string;
}

export interface PriceSummary {
  /** @example 100.00 */
  amount: string;

  /** @example NOK */
  currency: string;
}

/**
 * Contains enough information about a customer to look up transaction history.
 */
export interface CustomerRef {
  /** Reference to the account id within the account based ticketing module. */
  accountBasedTicketingCustomerRef?: string;
}

/**
 * A summary of the properties of a fare product or package that can be used to generate passenger information.
 */
export interface ConditionSummary {
  /**
   * Whether the ticket is exchangeable.
   * @example true
   */
  isExchangeable?: boolean;

  /**
   * Whether the ticket is refundable.
   * @example true
   */
  isRefundable?: boolean;
}

/**
 * Super type for all places (stop places, quays, car parks, bike parks and bike rental stations)
 */
export interface Place {
  /** @example Oslo S */
  name?: string;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * A simple reference object containing enough information to lookup the object itself if needed.
 */
export interface DataManagedObjectData {
  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example ENT:PreassignedFareProduct:Sone1
   */
  id: string;

  /**
   * The version of the object
   * @example ENT:Version:V1
   */
  version: string;
}

export interface TariffZone {
  /** @example Ruter sone 1 */
  name?: string;

  /** @example RUT:TariffZone:1 */
  id: string;
}

export interface ParameterSpecification {
  /** Specification of parameter id */
  specificationOf?: string;
  specificParameterAssignment?: SpecificParameterAssignment;
}

/**
 * Reference to a group
 */
export interface UserProfileInGroupSummary {
  id: string;
  version?: string;
  numberOfPeople: number;
}

/**
 * A request used to search for fare products for a specified trip.
 */
export interface SearchTripPatternRequest {
  recommendationConfig?: RecommendationConfig;

  /** The travellers for the set trip */
  travellers: Traveller[];

  /** List of legs constituting a suggested sequence of rides and links for a specific trip. */
  tripPattern: TripPatternRequest;

  /** A specification of an existing ticket. */
  existingTicket?: ExistingTicket;

  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * Representation of a repeatable ticket, with an optional duration for each instance and an amount of times the ticket can be used
 */
export interface Carnet {
  /**
   * @format duration
   * @example PT1H30M
   */
  duration?: string;

  /** @example 10 */
  amount: number;
}

/**
 * A specification of a traveller.
 */
export interface Traveller {
  /** A list of references to products that the traveller already owns */
  productIds?: string[];

  /** Contains information to look up transaction history for a traveller and what CappedDiscountRight-program he or she is a part of. */
  cappingSpecification?: CappingSpecification;

  /** A filter for what kind of luggage the traveller wants offers for. The type is enum as string with the following possible values: HANDBAG, HAND_LUGGAGE, SMALL_SUITCASE, SUITCASE, TRUNK, OVERSIZE_ITEM, BICYCLE, SPORTING_EQUIPMENT, SKIS, MUSICAL_INSTRUMENT, PUSH_CHAIR, MOTORIZED_WHEELCHAIR,LARGE_MOTORIZED_WHEELCHAIR, WHEELCHAIR, SMALL_ANIMAL, ANIMAL, GAME, MOTORCYCLE, OTHER */
  baggageTypes?: BaggageTypeEnum[];

  /**
   * Identifier of the traveller. Only unique within an http-transaction with Products.
   * @example ID_A
   */
  id?: string;

  /** A user type */
  userType?: UserTypeEnum;
  age?: number;
}

export interface RefType {
  id: string;
  version: string;
}

/**
 * @example RESERVATIONS_COMPULSORY
 */
export enum ReservingRequirementEnum {
  RESERVATIONS_COMPULSORY = "RESERVATIONS_COMPULSORY",
  RESERVATIONS_COMPULSORY_FOR_GROUPS = "RESERVATIONS_COMPULSORY_FOR_GROUPS",
  RESERVATIONS_COMPULSORY_FOR_FIRST_CLASS = "RESERVATIONS_COMPULSORY_FOR_FIRST_CLASS",
  RESERVATIONS_COMPULSORY_FROM_ORIGIN_STATION = "RESERVATIONS_COMPULSORY_FROM_ORIGIN_STATION",
  RESERVATIONS_RECOMMENDED = "RESERVATIONS_RECOMMENDED",
  RESERVATIONS_POSSIBLE = "RESERVATIONS_POSSIBLE",
  RESERVATIONS_POSSIBLE_ONLY_IN_FIRST_CLASS = "RESERVATIONS_POSSIBLE_ONLY_IN_FIRST_CLASS",
  RESERVATIONS_POSSIBLE_ONLY_IN_SECOND_CLASS = "RESERVATIONS_POSSIBLE_ONLY_IN_SECOND_CLASS",
  RESERVATIONS_POSSIBLE_FOR_CERTAIN_CLASSES = "RESERVATIONS_POSSIBLE_FOR_CERTAIN_CLASSES",
  GROUP_BOOKING_RESTRICTED = "GROUP_BOOKING_RESTRICTED",
  NO_GROUPS_ALLOWED = "NO_GROUPS_ALLOWED",
  NO_RESERVATIONS_POSSIBLE = "NO_RESERVATIONS_POSSIBLE",
  WHEELCHAIR_ONLY_RESERVATIONS = "WHEELCHAIR_ONLY_RESERVATIONS",
  BICYCLE_RESERVATIONS_COMPULSORY = "BICYCLE_RESERVATIONS_COMPULSORY",
  RESERVATION_SUPPLEMENT_CHARGED = "RESERVATION_SUPPLEMENT_CHARGED",
}

/**
 * A configuration of how to group travellers in offers.
 */
export interface GroupConfig {
  /** Number of compartments to group travellers in. */
  numberOfCompartments: number;
}

export enum UnavailableEnum {
  SOLD_OUT = "SOLD_OUT",
  CLOSED = "CLOSED",
  UNKNOWN = "UNKNOWN",
}

/**
 * Start and stop places where the product is valid
 */
export interface PointToPointValidity {
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
 * @example SLEEPER
 */
export enum AccommodationFacilityForRecommendationsEnum {
  SLEEPER = "SLEEPER",
  SEATING = "SEATING",
  COUCHETTE = "COUCHETTE",
  RECLINING_SEAT = "RECLINING_SEAT",
  ANY_FACILITY_SET = "ANY_FACILITY_SET",
}

/**
 * Limitation object.
 */
export interface Limitation {
  /** Usage validity period type */
  usageValidityPeriod?: UsageValidityPeriod;

  /** Object ref */
  usageValidityPeriodRef?: ObjectRef;

  /** Object ref */
  userProfileRef?: ObjectRef;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 */
export interface TripPatternRequest {
  /** Legs constituting a suggested sequence of rides and links for this trip */
  legs: LegRequest[];
}

/**
 * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
 * @example TOTAL_PRICE
 */
export enum PriceComparisonAlgorithmEnum {
  TOTAL_PRICE = "TOTAL_PRICE",
  BEFORE_SDR = "BEFORE_SDR",
}

/**
 * A specification of which travellers can use an offer, along with limitations on the number of travellers that must be selected from the group for the OFFER to be valid.
 */
export interface TravellerMappingSummary {
  /**
   * The maximum number of travellers that can be selected from the group.
   * @format int32
   */
  maxNumberOfTravellers: number;

  /** The ids of the travellers. */
  travellerIds: string[];

  /**
   * The minimum number of travellers that can be selected from the group.
   * @format int32
   */
  minNumberOfTravellers: number;

  /** A user type */
  userType: UserTypeEnum;
}

/**
 * Identify zone or stopPlace in a journeySpec
 */
export interface PlaceInJourneySpec {
  /** A stop place */
  stopPlace?: StopPlace;
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
 * Determines what rules to apply when categorizing and recommending offers for travellers
 */
export interface RuleSpec {
  /**
   * There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
   */
  journeyOrganizeAlgorithm?: JourneyOrganizeAlgorithmEnum;
  mixinOffersWithHigherFlexibility?: boolean;

  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: PriceComparisonAlgorithmEnum;
  onlyIncludeRecommendedOffers?: boolean;
  onlyIncludeRecommendationsWithOffersToBuy?: boolean;
}

/**
 * Reference to a Validable Element and its configuration.
 */
export interface ValidableElementConfiguration {
  /** Specific parameter assignments */
  specificParameterAssignments?: ParameterSpecification[];

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** The description of the object. */
  description: TextInLanguage[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * How many repeatable validable elements
   * @format int32
   * @example 10
   */
  occurs?: number;

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** Reference to a Fare Structure Element and its configuration. */
  fareStructureElements: FareStructureElementConfiguration[];

  /** The name of the object. */
  name: TextInLanguage[];

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:ValidableElement:Ordinary
   */
  id: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Text in a specific language.
 */
export interface TextInLanguage {
  /**
   * Language code.
   * @example nob
   */
  lang: string;

  /**
   * The text.
   * @example Enkeltbillett sone 1
   */
  value: string;
}

export interface SearchResponse {
  offers: OfferSummary[];

  /** @example 5e7cbc83e58e6a00011cecc3 */
  tripPatternId?: string;
  unavailableProducts?: UnavailableProduct[];
  optionalProducts?: OptionalProduct[];
  recommendations?: Recommendation[];
}

/**
 * @example TRIP_CARNET
 */
export enum ProductTypeEnum {
  TRIP_CARNET = "TRIP_CARNET",
  PASS_CARNET = "PASS_CARNET",
  UNIT_COUPONS = "UNIT_COUPONS",
  STORED_VALUE = "STORED_VALUE",
  OTHER = "OTHER",
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

export enum ActivationMeansEnum {
  NONE_REQUIRED = "NONE_REQUIRED",
  CHECK_IN = "CHECK_IN",
  USE_OF_VALIDATOR = "USE_OF_VALIDATOR",
  USE_OF_MOBILE_DEVICE = "USE_OF_MOBILE_DEVICE",
  AUTOMATIC_BY_TIME = "AUTOMATIC_BY_TIME",
  AUTOMATIC_BY_PROXIMITY = "AUTOMATIC_BY_PROXIMITY",
  OTHER = "OTHER",
}

/**
 * An identifiable SALES PACKAGE CONFIGURATION paired with information regarding which travellers can use it.
 */
export interface Offer {
  /** A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'. */
  pricedResource?: PricedResourceRef;

  /**
   * The requested distribution channel
   * @example ENT:DistributionChannel:Web
   */
  requestedByDistributionChannel?: string;

  /**
   * The ID of the OFFER.
   * @format uuid
   * @example f65c6b98-768f-4578-9c83-1a2ccfd2b7d7
   */
  id: string;

  /** Reference to a Sales Package and its configuration. */
  salesPackageConfig: SalesPackageConfiguration;

  /** Traveller limitations that applies to the SALES PACKAGE CONFIGURATION. */
  travellerMapping: TravellerMapping[];
}

/**
 * Price with VAT and currency information
 */
export interface Price {
  /**
   * The VAT group.
   * @example TRANSPORT_AND_TICKETS_VAT
   */
  vatGroup?: string;

  /**
   * The amount.
   * @example 100.00
   */
  amount: string;

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
  /** Reference to round trip parameters with price information */
  roundTrip: PricedUsageParameter[];

  /** Reference to luggage allowance parameters with price information. */
  luggageAllowances: PricedUsageParameter[];

  /** A reference to a user parameter and price data. */
  usageValidityPeriod?: PricedUsageParameter;

  /** Reference to entitlement given parameters with price information. */
  entitlementGiven: PricedUsageParameter[];

  /** Reference to purchase window parameters with price information. */
  purchaseWindow: PricedUsageParameter[];

  /** Reference to reserving parameters with price information. */
  reserving: PricedUsageParameter[];

  /** Reference to replacing parameters with price information. */
  replacing: PricedUsageParameter[];

  /** A reference to a user profile and price data. */
  userProfile?: PricedUserProfile;

  /** Reference to exchanging parameters with price information. */
  exchanging: PricedUsageParameter[];

  /** Reference to transferability parameters with price information. */
  transferability: PricedUsageParameter[];

  /** Reference to a refund parameter with price information. */
  refunds: PricedUsageParameter[];

  /** A reference to a group with price data. */
  group?: PricedGroup;
}

/**
 * Reference to a Fare Product and its configuration.
 */
export interface FareProductConfiguration {
  /** A sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRight;

  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveller had an entitlement product.
   * @example SJN:PreassignedFareProduct:StandardFullFlex
   */
  originatingFromProductId?: string;

  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;

  /** The description of the object. */
  description: TextInLanguage[];

  /** A request used to search for fare products for a specified trip. */
  organisation: OrganisationConfig;

  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;

  /** Reference to the legs this configuration is for. */
  datedServiceJourneys?: DatedServiceJourney[];

  /** Reference to a Validable Element and its configuration. */
  validableElements: ValidableElementConfiguration[];

  /**
   * Used for selecting a unique element in the configurations
   * @example nhC7Jr
   */
  selectableId: string;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:SupplementProduct:ExtraLegSpace
   */
  id: string;

  /** A summary of the properties of a fare product or package that can be used to generate passenger information. */
  conditionSummary?: ConditionSummary;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];
  productType?: ProductTypeEnum;

  /** Specific parameter assignments */
  specificParameterAssignments?: ParameterSpecification[];

  /**
   * Amount of priced unit
   * @format int32
   */
  amount?: number;

  /**
   * A classification of this fare product
   * @example ENT:TypeOfFareProduct:update_product@single_operator
   */
  typeOfFareProduct?: string;

  /** Reference to the legs this configuration is for. */
  serviceJourneyIds: string[];

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;
  supplementProductType?: SupplementProductTypeEnum;

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;

  /** Lines where the product is valid */
  lineValidity?: LineValidity;

  /** The name of the object. */
  name: TextInLanguage[];

  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;

  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Logical operator
 */
export enum LogicalOperatorEnum {
  AND = "AND",
  OR = "OR",
  XOR = "XOR",
  NOT = "NOT",
  NAND = "NAND",
  XNOR = "XNOR",
  NOR = "NOR",
}

/**
 * Summary of properties for a product
 */
export interface PropertiesSummary {
  duration?: string;
  accommodations?: AccommodationForServiceJourney[];
  fareClasses?: FareClassEnum[];

  /** Representation of a repeatable ticket, with an optional duration for each instance and an amount of times the ticket can be used */
  carnet?: Carnet;

  /** @example ENT:Version:V1 */
  userProfileVersion?: string;
  reservingRequirements?: ReservingRequirementForServiceJourney[];

  /** id and and name of an organisation */
  organisation: OrganisationSummary;
  baggageTypes?: BaggageTypeEnum[];

  /** @example ENT:UserProfile:Adult */
  userProfileId?: string;
  isExchangeable?: boolean;
  isRefundable?: boolean;
  group?: GroupSummary;
}

/**
 * A reference to a user parameter and price data.
 */
export interface PricedUsageParameter {
  /** The name of the object. */
  name: TextInLanguage[];

  /**
   * Used for selecting a unique element in the configurations
   * @example ypLDzG
   */
  selectableId: string;

  /** The description of the object. */
  description: TextInLanguage[];

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:UserProfile:Adult
   */
  id: string;

  /** The type of this usage parameter. */
  typeOfUsageParameter?: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;
}

/**
 * The Geographical Interval with distance and zone data.
 */
export interface GeoIntervalData {
  /**
   * The distance in KM or TEN for this interval.
   * @format double
   * @example 120
   */
  distance?: number;

  /** The name of the object. */
  name: TextInLanguage[];

  /** The description of the object. */
  description: TextInLanguage[];

  /**
   * The number of zones in this interval.
   * @format int32
   * @example 4
   */
  zoneCount?: number;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example NSB:GeographicalInterval:60TEN
   */
  id: string;

  /** A list of the zones that exist in this interval. Empty if not relevant. */
  zones: string[];

  /**
   * The version of the object
   * @example NSB:Version:V1
   */
  version: string;
}

/**
 * Organisation providing public transport services.
 */
export interface Operator {
  /**
   * Name of Operator.
   * @example Sporveien T-banen AS
   */
  name?: string;

  /**
   * NeTEx-id of Operator.
   * @example RUT:Operator:210
   */
  id?: string;
}

/**
 * A stop place
 */
export interface StopPlace {
  /**
   * Latitude
   * @format double
   * @example 59.910925
   */
  latitude?: number;

  /**
   * Name of stop place.
   * @example Oslo S
   */
  name?: string;

  /** Tariff zones */
  tariffZones?: TariffZone[];

  /**
   * ID
   * @example NSR:StopPlace:337
   */
  id: string;

  /**
   * Longitude
   * @format double
   * @example 10.753276
   */
  longitude?: number;
}

/**
 * Describes zones where a product is valid
 */
export interface ZonalValidity {
  zones?: string[];
}

/**
* There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
* @example FOR_EACH_AND_GROUPED_COMBINATIONS
*/
export enum JourneyOrganizeAlgorithmEnum {
  SUBSEQUENT_COMBINATIONS = "SUBSEQUENT_COMBINATIONS",
  COMBINATIONS_FROM_OFFERS = "COMBINATIONS_FROM_OFFERS",
  FOR_EACH_AND_GROUPED_COMBINATIONS = "FOR_EACH_AND_GROUPED_COMBINATIONS",
}

/**
 * A user type
 * @example ADULT
 */
export enum UserTypeEnum {
  ANYONE = "ANYONE",
  ADULT = "ADULT",
  CHILD = "CHILD",
  INFANT = "INFANT",
  ANIMAL = "ANIMAL",
  SENIOR = "SENIOR",
  GUIDE_DOG = "GUIDE_DOG",
  YOUTH = "YOUTH",
  STUDENT = "STUDENT",
  MILITARY = "MILITARY",
}

export interface UpdateSearchTripPatternRequest {
  recommendationConfig?: RecommendationConfig;

  /** Travellers to be updated. */
  travellers: Traveller[];

  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * Determines what fields should be used to categorize the offers
 */
export interface CategorySpec {
  facilitySet?: AccommodationFacilityForRecommendationsEnum[];
  typesOfRecommendation: TypeOfRecommendationEnum[];
  fareClasses?: FareClassEnum[];
  specifiedProducts?: string[];
  durationTypes?: DurationEnum[];
}

/**
 * A sale discount right that has been applied to the fare product.
 */
export interface DiscountRight {
  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveller had an entitlement product.
   * @example ENT:EntitlementProduct:V1F1
   */
  originatingFromProductId?: string;

  /** The name of the object. */
  name: TextInLanguage[];

  /**
   * Used for selecting a unique element in the configurations
   * @example hlfmHy
   */
  selectableId: string;

  /** The description of the object. */
  description: TextInLanguage[];

  /** A request used to search for fare products for a specified trip. */
  organisation: OrganisationConfig;

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example SJN:SaleDiscountRight:Premium
   */
  id: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example SJN:Version:SDR-Premium-1
   */
  version: string;

  /** Reference to different UsageParameters. */
  parameters?: DiscountUsageParameters;
}

/**
 * Container object for other properties.
 */
export interface Properties {
  /** Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET */
  accommodations: AccommodationFacilityEnum[];

  /** FareClasses. Enum as string with the following values: FIRST_CLASS, SECOND_CLASS, THIRD_CLASS, ECONOMY_CLASS, BUSINESS_CLASS, TURISTA, PREFERENTE, STANDARD_CLASS, PREMIUM_CLASS, ANY, UNKNOWN */
  fareClasses: FareClassEnum[];
}

/**
 * Representation of a mandatory product that is included in an offer
 */
export interface PreassignedProduct {
  /** Summary of a sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRightSummary;

  /** @example Standard refunderbar */
  name: string;

  /** @example Standard refunderbar */
  description: string;

  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;

  /** @example SJN:PreassignedFareProduct:StandardFullFlex */
  id: string;

  /** @example SJN:Version:V1 */
  version: string;

  /** Summary of properties for a product */
  properties: PropertiesSummary;
}

/**
 * Contains information to look up transaction history for a traveller and what CappedDiscountRight-program he or she is a part of.
 */
export interface CappingSpecification {
  /** Contains enough information about a customer to look up transaction history. */
  customerRef: CustomerRef;

  /**
   * Specify a minimum alternative duration oo avoid alternatives that doesn't last long enough in the future to be useful.
   * @format duration
   */
  minimumAlternativeDuration?: string;

  /** Reference to the fare contract for this traveller. */
  fareContractId: string;

  /**
   * To avoid too many similar alternatives you can specify a minimum period between the start date of each alternative.
   * @format duration
   */
  minimumDurationBetweenAlternatives?: string;

  /** Reference to a CappedDiscountRight. */
  cappedDiscountRightId: string;
}

/**
 * A specification of which travellers can use an offer, along with limitations on the number of travellers that must be selected from the group for the OFFER to be valid.
 */
export interface TravellerMapping {
  /**
   * The maximum number of travellers that can be selected from the group.
   * @format int32
   */
  maxNumberOfTravellers: number;

  /** The ids of the travellers. */
  travellerIds: string[];

  /**
   * The minimum number of travellers that can be selected from the group.
   * @format int32
   */
  minNumberOfTravellers: number;

  /** If there are a through fare with two operators more user profiles are needed, this list represents these */
  userProfileIds: string[];

  /** Version to the user profile associated with this offer. */
  userProfileVersion: string;

  /**
   * Reference to the user profile associated with this offer.
   * @example FLB:UserProfile:Adult
   */
  userProfileId: string;

  /** If the request uses traveller groups to specify the travellers this field holds the id of the group that the travellers belongs to. */
  travellerGroupId?: string;
}

/**
 * A reference to a user profile and price data.
 */
export interface PricedUserProfile {
  /** The name of the object. */
  name: TextInLanguage[];

  /**
   * Used for selecting a unique element in the configurations
   * @example GtSlJQ
   */
  selectableId: string;

  /** True if this configuration is optional to buy, false if it's required. */
  optional: boolean;

  /**
   * The ID of the object on the format < context : type : instance name >
   * @example ENT:UserProfile:Anyone
   */
  id: string;

  /** The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies. */
  prices: Price[];

  /** The price contribution shows how much this node contributes on the total price. */
  priceContributions: Price[];

  /**
   * The version of the object
   * @example ENT:Version:V1
   */
  version: string;
  typeOfConcession?: string;
}

export enum UsageEndEnum {
  STANDARD_DURATION = "STANDARD_DURATION",
  END_OF_CALENDAR_PERIOD = "END_OF_CALENDAR_PERIOD",
  END_OF_RIDE = "END_OF_RIDE",
  END_OF_TRIP = "END_OF_TRIP",
  END_OF_FARE_DAY = "END_OF_FARE_DAY",
  END_OF_FARE_PERIOD = "END_OF_FARE_PERIOD",
  PRODUCT_EXPIRY = "PRODUCT_EXPIRY",
  PROFILE_EXPIRY = "PROFILE_EXPIRY",
  DEREGISTRATION = "DEREGISTRATION",
  OTHER = "OTHER",
  NO_TEMPORAL_VALIDITY = "NO_TEMPORAL_VALIDITY",
}

/**
 * Collection of attributes that characterize a journey.
 */
export interface JourneySpec {
  /** The mode of transport or access (e.g., foot) used when traversing this leg. */
  mode?: TransportModeEnum;

  /**
   * NeTEx-id of line
   * @example GJB:Line:R30
   */
  line?: string;

  /**
   * NeTEx-id of authority.
   * @example ENT:Authority:ENT
   */
  authority?: string;

  /** The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride */
  transportSubmode?: TransportSubModeEnum;

  /**
   * @format date-time
   * @example 2020-05-13T07:19:30.389Z
   */
  startTime?: string;

  /**
   * @format date-time
   * @example 2020-05-13T09:19:30.389Z
   */
  endTime?: string;
  placesInJourney?: PlaceInJourneySpec[];

  /**
   * NeTEx-id of Operator.
   * @example RUT:Operator:210
   */
  operator?: string;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 */
export interface TripPattern {
  expired?: boolean;

  /** Legs constituting a suggested sequence of rides and links for this trip */
  legs?: Leg[];

  /**
   * ID of the trip pattern
   * @example 5e7cbc83e58e6a00011cecc3
   */
  id?: string;
  isPotentialRoundtrip?: boolean;
}

/**
 * Part of a trip pattern. Either a ride on a public transport vehicle or access or path link to/from/between places
 */
export interface Leg {
  /** Used to specify that the vehicle used on this leg is the same that will be used on the next leg */
  interchangeTo?: InterchangeTo;

  /** A list of coordinates encoded as a polyline string (see http://code.google.com/apis/maps/documentation/polylinealgorithm.html) */
  pointsOnLink?: PointsOnLink;

  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  fromPlace: Place;

  /** A group of routes which is generally known to the public by a similar name or number implements */
  line?: Line;

  /** EstimatedCall for the quay. */
  fromEstimatedCall?: EstimatedCall;

  /**
   * The aimed date and time this leg ends.
   * @format date-time
   * @example 2020-05-13T09:19:30.389Z
   */
  aimedEndTime: string;

  /** The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride */
  transportSubmode?: TransportSubModeEnum;
  serviceJourney?: ServiceJourney;

  /** EstimatedCall for the quay. */
  toEstimatedCall?: EstimatedCall;

  /** Whether this leg is a ride leg or not. */
  ride: boolean;

  /** Organisation providing public transport services. */
  operator?: Operator;

  /** The mode of transport or access (e.g., foot) used when traversing this leg. */
  mode: TransportModeEnum;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeToQuay?: Quay;
  hasToFromQuays?: boolean;

  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  maybeFromQuay?: Quay;

  /**
   * The aimed date and time this leg starts.
   * @format date-time
   * @example 2020-05-13T07:19:30.389Z
   */
  aimedStartTime: string;

  /**
   * The expected date and time this leg starts.
   * @format date-time
   * @example 2020-05-13T07:19:30.389Z
   */
  expectedStartTime?: string;

  /** Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed. */
  authority?: Authority;

  /** For ride legs, intermediate quays between the Place where the leg originates and the Place where the leg ends. For non-ride legs, null. */
  intermediateQuays: Quay[];

  /** A planned vehicle journey with passengers. */
  datedServiceJourney?: DatedServiceJourney;

  /**
   * The expected date and time this leg ends.
   * @format date-time
   * @example 2020-05-13T09:19:30.389Z
   */
  expectedEndTime?: string;

  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  toPlace: Place;
}

/**
 * Usage validity period type
 */
export interface UsageValidityPeriod {
  /**
   * Standard duration. Represented as a string formatted according to ISO-8601
   * @format duration
   * @example PT1H
   */
  standardDuration?: string;

  /**
   * StartDateTime
   * @format date-time
   * @example 2020-05-13T07:19:30.389Z
   */
  startDateTime?: string;

  /** UsageValidityPeriod id */
  id: string;
  usageTrigger?: UsageTriggerEnum;

  /**
   * EndDate
   * @format date-time
   * @example 2020-05-13T07:19:30.389Z
   */
  endDateTime?: string;
  usageEnd?: UsageEndEnum;

  /** UsageValidityPeriod version */
  version: string;

  /** Activation Means. Describes how a product can be activated. */
  activationMeans?: ActivationMeansEnum[];
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
  /**
   * The encoded points of the polyline.
   * @example uhf_Jg~ahAu~oBye~@w~Ln~CqfkBtpaAelg@dejB
   */
  points: string;
}

/**
 * Describes which offer to buy and how many of this offer to buy to satisfy a recommendation
 */
export interface OfferToBuy {
  /** List of selectableIds of supplement products which upgrades a product */
  selectableProductIds: string[];

  /** One possible grouping of travellers for the number of offers to buy */
  possibleTravellerIds: string[][];

  /**
   * Id of the offer to buy
   * @example 00faf83-56c3-4f4e-8be9-e793c255a77b
   */
  id: string;

  /** DEPRECATED: Use selectable ids from selectableProductIds instead. This field contains netexIds of upgradable supplement products */
  withUpgradeProducts: string[];

  /**
   * Number of this offer to buy
   * @example 2
   */
  numberToBuy: number;
}

/**
* Basis on which pricing is done - per whole group
or per member.
* @example PER_OFFER
*/
export enum PricingBasisEnum {
  PER_OFFER = "PER_OFFER",
  PER_PERSON = "PER_PERSON",
}
