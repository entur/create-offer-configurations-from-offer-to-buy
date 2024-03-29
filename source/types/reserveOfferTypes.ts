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
 * AddSupplementProductsConfiguration
 * The configuration-holder for an offer configuration
 */
export interface AddSupplementProductsConfiguration {
  /**
   * Customers with optional entitlement data; used to link travellers to order line and when offers are created with entitlements
   * @default []
   */
  customers?: Customer[];
  /**
   * The id of the offer that is used
   * @format uuid
   */
  offerId: string;
  /** The id of the order line to add supplement products to */
  orderLineId: string;
  /**
   * A list of ids and counts for selected supplement product configurations. Count is only considered for fare products.
   * @default []
   */
  selectedProductsConfiguration: SelectedProductConfiguration[];
}

/**
 * AddSupplementProductsRequest
 * The holder for an add supplement product configuration.
 */
export interface AddSupplementProductsRequest {
  /** A list of supplement product configurations selected for purchase */
  offerConfigurations: AddSupplementProductsConfiguration[];
  /** The offer to add the supplement products to */
  orderId: string;
}

/** ApiError */
export interface ApiError {
  /** @format date-time */
  timestamp: string;
  /** @format int32 */
  status: number;
  error: string;
  exception: string;
  message: string;
  path: string;
}

/**
 * ChangeOrderLinesConfiguration
 * The configuration-holder for an offer configuration
 */
export interface ChangeOrderLinesConfiguration {
  /**
   * Customers with optional entitlement data; used to link travellers to order line and when offers are created with entitlements
   * @default []
   */
  customers?: Customer[];
  /** Wrapper for references connected to distribution of travel rights and/or tickets */
  distributionDetails?: DistributionDetails;
  /** External reference to an order line. Only used by external operators to identify order lines created by OfferConfigurations */
  externalReference?: string;
  /**
   * The id of the offer that is used
   * @format uuid
   */
  offerId: string;
  /** The id of the OrderLine to replace. Multiple offer configurations may contain the same orderLineId if replacing the OrderLine with multiple offer configurations. In that case, selectedOrderLineIds must also be equal. */
  orderLineId: string;
  /**
   * A list of ids for selected products. Duplicates are only supported for SupplementProducts which does not modify seating assignments for the PreassignedFareProduct
   * @default []
   */
  selectableProductIds?: string[];
  /**
   * This field is used to specify which travellers will be included in the use of this offer. It is validated against the travellers identified in the travellerMappings property of the selected Offer, as well as the legal number of UserProfiles per compartment when reserving a group product. When reserving a group product, validation is performed against the valid number of UserProfiles per compartment. When reserving regular products, a number of order lines will be made, corresponding to the number of selectedTravellerIds. Each order line will have one of the selectedTravellerIds.
   * @default []
   */
  selectedTravellerIds?: string[];
  /** @default [] */
  selectedOrderLineIds?: string[];
}

/**
 * ChangeOrderLinesRequest
 * The holder for a change offer configuration.
 */
export interface ChangeOrderLinesRequest {
  /** The offer to add the offers to */
  orderId: string;
  /** A list of change offer configurations selected for purchase */
  offerConfigurations: ChangeOrderLinesConfiguration[];
}

/**
 * Customer
 * A holder for a customer and entitlements used by the customer for the offer
 */
export interface Customer {
  /** Customer id that will be linked to the order line created from the offer specified */
  customerId: string;
  /**
   * The entitlement data for a customer; used if the the offer is created with entitlements
   * @default []
   */
  entitlements: CustomerEntitlement[];
}

/**
 * CustomerEntitlement
 * A holder for a customers entitlements
 */
export interface CustomerEntitlement {
  /**
   * The id of a benefit-contract that gives a customer an entitlement
   * @format uuid
   */
  contractId?: string;
  /** A holder for an id and version combination */
  entitlementProductRef: IdAndVersionRef;
  /** A holder for an id and version combination */
  externalEntitlementRef?: IdAndVersionRef;
}

/**
 * DistributionDetails
 * Wrapper for references connected to distribution of travel rights and/or tickets
 */
