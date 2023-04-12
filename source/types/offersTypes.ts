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
 * UnavailableProductProperties
 * Properties of an unavailable product
 * @example null
 */
export interface UnavailableProductProperties {
  /**
   * Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET
   * @example null
   */
  accommodations?: AccommodationFacilityEnum[];
  /** @example null */
  fareClasses?: FareClassEnum[];
  /** id and and name of an organisation */
  organisation?: OrganisationSummary;
  /** @example null */
  isExchangeable?: boolean;
  /** @example null */
  isRefundable?: boolean;
}

/**
 * CappedDiscountOption
 * A discount might be given based on previous transactions if CappedDiscountRequest was specified.
 * @example null
 */
export interface CappedDiscountOption {
  cappedDiscountRightRef: RefType;
  /** @example null */
  alternatives?: CappingAlternative[];
  cappedDiscountRuleRef: RefType;
}

/**
 * DiscountRightSummary
 * Summary of a sale discount right that has been applied to the fare product.
 * @example null
 */
export interface DiscountRightSummary {
  /** @example "ENT:EntitlementProduct:levelA1" */
  originatingFromProductId?: string;
  price: PriceSummary;
  /** @example "Premiumrabatt" */
  name: string;
  /** @example "Premiumrabatt" */
  description: string;
  /** @example "SJN:SaleDiscountRight:Premium" */
  id: string;
  /** @example "SJN:Version:SDR-Premium-1" */
  version: string;
}

/**
 * OrganisationSummary
 * id and and name of an organisation
 * @example null
 */
export interface OrganisationSummary {
  /**
   * the name of the organisation
   * @example "Go-Ahead Nordic"
   */
  name: string;
  /**
   * the netex-id of organisation
   * @example "GOA:Authority:GOA"
   */
  id: string;
}

/**
 * A reference to a group with price data.
 * @example null
 */