export interface DistributionDetails {
  /** Versioned Reference to an external resource */
  fulfillmentMethodRef?: RefType;
  /** Versioned Reference to an external resource */
  typeOfTravelDocumentToIssueRef?: RefType;
  /** Versioned Reference to an external resource */
  customerAccountRef?: RefType;
}

/**
 * IdAndVersionRef
 * A holder for an id and version combination
 */
export interface IdAndVersionRef {
  /** Id reference to an external entity */
  id: string;
  /** Optional version reference to an external entity */
  version?: string;
}

/**
 * OfferConfiguration
 * The configuration-holder for an offer configuration
 */
export interface OfferConfiguration {
  /**
   * Deprecated: Please use either selectedTravellerIds or multiple offer configurations, depending on your use case. Old description: The number of instances of the salespackage(s), represented in the offer, and customer combination one would like to purchase. Default value = 1. If set to anything other than 1 when orderLineId is set, the endpoint will return 400 bad request.
   * @deprecated
   * @format int32
   * @default 1
   */
  count?: number;
  /**
   * A holder for a customers entitlements
   * @deprecated
   */
  customerEntitlement?: CustomerEntitlement;
  /**
   * Deprecated: Use customers to supply customer ids
   * @deprecated
   * @default []
   */
  customerIds?: string[];
  /**
   * Customers with optional entitlement data; used to link travellers to order line and when offers are created with entitlements
   * @default []
   */
  customers?: Customer[];
  /** Wrapper for references connected to distribution of travel rights and/or tickets */
  distributionDetails?: DistributionDetails;
  /** External reference to an order line. Only used by external operators to identify order lines created by OfferConfigurations */
  externalReference?: string;
  /**
   * The id of the offer that is used
   * @format uuid
   */
  offerId: string;
  /**
   * Please use /change-order-line instead. If replacing an order line, this is the id of the order line to replace
   * @deprecated
   */
  orderLineId?: string;
  /**
   * A list of ids for selected products. Duplicates are only supported for SupplementProducts which does not modify seating assignments for the PreassignedFareProduct
   * @default []
   */
  selectableProductIds?: string[];
  /**
   * This field is used to specify which travellers will be included in the use of this offer. This field cannot be used in combination with count. It is validated against the travellers identified in the travellerMappings property of the selected Offer, as well as the legal number of UserProfiles per compartment when reserving a group product. When reserving a group product, validation is performed against the valid number of UserProfiles per compartment. When reserving regular products, a number of order lines will be made, corresponding to the number of selectedTravellerIds. Each order line will have one of the selectedTravellerIds.
   * @default []
   */
  selectedTravellerIds?: string[];
}

/** OrderLineIdsAndReservationIds */
export interface OrderLineIdsAndReservationIds {
  orderId: string;
  orderLineIds: string[];
  reservationIds: string[];
  /** @default [] */
  replacedByOrderLineIds: ReplacedOrderLineIds[];
}

/** Versioned Reference to an external resource */
export interface RefType {
  /**
   * The identifier to distinguish the product
   * @example "ENT:ThirdPartyProduct:MyProduct"
   */
  id: string;
  /**
   * Version for the id
   * @example "ENT:Version:MyProduct-1"
   */
  version?: string;
}

/** ReplacedOrderLineIds */
export interface ReplacedOrderLineIds {
  originalOrderLineIds: string[];
  replacedByOrderLineIds: string[];
}

/**
 * ReserveOffersRequest
 * The input-holder for reserving offers and add them to an existing order.
 */
export interface ReserveOffersRequest {
  /** A list of offer configurations selected for purchase */
  offerConfigurations: OfferConfiguration[];
  /** The offer to add the order to. If no orderId is specified, a new order is created */
  orderId?: string;
}

/**
 * SelectedProductConfiguration
 * Configuration for a selectable product from an offer
 */
export interface SelectedProductConfiguration {
  /** A selectable product id. */
  selectedProductId: string;
  /**
   * The number of times to add said product. Count will only be considered on a fare product level. Default 1
   * @format int32
   * @default 1
   */
  count: number;
}