export interface PricedGroup {
  /**
   * Reference to a group
   * @example null
   */
  userProfiles: UserProfileInGroup[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * Minimum number of persons in the group
   * @example null
   */
  minNumberOfPersons?: number;
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * Maximum number of persons in the group
   * @example null
   */
  maxNumberOfPersons?: number;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * Used for selecting a unique element in the configurations
   * @example null
   */
  selectableId: string;
  /**
   * Basis on which pricing is done - per whole group
   * or per member.
   */
  pricingBasis?: PricingBasisEnum;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * The type of this usage parameter.
   * @example null
   */
  typeOfUsageParameter?: string;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
}

/**
 * TransportModeEnum
 * The mode of transport or access (e.g., foot) used when traversing this leg.
 * @example "RAIL"
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
  UNKNOWN = "UNKNOWN",
}

/**
 * A request used to search for fare products valid between zones.
 * @example null
 */
export interface SearchZonesRequest {
  recommendationConfig?: RecommendationConfig;
  /**
   * The travellers.
   * @example null
   */
  travellers: Traveller[];
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
   */
  travelDate: string;
  /**
   * The id of the origin zone.
   * @example "RUT:TariffZone:1"
   */
  from: string;
  /** A specification of an existing ticket. */
  existingTicket?: ExistingTicket;
  /**
   * The id of the destination zone.
   * @example "RUT:TariffZone:3N"
   */
  to: string;
  /**
   * Optional sequence of via zones.
   * @example null
   */
  via?: string[];
}

/**
 * ProgramSummary
 * @example null
 */
export interface ProgramSummary {
  /** @example "Entur Reis" */
  name?: string;
  /** @example "9" */
  id: string;
  /** @example null */
  infoLink?: string;
}

/**
 * BaggageTypeEnum
 * @example "BICYCLE"
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
 * @example null
 */
export interface ObjectRef {
  /**
   * object ref ref
   * @example null
   */
  ref: string;
  /**
   * object ref version
   * @example null
   */
  version?: string;
}

/**
 * ServiceJourney
 * @example null
 */
export interface ServiceJourneySummary {
  /** @example "NSB:ServiceJourney:56789" */
  serviceJourneyId: string;
  /** @example "ENT:DatedServiceJourney:12345" */
  datedServiceJourneyId: string;
}

/**
 * Used to specify that the vehicle used on this leg is the same that will be used on the next leg
 * @example null
 */
export interface InterchangeTo {
  toServiceJourney?: ServiceJourney;
  /** @example null */
  staySeated?: boolean;
  fromServiceJourney?: ServiceJourney;
}

/**
 * Reference to a group
 * @example null
 */
export interface UserProfileInGroup {
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
   * The ID of the object on the format < context : type : instance name >
   * @example null
   */
  id: string;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /** @example "NSB:TypeOfConcession:Student" */
  typeOfConcession?: string;
  /**
   * The number of people in the group.
   * @format int32
   * @example null
   */
  numberOfPeople: number;
}

/** @example null */
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
 * TypeOfRecommendationEnum
 * @default "CHEAPEST"
 * @example "CHEAPEST"
 */
export enum TypeOfRecommendationEnum {
  FLEXIBLE = "FLEXIBLE",
  SEMI_FLEXIBLE = "SEMI_FLEXIBLE",
  NON_FLEXIBLE = "NON_FLEXIBLE",
  CHEAPEST = "CHEAPEST",
}

/**
 * A request used to search for fare products between stop places
 * @example null
 */
export interface SearchStopPlacesRequest {
  recommendationConfig?: RecommendationConfig;
  /**
   * The travellers.
   * @example null
   */
  travellers: Traveller[];
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
   */
  travelDate: string;
  /**
   * Authority ID. Ignored for rail stop places.
   * @example "ENT:Authority:ENT"
   */
  authority?: string;
  /**
   * The id of the origin stop place.
   * @example "NSR:StopPlace:548"
   */
  from: string;
  /**
   * The id of the destination stop place.
   * @example "NSR:StopPlace:337"
   */
  to: string;
  /** @example null */
  offersForWholeTripOnly?: boolean;
}

/**
 * FareClassEnum
 * @example "STANDARD_CLASS"
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
 * OptionalProduct
 * Representation of a optional product that can be selected together with mandatory products in an offer
 * @example null
 */
export interface OptionalProduct {
  /** Summary of a sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRightSummary;
  price: PriceSummary;
  /** @example "Sykkel som bagasje" */
  name: string;
  /**
   * Antallet valgfrie produkter som er tilgjengelig for å kjøpe
   * @example 4
   */
  available?: number;
  /** @example "ZO9Qjn" */
  selectableId: string;
  /** @example "Sykkel som bagasje" */
  description: string;
  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;
  /** @example "NSB:SupplementProduct:BicycleReserving" */
  id: string;
  supplementProductType?: SupplementProductTypeEnum;
  /** @example "NSB:Version:V1" */
  version: string;
  /** Summary of properties for a product */
  properties: PropertiesSummary;
}

/**
 * Reference to a Fare Structure Element and its configuration.
 * @example null
 */
export interface FareStructureElementConfiguration {
  /** A simple reference object containing enough information to lookup the object itself if needed. */
  qualityFactor?: DataManagedObjectData;
  /**
   * Specific parameter assignments
   * @example null
   */
  specificParameterAssignments?: ParameterSpecification[];
  /**
   * Quotas for the configuration
   * @example null
   */
  quotas: Quota[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /** A simple reference object containing enough information to lookup the object itself if needed. */
  distanceMatrixElement?: DataManagedObjectData;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /** The Geographical Interval with distance and zone data. */
  interval?: GeoIntervalData;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:FareStructureElement:TENInterval"
   */
  id: string;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Leg request describing a part of a journey
 * @example null
 */
export interface LegRequest {
  /**
   * Stop place id for the destination of the leg
   * @example "NSR:StopPlace:640"
   */
  toStopPlaceId: string;
  /**
   * The date the service journey is valid for
   * @format date
   * @example "2020-05-13"
   */
  travelDate: string;
  /**
   * Stop place id for he origin of the leg
   * @example "NSR:StopPlace:635"
   */
  fromStopPlaceId: string;
  /**
   * Service journey id for the leg
   * @example "NSB:ServiceJourney:1-232-1016-20201117132"
   */
  serviceJourneyId: string;
}

/**
 * CappingAlternative
 * An alternative is based on previous transactions might have a discount at the expense of setting the start date in the past.
 * @example null
 */
export interface CappingAlternative {
  /**
   * The start date of this alternative.
   * @format date-time
   * @example null
   */
  startDateTime: string;
  /**
   * A pseudo random string that is used to select what alternative to use when purchasing an offer.
   * @example null
   */
  selectableId: string;
  /** Price with VAT and currency information */
  discount: Price;
  /**
   * The end date of this alternative.
   * @format date-time
   * @example null
   */
  endDateTime: string;
}

/**
 * Recommendation
 * @example null
 */
export interface Recommendation {
  typeOfRecommendation: TypeOfRecommendationEnum;
  facilitySet?: AccommodationFacilityForRecommendationsEnum;
  fareClass?: FareClassEnum;
  /** @example null */
  offersToBuy: OfferToBuy[];
  /** Describes the geographical validity covered by the recommendation */
  geographicalValidityCovered: GeographicalValidityCovered;
  durationType?: DurationEnum;
}

/**
 * GeographicalValidityCovered
 * Describes the geographical validity covered by the recommendation
 * @example null
 */
export interface GeographicalValidityCovered {
  /** @example null */
  serviceJourneys?: string[];
  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;
  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;
}

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
 * OfferSummary
 * @example null
 */
export interface OfferSummary {
  /** A discount might be given based on previous transactions if CappedDiscountRequest was specified. */
  cappedDiscountOption?: CappedDiscountOption;
  /** @example null */
  availableFulfillmentMethods: AvailableFulfillmentMethod[];
  /** @example null */
  preassignedProducts: PreassignedProduct[];
  /** @example null */
  optionalProductsSelectableIds?: string[];
  /** @example null */
  eligibleForAccrualInPrograms?: ProgramSummary[];
  price: PriceSummary;
  /** @example "Flex Refunderbar" */
  name: string;
  /**
   * Antall tilbud tilgjengelig for å kjøpe
   * @example 14
   */
  available?: number;
  /** @example "Flex Refunderbar" */
  description: string;
  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;
  /** @example "00faf83-56c3-4f4e-8be9-e793c255a77b" */
  id: string;
  /** @example null */
  travellerMapping?: TravellerMappingSummary[];
}

/**
 * DistributionParameters
 * References to different distribution parameters.
 * @example null
 */
export interface DistributionParameters {
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
   * Reference to a FullfillmentMethod with price information.
   * @example "TRAVEL_CARD"
   */
  fulfillmentMethod?: string;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "ENT:DistributionMethod:NOD"
   */
  id: string;
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
   * Reference to a DistributionChannel with price information.
   * @example "ENT:DistributionChannel:Online"
   */
  distributionChannel?: string;
  /**
   * The version of the object
   * @example "ENT:Version:V1"
   */
  version: string;
}

/**
 * DynamicDistanceMatrixElement type
 * @example null
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
  /**
   * DynamicDistanceMatrixElement id
   * @example null
   */
  id: string;
  /**
   * DynamicDistanceMatrixElement version
   * @example null
   */
  version: string;
}

/**
 * AccommodationForServiceJourney
 * Accommodation for service journey
 * @example null
 */
export interface AccommodationForServiceJourney {
  serviceJourney: ServiceJourneySummary;
  /** @example null */
  accommodation: AccommodationFacilityEnum[];
}

/** @example null */
export interface SpecificParameterAssignment {
  /** Object ref */
  distanceMatrixElementRef?: ObjectRef;
  /** DynamicDistanceMatrixElement type */
  dynamicDistanceMatrixElement?: DynamicDistanceMatrixElement;
  /** Logical operator */
  includesGroupingType?: LogicalOperatorEnum;
  /**
   * Validity parameters
   * @example null
   */
  validityParameters?: ValidityParameter[];
  /** Object ref */
  typeOfAccessRightAssignmentRef?: ObjectRef;
  /** Logical operator */
  validityParameterGroupingType?: LogicalOperatorEnum;
  /** Logical operator */
  limitationGroupingType?: LogicalOperatorEnum;
  /**
   * Included SpecificParameterAssignments
   * @example null
   */
  includes?: SpecificParameterAssignment[];
  /**
   * Limitations
   * @example null
   */
  limitations?: Limitation[];
}

/**
 * EstimatedCall for the quay.
 * @example null
 */
export interface EstimatedCall {
  /**
   * The date the estimated call is valid for.
   * @example "2020-12-24T16:00:00Z"
   */
  date: string;
  /** A place such as platform, stance, or quayside where passengers have access to PT vehicles. */
  quay?: Quay;
}

/**
 * UsageTriggerEnum
 * @example null
 */
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
 * @example null
 */
export interface DiscountUsageParameters {
  /**
   * Reference to entitlement given parameters with price information.
   * @example null
   */
  entitlementGiven: PricedUsageParameter[];
  /**
   * Reference to reserving parameters with price information.
   * @example null
   */
  reserving: PricedUsageParameter[];
}

/**
 * ServiceJourney
 * @example null
 */
export interface ServiceJourney {
  /** @example "ENT:ServiceJourney:1-1605-1919" */
  id: string;
  /** @example "1919" */
  privateCode?: string;
}

/**
 * A specification of an existing ticket.
 * @example null
 */
export interface ExistingTicket {
  /**
   * ServiceJourneys, not implemented
   * @example null
   */
  serviceJourneys?: string[];
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
}

/**
 * Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed.
 * @example null
 */
export interface Authority {
  /**
   * Name of Authority.
   * @example "ENT"
   */
  name?: string;
  /**
   * NeTEx-id of Authority.
   * @example "ENT:Authority:ENT"
   */
  id: string;
}

/**
 * ValidityParameter object.
 * @example null
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
 * @example "LOCAL"
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
 * @example null
 */
export interface SalesPackageConfiguration {
  /** A discount might be given based on previous transactions if CappedDiscountRequest was specified. */
  cappedDiscountOption?: CappedDiscountOption;
  /**
   * Specific parameter assignments
   * @example null
   */
  specificParameterAssignments?: ParameterSpecification[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys: DatedServiceJourney[];
  /**
   * References to different distribution parameters.
   * @example null
   */
  distributions: DistributionParameters[];
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:SalesPackage:Ordinary"
   */
  id: string;
  /**
   * Reference to a Fare Product and its configuration.
   * @example null
   */
  fareProducts: FareProductConfiguration[];
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * UnavailableProduct
 * Representation of a product that is unavailable, but would have been included in an offer if available.
 * @example null
 */
export interface UnavailableProduct {
  serviceJourney: ServiceJourneySummary;
  /** @example "SJN:PreassignedFareProduct:StandardFullFlex" */
  id: string;
  /** Properties of an unavailable product */
  properties?: UnavailableProductProperties;
  status: UnavailableEnum;
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface OrganisationConfig {
  /**
   * The netexId for the organisation.
   * @example "ENT:Organisation:ENT"
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
 * @example null
 */
export interface LineValidity {
  /**
   * Valid on lines
   * @example null
   */
  validOn: string[];
  /**
   * Not valid on lines
   * @example null
   */
  notValidOn: string[];
}

/**
 * A place such as platform, stance, or quayside where passengers have access to PT vehicles.
 * @example null
 */
export interface Quay {
  /** A stop place */
  stopPlace?: StopPlace;
  /**
   * Name
   * @example "Nydalen"
   */
  name?: string;
  /** @example "NSR:Quay:11151" */
  id?: string;
}

/**
 * GeographicalValidity
 * Describes the geographical validity of a product
 * @example null
 */
export interface GeographicalValidity {
  /** @example null */
  serviceJourneys?: ServiceJourneySummary[];
  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;
  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;
}

/**
 * ReservingRequirementForServiceJourney
 * @example null
 */
export interface ReservingRequirementForServiceJourney {
  /** @example null */
  seatMapIsAvailable: boolean;
  reservingRequirement?: ReservingRequirementEnum;
  serviceJourney: ServiceJourneySummary;
}

/**
 * AvailableFulfillmentMethod
 * Describes which fulfilmentMethods are available for an Offer,
 * @example null
 */
export interface AvailableFulfillmentMethod {
  /**
   * NeTEx standard
   * @example null
   */
  id: string;
  /**
   * NeTEx standard
   * @example null
   */
  version: string;
}

/**
 * SupplementProductTypeEnum
 * @example "BICYCLE"
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

/** @example null */
export interface RecommendationConfig {
  /** Determines what rules to apply when categorizing and recommending offers for travellers */
  ruleSpec?: RuleSpec;
  /** Determines what fields should be used to categorize the offers */
  categorySpec?: CategorySpec;
}

/**
 * GroupSummary
 * @example null
 */
export interface GroupSummary {
  /** @example "Familiebillett" */
  name?: string;
  /** @example null */
  userProfiles: UserProfileInGroupSummary[];
  /** @example null */
  description: string;
  /** @example "ENT:GroupTicket:Family" */
  id: string;
  /** @example "ENT:Version:V1" */
  version: string;
}

/**
 * PriceSummary
 * @example null
 */
export interface PriceSummary {
  /** @example "100.00" */
  amount: string;
  /** @example "NOK" */
  currency: string;
}

/**
 * CustomerRef
 * Contains enough information about a customer to look up transaction history.
 * @example null
 */
export interface CustomerRef {
  /**
   * Reference to the account id within the account based ticketing module.
   * @example null
   */
  accountBasedTicketingCustomerRef?: string;
}

/**
 * A summary of the properties of a fare product or package that can be used to generate passenger information.
 * @example null
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
 * @example null
 */
export interface Place {
  /** @example "Oslo S" */
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
   * The ID of the object on the format < context : type : instance name >
   * @example "ENT:PreassignedFareProduct:Sone1"
   */
  id: string;
  /**
   * The version of the object
   * @example "ENT:Version:V1"
   */
  version: string;
}

/** @example null */
export interface TariffZone {
  /** @example "Ruter sone 1" */
  name?: string;
  /** @example "RUT:TariffZone:1" */
  id: string;
}

/** @example null */
export interface ParameterSpecification {
  /**
   * Specification of parameter id
   * @example null
   */
  specificationOf?: string;
  specificParameterAssignment?: SpecificParameterAssignment;
}

/**
 * UserProfileInGroupSummary
 * Reference to a group
 * @example null
 */
export interface UserProfileInGroupSummary {
  /** @example null */
  id: string;
  /** @example null */
  version?: string;
  /** @example null */
  numberOfPeople: number;
}

/**
 * A request used to search for fare products for a specified trip.
 * @example null
 */
export interface SearchTripPatternRequest {
  recommendationConfig?: RecommendationConfig;
  /**
   * The travellers for the set trip
   * @example null
   */
  travellers: Traveller[];
  /** List of legs constituting a suggested sequence of rides and links for a specific trip. */
  tripPattern: TripPatternRequest;
  /** A specification of an existing ticket. */
  existingTicket?: ExistingTicket;
  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
  /**
   * @default false
   * @example null
   */
  includeMultiTripOffers?: boolean;
}

/**
 * Carnet
 * Representation of a repeatable ticket, with an optional duration for each instance and an amount of times the ticket can be used
 * @example null
 */
export interface Carnet {
  /**
   * @format duration
   * @example "PT1H30M"
   */
  duration?: string;
  /** @example 10 */
  amount: number;
}

/**
 * A specification of a traveller.
 * @example null
 */
export interface Traveller {
  /**
   * A list of references to products that the traveller already owns
   * @example null
   */
  productIds?: string[];
  /** Contains information to look up transaction history for a traveller and what CappedDiscountRight-program he or she is a part of. */
  cappingSpecification?: CappingSpecification;
  /**
   * Identification of an Entur-customer. Used to personalise Offers when applicable.
   * @example "1234567"
   */
  customerId?: string;
  /**
   * A filter for what kind of luggage the traveller wants offers for. The type is enum as string with the following possible values: HANDBAG, HAND_LUGGAGE, SMALL_SUITCASE, SUITCASE, TRUNK, OVERSIZE_ITEM, BICYCLE, SPORTING_EQUIPMENT, SKIS, MUSICAL_INSTRUMENT, PUSH_CHAIR, MOTORIZED_WHEELCHAIR,LARGE_MOTORIZED_WHEELCHAIR, WHEELCHAIR, SMALL_ANIMAL, ANIMAL, GAME, MOTORCYCLE, OTHER
   * @example null
   */
  baggageTypes?: BaggageTypeEnum[];
  /**
   * Identifier of the traveller. Only unique within an http-transaction with Products.
   * @example "ID_A"
   */
  id?: string;
  /** A user type */
  userType?: UserTypeEnum;
  /** @example null */
  age?: number;
}

/**
 * RefType
 * @example null
 */
export interface RefType {
  /** @example null */
  id: string;
  /** @example null */
  version: string;
}

/**
 * A request used to search for fare products without inputting geographic data, but instead use Authority
 * @example null
 */
export interface SearchWithAuthorityRequest {
  /**
   * NeTEx-id of Authority
   * @example "ENT:Authority:1"
   */
  authorityId: string;
  /**
   * The travellers.
   * @example null
   */
  travellers: Traveller[];
  /**
   * The expected start time of travel.
   * @format date-time
   * @example null
   */
  travelDate: string;
}

/** @example "RESERVATIONS_COMPULSORY" */
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
 * GroupConfig
 * A configuration of how to group travellers in offers.
 * @example null
 */
export interface GroupConfig {
  /**
   * Number of compartments to group travellers in. If we are unable to fit the given travellers in the specified amount of compartments, no offer will be returned.
   * @example null
   */
  numberOfCompartments: number;
}

/**
 * UnavailableEnum
 * @example null
 */
export enum UnavailableEnum {
  SOLD_OUT = "SOLD_OUT",
  CLOSED = "CLOSED",
  UNKNOWN = "UNKNOWN",
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
  fromPlace: string;
  /**
   * Valid to place
   * @example "NSR:StopPlace:440"
   */
  toPlace: string;
}

/**
 * AccommodationFacilityForRecommendationsEnum
 * @example "SLEEPER"
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
 * @example null
 */
export interface Limitation {
  /** Usage validity period type */
  usageValidityPeriod?: UsageValidityPeriod;
  /** Object ref */
  usageValidityPeriodRef?: ObjectRef;
  /** Object ref */
  userProfileRef?: ObjectRef;
}

/** @example null */
export interface UpdateOfferWithCappedDiscountAlternativeRequest {
  /**
   * Selectable id of the capped discount alternative
   * @example null
   */
  selectableId: string;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 * @example null
 */
export interface TripPatternRequest {
  /**
   * Legs constituting a suggested sequence of rides and links for this trip
   * @example null
   */
  legs: LegRequest[];
}

/**
 * There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen.
 * @default "TOTAL_PRICE"
 * @example "TOTAL_PRICE"
 */
export enum PriceComparisonAlgorithmEnum {
  TOTAL_PRICE = "TOTAL_PRICE",
  BEFORE_SDR = "BEFORE_SDR",
}

/**
 * UsageStartConstraintTypeEnum
 * @example null
 */
export enum UsageStartConstraintTypeEnum {
  VARIABLE = "VARIABLE",
  FIXED = "FIXED",
  FIXED_WINDOW = "FIXED_WINDOW",
}

/**
 * A specification of which travellers can use an offer, along with limitations on the number of travellers that must be selected from the group for the OFFER to be valid.
 * @example null
 */
export interface TravellerMappingSummary {
  /**
   * The maximum number of travellers that can be selected from the group.
   * @format int32
   * @example null
   */
  maxNumberOfTravellers: number;
  /**
   * The ids of the travellers.
   * @example null
   */
  travellerIds: string[];
  /**
   * The minimum number of travellers that can be selected from the group.
   * @format int32
   * @example null
   */
  minNumberOfTravellers: number;
  /** A user type */
  userType: UserTypeEnum;
}

/**
 * PlaceInJourneySpec
 * Identify zone or stopPlace in a journeySpec
 * @example null
 */
export interface PlaceInJourneySpec {
  /** A stop place */
  stopPlace?: StopPlace;
  /** @example null */
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
 * UserProfileSummary
 * id, version, name and user type of a user
 * @example null
 */
export interface UserProfileSummary {
  /** @example null */
  name: string;
  /** @example null */
  id: string;
  /** A user type */
  userType?: UserTypeEnum;
  /** @example null */
  version: string;
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
 * Determines what rules to apply when categorizing and recommending offers for travellers
 * @example null
 */
export interface RuleSpec {
  /**
   * There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
   * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
   * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
   * COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
   */
  journeyOrganizeAlgorithm?: JourneyOrganizeAlgorithmEnum;
  /**
   * @default false
   * @example null
   */
  mixinOffersWithHigherFlexibility?: boolean;
  /** There are two supported algorithms for comparing offers; TOTAL_PRICE and BEFORE_SDR. TOTAL_PRICE: This is the default algorithm used if not specified, this only looks at the total price of the offers and finds the cheapest, if two offers have the same price, the one with the least amount of offers in the combination is chosen. BEFORE_SDR: This algorithm unapplies all sales discount rights in the offers before comparing prices, when the price of two combinations is the same, the combination containing the most amount of SDRs is chosen, thereafter if the amount is the same the combination with the least amount of offers in the combination is chosen. */
  priceComparisonAlgorithm?: PriceComparisonAlgorithmEnum;
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
}

/**
 * Reference to a Validable Element and its configuration.
 * @example null
 */
export interface ValidableElementConfiguration {
  /**
   * Specific parameter assignments
   * @example null
   */
  specificParameterAssignments?: ParameterSpecification[];
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * How many repeatable validable elements
   * @format int32
   * @example 10
   */
  occurs?: number;
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
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
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:ValidableElement:Ordinary"
   */
  id: string;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * Text in a specific language.
 * @example null
 */
export interface TextInLanguage {
  /**
   * Language code.
   * @example "nob"
   */
  lang: string;
  /**
   * The text.
   * @example "Enkeltbillett sone 1"
   */
  value: string;
}

/**
 * SearchResponse
 * @example null
 */
export interface SearchResponse {
  /** @example null */
  offers: OfferSummary[];
  /** @example "5e7cbc83e58e6a00011cecc3" */
  tripPatternId?: string;
  /** @example null */
  unavailableProducts?: UnavailableProduct[];
  /** @example null */
  optionalProducts?: OptionalProduct[];
  /** @example null */
  recommendations?: Recommendation[];
}

/**
 * ProductTypeEnum
 * @example "TRIP_CARNET"
 */
export enum ProductTypeEnum {
  TRIP_CARNET = "TRIP_CARNET",
  PASS_CARNET = "PASS_CARNET",
  UNIT_COUPONS = "UNIT_COUPONS",
  STORED_VALUE = "STORED_VALUE",
  OTHER = "OTHER",
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
 * ActivationMeansEnum
 * @example null
 */
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
 * @example null
 */
export interface Offer {
  /** A reference to the resource that is priced in this offer, e.g. a specific 'TripPattern'. */
  pricedResource?: PricedResourceRef;
  /**
   * The requested distribution channel
   * @example "ENT:DistributionChannel:Web"
   */
  requestedByDistributionChannel?: string;
  /**
   * The ID of the OFFER.
   * @format uuid
   * @example "f65c6b98-768f-4578-9c83-1a2ccfd2b7d7"
   */
  id: string;
  /** Reference to a Sales Package and its configuration. */
  salesPackageConfig: SalesPackageConfiguration;
  /**
   * Traveller limitations that applies to the SALES PACKAGE CONFIGURATION.
   * @example null
   */
  travellerMapping: TravellerMapping[];
}

/**
 * Price with VAT and currency information
 * @example null
 */
export interface Price {
  /**
   * The VAT group.
   * @example "TRANSPORT_AND_TICKETS_VAT"
   */
  vatGroup?: string;
  /**
   * The amount.
   * @example "100.00"
   */
  amount: string;
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
  /**
   * Reference to round trip parameters with price information
   * @example null
   */
  roundTrip: PricedUsageParameter[];
  /**
   * Reference to luggage allowance parameters with price information.
   * @example null
   */
  luggageAllowances: PricedUsageParameter[];
  /** A reference to a user parameter and price data. */
  usageValidityPeriod?: PricedUsageParameter;
  /**
   * Reference to entitlement given parameters with price information.
   * @example null
   */
  entitlementGiven: PricedUsageParameter[];
  /**
   * Reference to purchase window parameters with price information.
   * @example null
   */
  purchaseWindow: PricedUsageParameter[];
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
  /** A reference to a user profile and price data. */
  userProfile?: PricedUserProfile;
  /**
   * Reference to exchanging parameters with price information.
   * @example null
   */
  exchanging: PricedUsageParameter[];
  /**
   * Reference to transferability parameters with price information.
   * @example null
   */
  transferability: PricedUsageParameter[];
  /**
   * Reference to a refund parameter with price information.
   * @example null
   */
  refunds: PricedUsageParameter[];
  /** A reference to a group with price data. */
  group?: PricedGroup;
}

/**
 * Reference to a Fare Product and its configuration.
 * @example null
 */
export interface FareProductConfiguration {
  /** A sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRight;
  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveller had an entitlement product.
   * @example "SJN:PreassignedFareProduct:StandardFullFlex"
   */
  originatingFromProductId?: string;
  /** Describes zones where a product is valid */
  zonalValidity?: ZonalValidity;
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /** A request used to search for fare products for a specified trip. */
  organisation: OrganisationConfig;
  /** Start and stop places where the product is valid */
  pointToPointValidity?: PointToPointValidity;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  datedServiceJourneys?: DatedServiceJourney[];
  /**
   * Reference to a Validable Element and its configuration.
   * @example null
   */
  validableElements: ValidableElementConfiguration[];
  /**
   * Used for selecting a unique element in the configurations
   * @example "nhC7Jr"
   */
  selectableId: string;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:SupplementProduct:ExtraLegSpace"
   */
  id: string;
  /** A summary of the properties of a fare product or package that can be used to generate passenger information. */
  conditionSummary?: ConditionSummary;
  /**
   * The price(s) of the sub configurations below this node. Multiple prices is supported in case of prices in multiple currencies.
   * @example null
   */
  prices: Price[];
  productType?: ProductTypeEnum;
  /**
   * Specific parameter assignments
   * @example null
   */
  specificParameterAssignments?: ParameterSpecification[];
  /**
   * Amount of priced unit
   * @format int32
   * @example null
   */
  amount?: number;
  /**
   * A classification of this fare product
   * @example "ENT:TypeOfFareProduct:update_product@single_operator"
   */
  typeOfFareProduct?: string;
  /**
   * Reference to the legs this configuration is for.
   * @example null
   */
  serviceJourneyIds: string[];
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  supplementProductType?: SupplementProductTypeEnum;
  /**
   * The price contribution shows how much this node contributes on the total price.
   * @example null
   */
  priceContributions: Price[];
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
  /** Lines where the product is valid */
  lineValidity?: LineValidity;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /** Reference to different UsageParameters. */
  parameters?: UsageParameters;
  /** Container object for other properties. */
  properties?: Properties;
}

/**
 * LogicalOperatorEnum
 * Logical operator
 * @example null
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
 * PropertiesSummery
 * Summary of properties for a product
 * @example null
 */
export interface PropertiesSummary {
  /** @example null */
  duration?: string;
  /** @example null */
  accommodations?: AccommodationForServiceJourney[];
  /** @example null */
  fareClasses?: FareClassEnum[];
  /** Representation of a repeatable ticket, with an optional duration for each instance and an amount of times the ticket can be used */
  carnet?: Carnet;
  /** id, version, name and user type of a user */
  userProfileSummary?: UserProfileSummary;
  /** @example null */
  reservingRequirements?: ReservingRequirementForServiceJourney[];
  /** id and and name of an organisation */
  organisation: OrganisationSummary;
  /** @example null */
  baggageTypes?: BaggageTypeEnum[];
  /** @example null */
  isExchangeable?: boolean;
  durationType?: DurationEnum;
  /** @example null */
  isRefundable?: boolean;
  group?: GroupSummary;
}

/**
 * A reference to a user parameter and price data.
 * @example null
 */
export interface PricedUsageParameter {
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * Used for selecting a unique element in the configurations
   * @example "ypLDzG"
   */
  selectableId: string;
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:UserProfile:Adult"
   */
  id: string;
  /**
   * The type of this usage parameter.
   * @example null
   */
  typeOfUsageParameter?: string;
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
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
}

/**
 * The Geographical Interval with distance and zone data.
 * @example null
 */
export interface GeoIntervalData {
  /**
   * The distance in KM or TEN for this interval.
   * @format double
   * @example 120
   */
  distance?: number;
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
   * The number of zones in this interval.
   * @format int32
   * @example 4
   */
  zoneCount?: number;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "NSB:GeographicalInterval:60TEN"
   */
  id: string;
  /**
   * A list of the zones that exist in this interval. Empty if not relevant.
   * @example null
   */
  zones: string[];
  /**
   * The version of the object
   * @example "NSB:Version:V1"
   */
  version: string;
}

/**
 * Organisation providing public transport services.
 * @example null
 */
export interface Operator {
  /**
   * Name of Operator.
   * @example "Sporveien T-banen AS"
   */
  name?: string;
  /**
   * NeTEx-id of Operator.
   * @example "RUT:Operator:210"
   */
  id?: string;
}

/**
 * A stop place
 * @example null
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
   * @example "Oslo S"
   */
  name?: string;
  /**
   * Tariff zones
   * @example null
   */
  tariffZones?: TariffZone[];
  /**
   * ID
   * @example "NSR:StopPlace:337"
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
 * ZonalValidity
 * Describes zones where a product is valid
 * @example null
 */
export interface ZonalValidity {
  /** @example null */
  zones?: string[];
}

/**
 * UsageValidityTypeEnum
 * @example null
 */
export enum UsageValidityTypeEnum {
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
 * There are three supported algorithms for organizing how we present each combination of journeys. Given three journeys in the trip pattern; SJ-1, SJ-2, SJ-3 the three algorithms will generate these combinations:
 * SUBSEQUENT_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2), (SJ-2, SJ-3), (SJ-1, SJ-2, SJ-3)
 * FOR_EACH_AND_GROUPED_COMBINATIONS: (SJ-1), (SJ-2), (SJ-3), (SJ-1, SJ-2, SJ-3)
 * COMBINATIONS_FROM_OFFERS: Will only organize by unique journey combinations covered by offers.
 * @default "SUBSEQUENT_COMBINATIONS"
 * @example "FOR_EACH_AND_GROUPED_COMBINATIONS"
 */
export enum JourneyOrganizeAlgorithmEnum {
  SUBSEQUENT_COMBINATIONS = "SUBSEQUENT_COMBINATIONS",
  COMBINATIONS_FROM_OFFERS = "COMBINATIONS_FROM_OFFERS",
  FOR_EACH_AND_GROUPED_COMBINATIONS = "FOR_EACH_AND_GROUPED_COMBINATIONS",
}

/**
 * UserTypeEnum
 * A user type
 * @example "ADULT"
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

/** @example null */
export interface UpdateSearchTripPatternRequest {
  recommendationConfig?: RecommendationConfig;
  /**
   * Travellers to be updated.
   * @example null
   */
  travellers: Traveller[];
  /** A configuration of how to group travellers in offers. */
  groupConfig?: GroupConfig;
}

/**
 * CategorySpec
 * Determines what fields should be used to categorize the offers
 * @example null
 */
export interface CategorySpec {
  /** @example null */
  facilitySet?: AccommodationFacilityForRecommendationsEnum[];
  /** @example null */
  typesOfRecommendation: TypeOfRecommendationEnum[];
  /** @example null */
  fareClasses?: FareClassEnum[];
  /** @example null */
  durationTypes?: DurationEnum[];
}

/**
 * A sale discount right that has been applied to the fare product.
 * @example null
 */
export interface DiscountRight {
  /**
   * The id of the entitlement product that allowed the sale discount right to be used. Only used if the fare product configuration contains a sale discount right, and the traveller had an entitlement product.
   * @example "ENT:EntitlementProduct:V1F1"
   */
  originatingFromProductId?: string;
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * Used for selecting a unique element in the configurations
   * @example "hlfmHy"
   */
  selectableId: string;
  /**
   * The description of the object.
   * @example null
   */
  description: TextInLanguage[];
  /** A request used to search for fare products for a specified trip. */
  organisation: OrganisationConfig;
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "SJN:SaleDiscountRight:Premium"
   */
  id: string;
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
   * The version of the object
   * @example "SJN:Version:SDR-Premium-1"
   */
  version: string;
  /** Reference to different UsageParameters. */
  parameters?: DiscountUsageParameters;
}

/**
 * Container object for other properties.
 * @example null
 */
export interface Properties {
  /**
   * Accommodation. Enum as string with the following values: SLEEPER, SEATING, DOUBLE_SLEEPER, SINGLE_SLEEPER, SPECIAL_SLEEPER, COUCHETTE, SINGLE_COUCHETTE, DOUBLE_COUCHETTE, RECLINING_SEAT, BABY_COMPARTMENT, FAMILY_COMPARTMENT, PANORAMA_COACH, PULLMAN_COACH, STANDING, ANY_FACILITY_SET
   * @example null
   */
  accommodations: AccommodationFacilityEnum[];
  /**
   * FareClasses. Enum as string with the following values: FIRST_CLASS, SECOND_CLASS, THIRD_CLASS, ECONOMY_CLASS, BUSINESS_CLASS, TURISTA, PREFERENTE, STANDARD_CLASS, PREMIUM_CLASS, ANY, UNKNOWN
   * @example null
   */
  fareClasses: FareClassEnum[];
}

/**
 * PreassignedProduct
 * Representation of a mandatory product that is included in an offer
 * @example null
 */
export interface PreassignedProduct {
  /** Summary of a sale discount right that has been applied to the fare product. */
  discountRight?: DiscountRightSummary;
  /** @example "Standard refunderbar" */
  name: string;
  /** @example "Standard refunderbar" */
  description: string;
  /** Describes the geographical validity of a product */
  geographicalValidity: GeographicalValidity;
  /** @example "SJN:PreassignedFareProduct:StandardFullFlex" */
  id: string;
  /** @example "SJN:Version:V1" */
  version: string;
  /** Summary of properties for a product */
  properties: PropertiesSummary;
}

/**
 * CappingSpecification
 * Contains information to look up transaction history for a traveller and what CappedDiscountRight-program he or she is a part of.
 * @example null
 */
export interface CappingSpecification {
  /** Contains enough information about a customer to look up transaction history. */
  customerRef: CustomerRef;
  /**
   * Specify a minimum alternative duration oo avoid alternatives that doesn't last long enough in the future to be useful.
   * @format duration
   * @example null
   */
  minimumAlternativeDuration?: string;
  /**
   * Reference to the fare contract for this traveller.
   * @example null
   */
  fareContractId: string;
  /**
   * To avoid too many similar alternatives you can specify a minimum period between the start date of each alternative.
   * @format duration
   * @example null
   */
  minimumDurationBetweenAlternatives?: string;
  /**
   * Reference to a CappedDiscountRight.
   * @example null
   */
  cappedDiscountRightId: string;
}

/**
 * A specification of which travellers can use an offer, along with limitations on the number of travellers that must be selected from the group for the OFFER to be valid.
 * @example null
 */
export interface TravellerMapping {
  /**
   * The maximum number of travellers that can be selected from the group.
   * @format int32
   * @example null
   */
  maxNumberOfTravellers: number;
  /**
   * The ids of the travellers.
   * @example null
   */
  travellerIds: string[];
  /**
   * The minimum number of travellers that can be selected from the group.
   * @format int32
   * @example null
   */
  minNumberOfTravellers: number;
  /**
   * If there are a through fare with two operators more user profiles are needed, this list represents these
   * @example null
   */
  userProfileIds: string[];
  /**
   * Version to the user profile associated with this offer.
   * @example null
   */
  userProfileVersion: string;
  /**
   * Reference to the user profile associated with this offer.
   * @example "FLB:UserProfile:Adult"
   */
  userProfileId: string;
  /**
   * If the request uses traveller groups to specify the travellers this field holds the id of the group that the travellers belongs to.
   * @example null
   */
  travellerGroupId?: string;
}

/**
 * A reference to a user profile and price data.
 * @example null
 */
export interface PricedUserProfile {
  /**
   * The name of the object.
   * @example null
   */
  name: TextInLanguage[];
  /**
   * Used for selecting a unique element in the configurations
   * @example "GtSlJQ"
   */
  selectableId: string;
  /**
   * True if this configuration is optional to buy, false if it's required.
   * @example null
   */
  optional: boolean;
  /**
   * The ID of the object on the format < context : type : instance name >
   * @example "ENT:UserProfile:Anyone"
   */
  id: string;
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
   * The version of the object
   * @example "ENT:Version:V1"
   */
  version: string;
  /** @example null */
  typeOfConcession?: string;
}

/**
 * UsageEndEnum
 * @example null
 */
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
 * JourneySpec
 * Collection of attributes that characterize a journey.
 * @example null
 */
export interface JourneySpec {
  /** The mode of transport or access (e.g., foot) used when traversing this leg. */
  mode?: TransportModeEnum;
  /**
   * NeTEx-id of line
   * @example "GJB:Line:R30"
   */
  line?: string;
  /**
   * NeTEx-id of authority.
   * @example "ENT:Authority:ENT"
   */
  authority?: string;
  /** The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride */
  transportSubmode?: TransportSubModeEnum;
  /**
   * @format date-time
   * @example "2020-05-13T07:19:30.389Z"
   */
  startTime?: string;
  /**
   * @format date-time
   * @example "2020-05-13T09:19:30.389Z"
   */
  endTime?: string;
  /** @example null */
  placesInJourney?: PlaceInJourneySpec[];
  /**
   * NeTEx-id of Operator.
   * @example "RUT:Operator:210"
   */
  operator?: string;
}

/**
 * List of legs constituting a suggested sequence of rides and links for a specific trip.
 * @example null
 */
export interface TripPattern {
  /**
   * Legs constituting a suggested sequence of rides and links for this trip
   * @example null
   */
  legs?: Leg[];
  /**
   * ID of the trip pattern
   * @example "5e7cbc83e58e6a00011cecc3"
   */
  id?: string;
}

/**
 * Part of a trip pattern. Either a ride on a public transport vehicle or access or path link to/from/between places
 * @example null
 */
export interface Leg {
  /** Used to specify that the vehicle used on this leg is the same that will be used on the next leg */
  interchangeTo?: InterchangeTo;
  /** A list of coordinates encoded as a polyline string (see https://code.google.com/apis/maps/documentation/polylinealgorithm.html) */
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
   * @example "2020-05-13T09:19:30.389Z"
   */
  aimedEndTime: string;
  /** The transport sub mode (e.g., localBus or expressBus) used when traversing this leg. Null if leg is not a ride */
  transportSubmode?: TransportSubModeEnum;
  serviceJourney?: ServiceJourney;
  /** EstimatedCall for the quay. */
  toEstimatedCall?: EstimatedCall;
  /**
   * Whether this leg is a ride leg or not.
   * @example null
   */
  ride: boolean;
  /** Organisation providing public transport services. */
  operator?: Operator;
  /** The mode of transport or access (e.g., foot) used when traversing this leg. */
  mode: TransportModeEnum;
  /**
   * The aimed date and time this leg starts.
   * @format date-time
   * @example "2020-05-13T07:19:30.389Z"
   */
  aimedStartTime: string;
  /**
   * The expected date and time this leg starts.
   * @format date-time
   * @example "2020-05-13T07:19:30.389Z"
   */
  expectedStartTime?: string;
  /** Authority involved in public transportation. An organisation under which the responsibility of organising the transport service in a certain area is placed. */
  authority?: Authority;
  /**
   * For ride legs, intermediate quays between the Place where the leg originates and the Place where the leg ends. For non-ride legs, null.
   * @example null
   */
  intermediateQuays: Quay[];
  /** A planned vehicle journey with passengers. */
  datedServiceJourney?: DatedServiceJourney;
  /**
   * The expected date and time this leg ends.
   * @format date-time
   * @example "2020-05-13T09:19:30.389Z"
   */
  expectedEndTime?: string;
  /** Super type for all places (stop places, quays, car parks, bike parks and bike rental stations) */
  toPlace: Place;
}

/**
 * Usage validity period type
 * @example null
 */
export interface UsageValidityPeriod {
  /**
   * Standard duration. Represented as a string formatted according to ISO-8601
   * @format duration
   * @example "PT1H"
   */
  standardDuration?: string;
  /**
   * StartDateTime
   * @format date-time
   * @example "2020-05-13T07:19:30.389Z"
   */
  startDateTime?: string;
  usageStartConstraintType?: UsageStartConstraintTypeEnum;
  /**
   * UsageValidityPeriod id
   * @example null
   */
  id: string;
  usageTrigger?: UsageTriggerEnum;
  /**
   * EndDate
   * @format date-time
   * @example "2020-05-13T07:19:30.389Z"
   */
  endDateTime?: string;
  usageEnd?: UsageEndEnum;
  /**
   * UsageValidityPeriod version
   * @example null
   */
  version: string;
  /**
   * Activation Means. Describes how a product can be activated.
   * @example null
   */
  activationMeans?: ActivationMeansEnum[];
  usageValidityType?: UsageValidityTypeEnum;
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
 * A list of coordinates encoded as a polyline string (see https://code.google.com/apis/maps/documentation/polylinealgorithm.html)
 * @example null
 */
export interface PointsOnLink {
  /**
   * The encoded points of the polyline.
   * @example "uhf_Jg~ahAu~oBye~@w~Ln~CqfkBtpaAelg@dejB"
   */
  points: string;
}

/**
 * OfferToBuy
 * Describes which offer to buy and how many of this offer to buy to satisfy a recommendation
 * @example null
 */
export interface OfferToBuy {
  /**
   * List of selectableIds of supplement products which upgrades a product
   * @example null
   */
  selectableProductIds: string[];
  /**
   * One possible grouping of travellers for the number of offers to buy
   * @example null
   */
  possibleTravellerIds: string[][];
  /**
   * Id of the offer to buy
   * @example "00faf83-56c3-4f4e-8be9-e793c255a77b"
   */
  id: string;
  /**
   * Number of this offer to buy
   * @example 2
   */
  numberToBuy: number;
}

/**
 * Basis on which pricing is done - per whole group
 * or per member.
 * @example "PER_OFFER"
 */
export enum PricingBasisEnum {
  PER_OFFER = "PER_OFFER",
  PER_PERSON = "PER_PERSON",
}
