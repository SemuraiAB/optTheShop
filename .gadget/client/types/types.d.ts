import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {
}
export declare enum GadgetFieldType {
    Any = 0,
    Array = 1,
    BelongsTo = 2,
    Boolean = 3,
    Code = 4,
    Color = 5,
    Computed = 6,
    DateTime = 7,
    Email = 8,
    EncryptedString = 9,
    Enum = 10,
    File = 11,
    HasMany = 12,
    HasManyThrough = 13,
    HasOne = 14,
    ID = 15,
    JSON = 16,
    Money = 17,
    Null = 18,
    Number = 19,
    Object = 20,
    Password = 21,
    RecordState = 22,
    RichText = 23,
    RoleAssignments = 24,
    String = 25,
    URL = 26,
    Vector = 27
}
/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";
/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending" | "Descending";
/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";
/** Represents the possible values of the Type enum. */
export type ShopifyFileTypeEnum = "GenericFile" | "MediaImage" | "Video" | string;
/** Represents the possible values of the File Status enum. */
export type ShopifyFileFileStatusEnum = "FAILED" | "PROCESSING" | "READY" | "UPLOADED" | string;
/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];
/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];
/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];
/** Represents one shopifyProductImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductImageRecord = Scalars["JSONObject"];
/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];
/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];
/** Represents one shopifyFile result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFileRecord = Scalars["JSONObject"];
/** The `Upload` scalar type represents a file upload. */
export type Upload = any;
export type ShopifyGdprRequestSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
    payload?: SortOrder | null;
    /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
    topic?: SortOrder | null;
};
export type ShopifyGdprRequestFilter = {
    AND?: (ShopifyGdprRequestFilter | null)[];
    OR?: (ShopifyGdprRequestFilter | null)[];
    NOT?: (ShopifyGdprRequestFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    payload?: JSONFilter | null;
    topic?: SingleEnumFilter | null;
    shop?: IDFilter | null;
    shopId?: IDFilter | null;
};
export type IDFilter = {
    equals?: (Scalars['GadgetID'] | null) | null;
    notEquals?: (Scalars['GadgetID'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['GadgetID'] | null) | null)[];
    notIn?: ((Scalars['GadgetID'] | null) | null)[];
    lessThan?: (Scalars['GadgetID'] | null) | null;
    lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;
    greaterThan?: (Scalars['GadgetID'] | null) | null;
    greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};
export type DateTimeFilter = {
    equals?: Date | Scalars['ISO8601DateString'] | null;
    notEquals?: Date | Scalars['ISO8601DateString'] | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: (Date | Scalars['ISO8601DateString'] | null)[];
    notIn?: (Date | Scalars['ISO8601DateString'] | null)[];
    lessThan?: Date | Scalars['ISO8601DateString'] | null;
    lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    greaterThan?: Date | Scalars['ISO8601DateString'] | null;
    greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    before?: Date | Scalars['ISO8601DateString'] | null;
    after?: Date | Scalars['ISO8601DateString'] | null;
};
export type JSONFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['JSON'] | null) | null;
    in?: ((Scalars['JSON'] | null) | null)[];
    notIn?: ((Scalars['JSON'] | null) | null)[];
    notEquals?: (Scalars['JSON'] | null) | null;
    matches?: (Scalars['JSON'] | null) | null;
};
export type SingleEnumFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
};
export type ShopifySyncSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: SortOrder | null;
    /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
    domain?: SortOrder | null;
    /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
    errorMessage?: SortOrder | null;
    /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
    errorDetails?: SortOrder | null;
    /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
    syncSince?: SortOrder | null;
    /** Sort the results by the force field. Defaults to ascending (smallest value first). */
    force?: SortOrder | null;
    /** Sort the results by the models field. Defaults to ascending (smallest value first). */
    models?: SortOrder | null;
};
export type ShopifySyncFilter = {
    AND?: (ShopifySyncFilter | null)[];
    OR?: (ShopifySyncFilter | null)[];
    NOT?: (ShopifySyncFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    state?: StateFilter | null;
    domain?: StringFilter | null;
    errorMessage?: StringFilter | null;
    errorDetails?: StringFilter | null;
    syncSince?: DateTimeFilter | null;
    force?: BooleanFilter | null;
    models?: JSONFilter | null;
    shop?: IDFilter | null;
    shopId?: IDFilter | null;
};
export type StateFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    inState?: (Scalars['String'] | null) | null;
};
export type StringFilter = {
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
    notIn?: ((Scalars['String'] | null) | null)[];
    lessThan?: (Scalars['String'] | null) | null;
    lessThanOrEqual?: (Scalars['String'] | null) | null;
    greaterThan?: (Scalars['String'] | null) | null;
    greaterThanOrEqual?: (Scalars['String'] | null) | null;
    startsWith?: (Scalars['String'] | null) | null;
};
export type BooleanFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['Boolean'] | null) | null;
    notEquals?: (Scalars['Boolean'] | null) | null;
};
export type ShopifyProductImageSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
    alt?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the height field. Defaults to ascending (smallest value first). */
    height?: SortOrder | null;
    /** Sort the results by the position field. Defaults to ascending (smallest value first). */
    position?: SortOrder | null;
    /** Sort the results by the source field. Defaults to ascending (smallest value first). */
    source?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the width field. Defaults to ascending (smallest value first). */
    width?: SortOrder | null;
};
export type ShopifyProductImageFilter = {
    AND?: (ShopifyProductImageFilter | null)[];
    OR?: (ShopifyProductImageFilter | null)[];
    NOT?: (ShopifyProductImageFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    alt?: StringFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    height?: FloatFilter | null;
    position?: FloatFilter | null;
    source?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    width?: FloatFilter | null;
    product?: IDFilter | null;
    productId?: IDFilter | null;
    shop?: IDFilter | null;
    shopId?: IDFilter | null;
};
export type FloatFilter = {
    equals?: (Scalars['Float'] | null) | null;
    notEquals?: (Scalars['Float'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['Float'] | null) | null)[];
    notIn?: ((Scalars['Float'] | null) | null)[];
    lessThan?: (Scalars['Float'] | null) | null;
    lessThanOrEqual?: (Scalars['Float'] | null) | null;
    greaterThan?: (Scalars['Float'] | null) | null;
    greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};
export type ShopifyProductSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
    compareAtPriceRange?: SortOrder | null;
    /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
    productCategory?: SortOrder | null;
    /** Sort the results by the body field. Defaults to ascending (smallest value first). */
    body?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
    handle?: SortOrder | null;
    /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
    productType?: SortOrder | null;
    /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
    publishedAt?: SortOrder | null;
    /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
    publishedScope?: SortOrder | null;
    /** Sort the results by the status field. Defaults to ascending (smallest value first). */
    status?: SortOrder | null;
    /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
    tags?: SortOrder | null;
    /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
    templateSuffix?: SortOrder | null;
    /** Sort the results by the title field. Defaults to ascending (smallest value first). */
    title?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
    vendor?: SortOrder | null;
};
export type ShopifyProductFilter = {
    AND?: (ShopifyProductFilter | null)[];
    OR?: (ShopifyProductFilter | null)[];
    NOT?: (ShopifyProductFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    compareAtPriceRange?: JSONFilter | null;
    productCategory?: JSONFilter | null;
    body?: StringFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    handle?: StringFilter | null;
    productType?: StringFilter | null;
    publishedAt?: DateTimeFilter | null;
    publishedScope?: StringFilter | null;
    status?: SingleEnumFilter | null;
    tags?: JSONFilter | null;
    templateSuffix?: StringFilter | null;
    title?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    vendor?: StringFilter | null;
    shop?: IDFilter | null;
    shopId?: IDFilter | null;
};
export type ShopifyFileSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the type field. Defaults to ascending (smallest value first). */
    type?: SortOrder | null;
    /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
    alt?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the duration field. Defaults to ascending (smallest value first). */
    duration?: SortOrder | null;
    /** Sort the results by the fileErrors field. Defaults to ascending (smallest value first). */
    fileErrors?: SortOrder | null;
    /** Sort the results by the fileStatus field. Defaults to ascending (smallest value first). */
    fileStatus?: SortOrder | null;
    /** Sort the results by the image field. Defaults to ascending (smallest value first). */
    image?: SortOrder | null;
    /** Sort the results by the originalFileSize field. Defaults to ascending (smallest value first). */
    originalFileSize?: SortOrder | null;
    /** Sort the results by the originalSource field. Defaults to ascending (smallest value first). */
    originalSource?: SortOrder | null;
    /** Sort the results by the preview field. Defaults to ascending (smallest value first). */
    preview?: SortOrder | null;
    /** Sort the results by the sources field. Defaults to ascending (smallest value first). */
    sources?: SortOrder | null;
    /** Sort the results by the url field. Defaults to ascending (smallest value first). */
    url?: SortOrder | null;
};
export type ShopifyFileFilter = {
    AND?: (ShopifyFileFilter | null)[];
    OR?: (ShopifyFileFilter | null)[];
    NOT?: (ShopifyFileFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    type?: SingleEnumFilter | null;
    alt?: StringFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    duration?: IntFilter | null;
    fileErrors?: JSONFilter | null;
    fileStatus?: SingleEnumFilter | null;
    image?: JSONFilter | null;
    originalFileSize?: IntFilter | null;
    originalSource?: JSONFilter | null;
    preview?: JSONFilter | null;
    sources?: JSONFilter | null;
    url?: StringFilter | null;
    shop?: IDFilter | null;
    shopId?: IDFilter | null;
};
export type IntFilter = {
    equals?: (Scalars['Int'] | null) | null;
    notEquals?: (Scalars['Int'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['Int'] | null) | null)[];
    notIn?: ((Scalars['Int'] | null) | null)[];
    lessThan?: (Scalars['Int'] | null) | null;
    lessThanOrEqual?: (Scalars['Int'] | null) | null;
    greaterThan?: (Scalars['Int'] | null) | null;
    greaterThanOrEqual?: (Scalars['Int'] | null) | null;
};
export type ShopifyShopSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: SortOrder | null;
    /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
    customerAccountsV2?: SortOrder | null;
    /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
    address1?: SortOrder | null;
    /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
    address2?: SortOrder | null;
    /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
    checkoutApiSupported?: SortOrder | null;
    /** Sort the results by the city field. Defaults to ascending (smallest value first). */
    city?: SortOrder | null;
    /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
    cookieConsentLevel?: SortOrder | null;
    /** Sort the results by the country field. Defaults to ascending (smallest value first). */
    country?: SortOrder | null;
    /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
    countryCode?: SortOrder | null;
    /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
    countryName?: SortOrder | null;
    /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
    countyTaxes?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
    currency?: SortOrder | null;
    /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
    customerEmail?: SortOrder | null;
    /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
    disabledWebhooks?: SortOrder | null;
    /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
    domain?: SortOrder | null;
    /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
    eligibleForCardReaderGiveaway?: SortOrder | null;
    /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
    eligibleForPayments?: SortOrder | null;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: SortOrder | null;
    /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
    enabledPresentmentCurrencies?: SortOrder | null;
    /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
    finances?: SortOrder | null;
    /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
    forceSsl?: SortOrder | null;
    /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
    googleAppsDomain?: SortOrder | null;
    /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
    googleAppsLoginEnabled?: SortOrder | null;
    /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
    grantedScopes?: SortOrder | null;
    /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
    hasDiscounts?: SortOrder | null;
    /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
    hasGiftCards?: SortOrder | null;
    /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
    hasStorefront?: SortOrder | null;
    /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
    ianaTimezone?: SortOrder | null;
    /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
    installedViaApiKey?: SortOrder | null;
    /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
    latitude?: SortOrder | null;
    /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
    longitude?: SortOrder | null;
    /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
    marketingSmsContentEnabledAtCheckout?: SortOrder | null;
    /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
    moneyFormat?: SortOrder | null;
    /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
    moneyInEmailsFormat?: SortOrder | null;
    /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
    moneyWithCurrencyFormat?: SortOrder | null;
    /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
    moneyWithCurrencyInEmailsFormat?: SortOrder | null;
    /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
    multiLocationEnabled?: SortOrder | null;
    /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
    myshopifyDomain?: SortOrder | null;
    /** Sort the results by the name field. Defaults to ascending (smallest value first). */
    name?: SortOrder | null;
    /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
    passwordEnabled?: SortOrder | null;
    /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
    phone?: SortOrder | null;
    /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
    planDisplayName?: SortOrder | null;
    /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
    planName?: SortOrder | null;
    /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
    preLaunchEnabled?: SortOrder | null;
    /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
    primaryLocale?: SortOrder | null;
    /** Sort the results by the province field. Defaults to ascending (smallest value first). */
    province?: SortOrder | null;
    /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
    provinceCode?: SortOrder | null;
    /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
    registeredWebhooks?: SortOrder | null;
    /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
    requiresExtraPaymentsAgreement?: SortOrder | null;
    /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
    setupRequired?: SortOrder | null;
    /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
    shopOwner?: SortOrder | null;
    /** Sort the results by the source field. Defaults to ascending (smallest value first). */
    source?: SortOrder | null;
    /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
    taxShipping?: SortOrder | null;
    /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
    taxesIncluded?: SortOrder | null;
    /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
    timezone?: SortOrder | null;
    /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
    transactionalSmsDisabled?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
    weightUnit?: SortOrder | null;
    /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
    zipCode?: SortOrder | null;
};
export type ShopifyShopFilter = {
    AND?: (ShopifyShopFilter | null)[];
    OR?: (ShopifyShopFilter | null)[];
    NOT?: (ShopifyShopFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    state?: StateFilter | null;
    customerAccountsV2?: JSONFilter | null;
    address1?: StringFilter | null;
    address2?: StringFilter | null;
    checkoutApiSupported?: BooleanFilter | null;
    city?: StringFilter | null;
    cookieConsentLevel?: StringFilter | null;
    country?: StringFilter | null;
    countryCode?: StringFilter | null;
    countryName?: StringFilter | null;
    countyTaxes?: JSONFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    currency?: StringFilter | null;
    customerEmail?: StringFilter | null;
    disabledWebhooks?: JSONFilter | null;
    domain?: StringFilter | null;
    eligibleForCardReaderGiveaway?: BooleanFilter | null;
    eligibleForPayments?: BooleanFilter | null;
    email?: StringFilter | null;
    enabledPresentmentCurrencies?: JSONFilter | null;
    finances?: BooleanFilter | null;
    forceSsl?: BooleanFilter | null;
    googleAppsDomain?: StringFilter | null;
    googleAppsLoginEnabled?: BooleanFilter | null;
    grantedScopes?: JSONFilter | null;
    hasDiscounts?: BooleanFilter | null;
    hasGiftCards?: BooleanFilter | null;
    hasStorefront?: BooleanFilter | null;
    ianaTimezone?: StringFilter | null;
    installedViaApiKey?: StringFilter | null;
    latitude?: FloatFilter | null;
    longitude?: FloatFilter | null;
    marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;
    moneyFormat?: StringFilter | null;
    moneyInEmailsFormat?: StringFilter | null;
    moneyWithCurrencyFormat?: StringFilter | null;
    moneyWithCurrencyInEmailsFormat?: StringFilter | null;
    multiLocationEnabled?: BooleanFilter | null;
    myshopifyDomain?: StringFilter | null;
    name?: StringFilter | null;
    passwordEnabled?: BooleanFilter | null;
    phone?: StringFilter | null;
    planDisplayName?: StringFilter | null;
    planName?: StringFilter | null;
    preLaunchEnabled?: BooleanFilter | null;
    primaryLocale?: StringFilter | null;
    province?: StringFilter | null;
    provinceCode?: StringFilter | null;
    registeredWebhooks?: JSONFilter | null;
    requiresExtraPaymentsAgreement?: BooleanFilter | null;
    setupRequired?: BooleanFilter | null;
    shopOwner?: StringFilter | null;
    source?: StringFilter | null;
    taxShipping?: BooleanFilter | null;
    taxesIncluded?: BooleanFilter | null;
    timezone?: StringFilter | null;
    transactionalSmsDisabled?: BooleanFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    weightUnit?: StringFilter | null;
    zipCode?: StringFilter | null;
};
export type CreateShopifyProductInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    images?: (ShopifyProductImageHasManyInput | null)[];
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyProductImageHasManyInput = {
    create?: NestedShopifyProductImageCreateInput | null;
    update?: NestedShopifyProductImageUpdateInput | null;
    hostOnShopify?: NestedShopifyProductImageHostOnShopifyInput | null;
    updateShopifyImage?: NestedShopifyProductImageUpdateShopifyImageInput | null;
    /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
    _converge?: ConvergeShopifyProductImageInput | null;
};
export type NestedShopifyProductImageCreateInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyProductBelongsToInput = {
    create?: NestedShopifyProductCreateInput | null;
    update?: NestedShopifyProductUpdateInput | null;
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type NestedShopifyProductCreateInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    images?: (ShopifyProductImageHasManyInput | null)[];
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyShopBelongsToInput = {
    update?: NestedShopifyShopUpdateInput | null;
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type NestedShopifyShopUpdateInput = {
    id: (Scalars['GadgetID'] | null);
    syncs?: (ShopifySyncHasManyInput | null)[];
    customerAccountsV2?: (Scalars['JSON'] | null) | null;
    address1?: (Scalars['String'] | null) | null;
    address2?: (Scalars['String'] | null) | null;
    checkoutApiSupported?: (Scalars['Boolean'] | null) | null;
    city?: (Scalars['String'] | null) | null;
    cookieConsentLevel?: (Scalars['String'] | null) | null;
    country?: (Scalars['String'] | null) | null;
    countryCode?: (Scalars['String'] | null) | null;
    countryName?: (Scalars['String'] | null) | null;
    countyTaxes?: (Scalars['JSON'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    currency?: (Scalars['String'] | null) | null;
    customerEmail?: (Scalars['String'] | null) | null;
    domain?: (Scalars['String'] | null) | null;
    eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;
    eligibleForPayments?: (Scalars['Boolean'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;
    finances?: (Scalars['Boolean'] | null) | null;
    forceSsl?: (Scalars['Boolean'] | null) | null;
    googleAppsDomain?: (Scalars['String'] | null) | null;
    googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;
    hasDiscounts?: (Scalars['Boolean'] | null) | null;
    hasGiftCards?: (Scalars['Boolean'] | null) | null;
    hasStorefront?: (Scalars['Boolean'] | null) | null;
    ianaTimezone?: (Scalars['String'] | null) | null;
    products?: (ShopifyProductHasManyInput | null)[];
    latitude?: (Scalars['Float'] | null) | null;
    longitude?: (Scalars['Float'] | null) | null;
    marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;
    moneyFormat?: (Scalars['String'] | null) | null;
    moneyInEmailsFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;
    multiLocationEnabled?: (Scalars['Boolean'] | null) | null;
    myshopifyDomain?: (Scalars['String'] | null) | null;
    name?: (Scalars['String'] | null) | null;
    passwordEnabled?: (Scalars['Boolean'] | null) | null;
    phone?: (Scalars['String'] | null) | null;
    planDisplayName?: (Scalars['String'] | null) | null;
    planName?: (Scalars['String'] | null) | null;
    preLaunchEnabled?: (Scalars['Boolean'] | null) | null;
    primaryLocale?: (Scalars['String'] | null) | null;
    province?: (Scalars['String'] | null) | null;
    provinceCode?: (Scalars['String'] | null) | null;
    requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;
    setupRequired?: (Scalars['Boolean'] | null) | null;
    shopOwner?: (Scalars['String'] | null) | null;
    productImages?: (ShopifyProductImageHasManyInput | null)[];
    source?: (Scalars['String'] | null) | null;
    taxShipping?: (Scalars['Boolean'] | null) | null;
    taxesIncluded?: (Scalars['Boolean'] | null) | null;
    timezone?: (Scalars['String'] | null) | null;
    transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    weightUnit?: (Scalars['String'] | null) | null;
    zipCode?: (Scalars['String'] | null) | null;
    files?: (ShopifyFileHasManyInput | null)[];
};
export type ShopifySyncHasManyInput = {
    run?: NestedShopifySyncRunInput | null;
    complete?: NestedShopifySyncCompleteInput | null;
    error?: NestedShopifySyncErrorInput | null;
    abort?: NestedShopifySyncAbortInput | null;
    /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
    _converge?: ConvergeShopifySyncInput | null;
};
export type NestedShopifySyncRunInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    startReason?: (Scalars['String'] | null) | null;
};
export type NestedShopifySyncCompleteInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type NestedShopifySyncErrorInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type NestedShopifySyncAbortInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type ConvergeShopifySyncInput = {
    /** The new list of records to converge to */
    values: (ConvergeShopifySyncValues | null)[];
    /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
    actions?: ConvergeActionMap | null;
};
export type ConvergeShopifySyncValues = {
    id?: (Scalars['GadgetID'] | null) | null;
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ConvergeActionMap = {
    /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
    create?: (Scalars['String'] | null) | null;
    /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
    update?: (Scalars['String'] | null) | null;
    /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
    delete?: (Scalars['String'] | null) | null;
};
export type ShopifyProductHasManyInput = {
    create?: NestedShopifyProductCreateInput | null;
    update?: NestedShopifyProductUpdateInput | null;
    /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
    _converge?: ConvergeShopifyProductInput | null;
};
export type NestedShopifyProductUpdateInput = {
    id: (Scalars['GadgetID'] | null);
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    images?: (ShopifyProductImageHasManyInput | null)[];
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ConvergeShopifyProductInput = {
    /** The new list of records to converge to */
    values: (ConvergeShopifyProductValues | null)[];
    /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
    actions?: ConvergeActionMap | null;
};
export type ConvergeShopifyProductValues = {
    id?: (Scalars['GadgetID'] | null) | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    images?: (ShopifyProductImageHasManyInput | null)[];
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyFileHasManyInput = {
    create?: NestedShopifyFileCreateInput | null;
    update?: NestedShopifyFileUpdateInput | null;
    /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
    _converge?: ConvergeShopifyFileInput | null;
};
export type NestedShopifyFileCreateInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    test?: StoredFileInput | null;
};
export type StoredFileInput = {
    /** Sets the file contents using this string, interpreting the string as base64 encoded bytes. This is useful for creating files quickly and easily if you have the file contents available already, but, it doesn't support files larger than 10MB, and is slower to process for the backend. Using multipart file uploads or direct-to-storage file uploads is preferable. */
    base64?: (Scalars['String'] | null) | null;
    /** Sets the file contents using binary bytes sent along side a GraphQL mutation as a multipart POST request. Gadget expects this multipart POST request to be formatted according to the GraphQL multipart request spec defined at https://github.com/jaydenseric/graphql-multipart-request-spec. Sending files as a multipart POST requests is supported natively by the generated Gadget JS client using File objects as variables in API calls. This method supports files up to 100MB. */
    file?: (Scalars['Upload'] | null) | null;
    /** Sets the file contents by fetching a remote URL and saving a copy to cloud storage. File downloads happen as the request is processed so they can be validated, which means large files can take some time to download from the existing URL. If the file can't be fetched from this URL, the action will fail. */
    copyURL?: (Scalars['URL'] | null) | null;
    /** Sets the file contents using a token from a separate upload request made with the Gadget storage service. Uploading files while a user is completing the rest of a form gives a great user experience and supports much larger files, but requires client side code to complete the upload, and then pass the returned token for this field. */
    directUploadToken?: (Scalars['String'] | null) | null;
    /** Sets this file's mime type, which will then be used when serving the file during read requests as the `Content-Type` HTTP header. If not set, Gadget will infer a content type based on the file's contents. */
    mimeType?: (Scalars['String'] | null) | null;
    /** Sets this file's stored name, which will then be used as the file name when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName?: (Scalars['String'] | null) | null;
};
export type NestedShopifyFileUpdateInput = {
    id: (Scalars['GadgetID'] | null);
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    test?: StoredFileInput | null;
};
export type ConvergeShopifyFileInput = {
    /** The new list of records to converge to */
    values: (ConvergeShopifyFileValues | null)[];
    /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
    actions?: ConvergeActionMap | null;
};
export type ConvergeShopifyFileValues = {
    id?: (Scalars['GadgetID'] | null) | null;
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    test?: StoredFileInput | null;
};
export type NestedShopifyProductImageUpdateInput = {
    id: (Scalars['GadgetID'] | null);
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type NestedShopifyProductImageHostOnShopifyInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type NestedShopifyProductImageUpdateShopifyImageInput = {
    id: (Scalars['GadgetID'] | null);
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ConvergeShopifyProductImageInput = {
    /** The new list of records to converge to */
    values: (ConvergeShopifyProductImageValues | null)[];
    /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
    actions?: ConvergeActionMap | null;
};
export type ConvergeShopifyProductImageValues = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkCreateShopifyProductsInput = {
    shopifyProduct?: CreateShopifyProductInput | null;
};
export type UpdateShopifyProductInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    images?: (ShopifyProductImageHasManyInput | null)[];
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpdateShopifyProductsInput = {
    shopifyProduct?: UpdateShopifyProductInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CreateShopifyProductImageInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkCreateShopifyProductImagesInput = {
    shopifyProductImage?: CreateShopifyProductImageInput | null;
};
export type UpdateShopifyProductImageInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpdateShopifyProductImagesInput = {
    shopifyProductImage?: UpdateShopifyProductImageInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type HostOnShopifyShopifyProductImageInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkHostOnShopifyShopifyProductImagesInput = {
    shopifyProductImage?: HostOnShopifyShopifyProductImageInput | null;
};
export type UpdateShopifyImageShopifyProductImageInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpdateShopifyImageShopifyProductImagesInput = {
    shopifyProductImage?: UpdateShopifyImageShopifyProductImageInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type UpdateShopifyShopInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    syncs?: (ShopifySyncHasManyInput | null)[];
    customerAccountsV2?: (Scalars['JSON'] | null) | null;
    address1?: (Scalars['String'] | null) | null;
    address2?: (Scalars['String'] | null) | null;
    checkoutApiSupported?: (Scalars['Boolean'] | null) | null;
    city?: (Scalars['String'] | null) | null;
    cookieConsentLevel?: (Scalars['String'] | null) | null;
    country?: (Scalars['String'] | null) | null;
    countryCode?: (Scalars['String'] | null) | null;
    countryName?: (Scalars['String'] | null) | null;
    countyTaxes?: (Scalars['JSON'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    currency?: (Scalars['String'] | null) | null;
    customerEmail?: (Scalars['String'] | null) | null;
    domain?: (Scalars['String'] | null) | null;
    eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;
    eligibleForPayments?: (Scalars['Boolean'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;
    finances?: (Scalars['Boolean'] | null) | null;
    forceSsl?: (Scalars['Boolean'] | null) | null;
    googleAppsDomain?: (Scalars['String'] | null) | null;
    googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;
    hasDiscounts?: (Scalars['Boolean'] | null) | null;
    hasGiftCards?: (Scalars['Boolean'] | null) | null;
    hasStorefront?: (Scalars['Boolean'] | null) | null;
    ianaTimezone?: (Scalars['String'] | null) | null;
    products?: (ShopifyProductHasManyInput | null)[];
    latitude?: (Scalars['Float'] | null) | null;
    longitude?: (Scalars['Float'] | null) | null;
    marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;
    moneyFormat?: (Scalars['String'] | null) | null;
    moneyInEmailsFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;
    multiLocationEnabled?: (Scalars['Boolean'] | null) | null;
    myshopifyDomain?: (Scalars['String'] | null) | null;
    name?: (Scalars['String'] | null) | null;
    passwordEnabled?: (Scalars['Boolean'] | null) | null;
    phone?: (Scalars['String'] | null) | null;
    planDisplayName?: (Scalars['String'] | null) | null;
    planName?: (Scalars['String'] | null) | null;
    preLaunchEnabled?: (Scalars['Boolean'] | null) | null;
    primaryLocale?: (Scalars['String'] | null) | null;
    province?: (Scalars['String'] | null) | null;
    provinceCode?: (Scalars['String'] | null) | null;
    requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;
    setupRequired?: (Scalars['Boolean'] | null) | null;
    shopOwner?: (Scalars['String'] | null) | null;
    productImages?: (ShopifyProductImageHasManyInput | null)[];
    source?: (Scalars['String'] | null) | null;
    taxShipping?: (Scalars['Boolean'] | null) | null;
    taxesIncluded?: (Scalars['Boolean'] | null) | null;
    timezone?: (Scalars['String'] | null) | null;
    transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    weightUnit?: (Scalars['String'] | null) | null;
    zipCode?: (Scalars['String'] | null) | null;
    files?: (ShopifyFileHasManyInput | null)[];
};
export type BulkUpdateShopifyShopsInput = {
    shopifyShop?: UpdateShopifyShopInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type RunShopifySyncInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkRunShopifySyncsInput = {
    shopifySync?: RunShopifySyncInput | null;
    startReason?: (Scalars['String'] | null) | null;
};
export type CompleteShopifySyncInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkCompleteShopifySyncsInput = {
    shopifySync?: CompleteShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type ErrorShopifySyncInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkErrorShopifySyncsInput = {
    shopifySync?: ErrorShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type AbortShopifySyncInput = {
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkAbortShopifySyncsInput = {
    shopifySync?: AbortShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CreateShopifyFileInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    test?: StoredFileInput | null;
};
export type BulkCreateShopifyFilesInput = {
    shopifyFile?: CreateShopifyFileInput | null;
};
export type UpdateShopifyFileInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    test?: StoredFileInput | null;
};
export type BulkUpdateShopifyFilesInput = {
    shopifyFile?: UpdateShopifyFileInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type InternalSessionInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: ((Scalars['String'] | null))[];
    shop?: InternalBelongsToInput | null;
    shopifySID?: (Scalars['String'] | null) | null;
};
export type InternalBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type InternalShopifyGdprRequestInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    payload?: (Scalars['JSON'] | null) | null;
    topic?: ShopifyGdprRequestTopicEnum | null;
    shop?: InternalBelongsToInput | null;
};
export type AppGraphQLTriggerMutationContext = {
    /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
    sessionID?: (Scalars['GadgetID'] | null) | null;
};
export type InternalShopifyProductInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    body?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    handle?: (Scalars['String'] | null) | null;
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    publishedScope?: (Scalars['String'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    shop?: InternalBelongsToInput | null;
};
export type InternalShopifyProductImageInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    height?: (Scalars['Float'] | null) | null;
    position?: (Scalars['Float'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    width?: (Scalars['Float'] | null) | null;
    product?: InternalBelongsToInput | null;
    shop?: InternalBelongsToInput | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalShopifyProductImageAtomicsInput | null;
};
export type InternalShopifyProductImageAtomicsInput = {
    /** Numeric atomic commands for operating on height. */
    height?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on position. */
    position?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on width. */
    width?: (NumericAtomicFieldUpdateInput)[];
};
export type NumericAtomicFieldUpdateInput = {
    /** A number to atomically increment the field value by. Can only be used on numeric fields. */
    increment?: (Scalars['Float'] | null) | null;
    /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
    decrement?: (Scalars['Float'] | null) | null;
};
export type InternalShopifyShopInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    customerAccountsV2?: (Scalars['JSON'] | null) | null;
    accessToken?: (Scalars['String'] | null) | null;
    address1?: (Scalars['String'] | null) | null;
    address2?: (Scalars['String'] | null) | null;
    checkoutApiSupported?: (Scalars['Boolean'] | null) | null;
    city?: (Scalars['String'] | null) | null;
    cookieConsentLevel?: (Scalars['String'] | null) | null;
    country?: (Scalars['String'] | null) | null;
    countryCode?: (Scalars['String'] | null) | null;
    countryName?: (Scalars['String'] | null) | null;
    countyTaxes?: (Scalars['JSON'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    currency?: (Scalars['String'] | null) | null;
    customerEmail?: (Scalars['String'] | null) | null;
    disabledWebhooks?: (Scalars['JSON'] | null) | null;
    domain?: (Scalars['String'] | null) | null;
    eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;
    eligibleForPayments?: (Scalars['Boolean'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;
    finances?: (Scalars['Boolean'] | null) | null;
    forceSsl?: (Scalars['Boolean'] | null) | null;
    googleAppsDomain?: (Scalars['String'] | null) | null;
    googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;
    grantedScopes?: (Scalars['JSON'] | null) | null;
    hasDiscounts?: (Scalars['Boolean'] | null) | null;
    hasGiftCards?: (Scalars['Boolean'] | null) | null;
    hasStorefront?: (Scalars['Boolean'] | null) | null;
    ianaTimezone?: (Scalars['String'] | null) | null;
    installedViaApiKey?: (Scalars['String'] | null) | null;
    latitude?: (Scalars['Float'] | null) | null;
    longitude?: (Scalars['Float'] | null) | null;
    marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;
    moneyFormat?: (Scalars['String'] | null) | null;
    moneyInEmailsFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;
    multiLocationEnabled?: (Scalars['Boolean'] | null) | null;
    myshopifyDomain?: (Scalars['String'] | null) | null;
    name?: (Scalars['String'] | null) | null;
    passwordEnabled?: (Scalars['Boolean'] | null) | null;
    phone?: (Scalars['String'] | null) | null;
    planDisplayName?: (Scalars['String'] | null) | null;
    planName?: (Scalars['String'] | null) | null;
    preLaunchEnabled?: (Scalars['Boolean'] | null) | null;
    primaryLocale?: (Scalars['String'] | null) | null;
    province?: (Scalars['String'] | null) | null;
    provinceCode?: (Scalars['String'] | null) | null;
    registeredWebhooks?: (Scalars['JSON'] | null) | null;
    requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;
    setupRequired?: (Scalars['Boolean'] | null) | null;
    shopOwner?: (Scalars['String'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    taxShipping?: (Scalars['Boolean'] | null) | null;
    taxesIncluded?: (Scalars['Boolean'] | null) | null;
    timezone?: (Scalars['String'] | null) | null;
    transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    weightUnit?: (Scalars['String'] | null) | null;
    zipCode?: (Scalars['String'] | null) | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalShopifyShopAtomicsInput | null;
};
export type InternalShopifyShopAtomicsInput = {
    /** Numeric atomic commands for operating on latitude. */
    latitude?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on longitude. */
    longitude?: (NumericAtomicFieldUpdateInput)[];
};
export type InternalShopifySyncInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
    shop?: InternalBelongsToInput | null;
};
export type InternalShopifyFileInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    type?: ShopifyFileTypeEnum | null;
    alt?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    duration?: (Scalars['Int'] | null) | null;
    fileErrors?: (Scalars['JSON'] | null) | null;
    fileStatus?: ShopifyFileFileStatusEnum | null;
    image?: (Scalars['JSON'] | null) | null;
    originalFileSize?: (Scalars['Int'] | null) | null;
    originalSource?: (Scalars['JSON'] | null) | null;
    preview?: (Scalars['JSON'] | null) | null;
    sources?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    shop?: InternalBelongsToInput | null;
    test?: InternalStoredFileInput | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalShopifyFileAtomicsInput | null;
};
export type InternalStoredFileInput = {
    /** An opaque identifier used by Gadget internally to uniquely identify this stored file */
    storageToken: (Scalars['String'] | null);
    /** Byte size to report in API calls */
    byteSize: (Scalars['Int'] | null);
    /** File mime type to use when serving the file or making resize operations available */
    mimeType: (Scalars['String'] | null);
    /** Sets this file's stored name, which will then be used when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName: (Scalars['String'] | null);
    /** Has no effect. Convenience property to allow sending an internal metadata blob back to the Internal API, but doesn't do anything. URLs generated by Gadget expire and are not stored. */
    url?: (Scalars['String'] | null) | null;
};
export type InternalShopifyFileAtomicsInput = {
    /** Numeric atomic commands for operating on duration. */
    duration?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on originalFileSize. */
    originalFileSize?: (NumericAtomicFieldUpdateInput)[];
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
    CurrencyAmount: string;
    /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
    ISO8601DateString: string;
    /** A file object produced by a browser for uploading to cloud storage */
    Upload: File;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: JSONObject;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: JSONValue;
    /** The ID of a record in Gadget */
    GadgetID: string;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: Date;
    /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
    RecordState: (string | {
        [key: string]: Scalars['RecordState'];
    });
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
    HydrationPlan: unknown;
    /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
    URL: string;
}
/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
    __typename: 'SimpleError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
}
export type AvailableSimpleErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
};
export type ExecutionError = {
    __typename: 'SimpleError' | 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error. Only available for super users. */
    stack: (Scalars['String'] | null);
};
export type AvailableExecutionErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error. Only available for super users. */
    stack?: boolean | null | undefined;
};
/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
    __typename: 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this InvalidRecordError. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField: (Scalars['JSONObject'] | null);
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors: InvalidFieldError[];
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record: (Scalars['JSONObject'] | null);
    /** The model of the record which failed validation */
    model: (GadgetModel | null);
}
export type AvailableInvalidRecordErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this InvalidRecordError. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField?: boolean | null | undefined;
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors?: AvailableInvalidFieldErrorSelection;
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record?: boolean | null | undefined;
    /** The model of the record which failed validation */
    model?: AvailableGadgetModelSelection;
};
/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {
    __typename: 'InvalidFieldError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier: Scalars['String'];
};
export type AvailableInvalidFieldErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier?: boolean | null | undefined;
};
export type GadgetModel = {
    __typename: 'GadgetModel';
    key: Scalars['String'];
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    namespace: Scalars['String'][];
    filterable: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    searchable: Scalars['Boolean'];
    fields: GadgetModelField[];
    actions: GadgetAction[];
    action: (GadgetAction | null);
    pluralName: Scalars['String'];
    pluralApiIdentifier: Scalars['String'];
    currentSingletonApiIdentifier: (Scalars['String'] | null);
    initialCreatedState: (Scalars['String'] | null);
};
export type AvailableGadgetModelSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    namespace?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    searchable?: boolean | null | undefined;
    fields?: AvailableGadgetModelFieldSelection;
    actions?: AvailableGadgetActionSelection;
    action?: AvailableGadgetActionSelection;
    pluralName?: boolean | null | undefined;
    pluralApiIdentifier?: boolean | null | undefined;
    currentSingletonApiIdentifier?: boolean | null | undefined;
    initialCreatedState?: boolean | null | undefined;
};
/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
    __typename: 'GadgetModelField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
    isUniqueField: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    filterable: Scalars['Boolean'];
    examples: GadgetModelFieldExamples;
}
export type AvailableGadgetModelFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
    isUniqueField?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    examples?: AvailableGadgetModelFieldExamplesSelection;
};
export type GadgetField = {
    __typename: 'GadgetModelField' | 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
};
export type AvailableGadgetFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {
    __typename: 'GadgetGenericFieldConfig' | 'GadgetObjectFieldConfig' | 'GadgetBelongsToConfig' | 'GadgetHasManyConfig' | 'GadgetEnumConfig' | 'GadgetDateTimeConfig';
    fieldType: GadgetFieldType;
};
export type AvailableGadgetFieldConfigInterfaceSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
};
export type GadgetModelFieldExamples = {
    __typename: 'GadgetModelFieldExamples';
    linkExistingChild: (GadgetFieldUsageExample | null);
    linkNewChild: (GadgetFieldUsageExample | null);
    linkToExistingParent: (GadgetFieldUsageExample | null);
    createNestedInParent: (GadgetFieldUsageExample | null);
};
export type AvailableGadgetModelFieldExamplesSelection = {
    __typename?: boolean | null | undefined;
    linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;
    linkNewChild?: AvailableGadgetFieldUsageExampleSelection;
    linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;
    createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};
export type GadgetFieldUsageExample = {
    __typename: 'GadgetFieldUsageExample';
    exampleGraphQLMutation: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetFieldUsageExampleSelection = {
    __typename?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
export type GadgetAction = {
    __typename: 'GadgetAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect: Scalars['Boolean'];
    isDeleteAction: Scalars['Boolean'];
    isCreateOrUpdateAction: Scalars['Boolean'];
    operatesWithRecordIdentity: Scalars['Boolean'];
    /** @deprecated This field will be removed. */
    possibleTransitions: Scalars['JSONObject'];
    availableInBulk: Scalars['Boolean'];
    bulkApiIdentifier: (Scalars['String'] | null);
    hasAmbiguousIdentifier: Scalars['Boolean'];
    inputFields: GadgetObjectField[];
    bulkInvokedByIDOnly: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetActionGraphQLType | null);
};
export type AvailableGadgetActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect?: boolean | null | undefined;
    isDeleteAction?: boolean | null | undefined;
    isCreateOrUpdateAction?: boolean | null | undefined;
    operatesWithRecordIdentity?: boolean | null | undefined;
    /** @deprecated This field will be removed. */
    possibleTransitions?: boolean | null | undefined;
    availableInBulk?: boolean | null | undefined;
    bulkApiIdentifier?: boolean | null | undefined;
    hasAmbiguousIdentifier?: boolean | null | undefined;
    inputFields?: AvailableGadgetObjectFieldSelection;
    bulkInvokedByIDOnly?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetActionGraphQLTypeSelection;
};
/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
    __typename: 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
}
export type AvailableGadgetObjectFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
export type GadgetTrigger = {
    __typename: 'GadgetTrigger';
    specID: Scalars['String'];
};
export type AvailableGadgetTriggerSelection = {
    __typename?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export type GadgetActionGraphQLType = {
    __typename: 'GadgetActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation: (Scalars['String'] | null);
    exampleBulkGraphQLMutation: (Scalars['String'] | null);
    exampleBulkGraphQLVariables: (Scalars['JSON'] | null);
    exampleBulkImperativeInvocation: (Scalars['String'] | null);
    exampleBulkReactHook: (Scalars['String'] | null);
    bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};
export type AvailableGadgetActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation?: boolean | null | undefined;
    exampleBulkGraphQLMutation?: boolean | null | undefined;
    exampleBulkGraphQLVariables?: boolean | null | undefined;
    exampleBulkImperativeInvocation?: boolean | null | undefined;
    exampleBulkReactHook?: boolean | null | undefined;
    bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};
export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetGenericFieldConfig';
    fieldType: GadgetFieldType;
}
export type AvailableGadgetGenericFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
};
export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetObjectFieldConfig';
    fieldType: GadgetFieldType;
    name: (Scalars['String'] | null);
    fields: GadgetModelField[];
}
export type AvailableGadgetObjectFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    name?: boolean | null | undefined;
    fields?: AvailableGadgetModelFieldSelection;
};
export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetBelongsToConfig';
    fieldType: GadgetFieldType;
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetBelongsToConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetHasManyConfig';
    fieldType: GadgetFieldType;
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetHasManyConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetEnumConfig';
    fieldType: GadgetFieldType;
    allowMultiple: Scalars['Boolean'];
    allowOther: Scalars['Boolean'];
    options: GadgetEnumOption[];
}
export type AvailableGadgetEnumConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    allowMultiple?: boolean | null | undefined;
    allowOther?: boolean | null | undefined;
    options?: AvailableGadgetEnumOptionSelection;
};
export type GadgetEnumOption = {
    __typename: 'GadgetEnumOption';
    name: Scalars['String'];
    color: Scalars['String'];
};
export type AvailableGadgetEnumOptionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    color?: boolean | null | undefined;
};
export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetDateTimeConfig';
    fieldType: GadgetFieldType;
    includeTime: Scalars['Boolean'];
}
export type AvailableGadgetDateTimeConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    includeTime?: boolean | null | undefined;
};
export type Query = {
    __typename: 'Query';
    session: (Session | null);
    sessions: SessionConnection;
    shopifyGdprRequest: (ShopifyGdprRequest | null);
    shopifyGdprRequests: ShopifyGdprRequestConnection;
    shopifyProduct: (ShopifyProduct | null);
    shopifyProducts: ShopifyProductConnection;
    shopifyProductImage: (ShopifyProductImage | null);
    shopifyProductImages: ShopifyProductImageConnection;
    shopifyShop: (ShopifyShop | null);
    shopifyShops: ShopifyShopConnection;
    shopifySync: (ShopifySync | null);
    shopifySyncs: ShopifySyncConnection;
    shopifyFile: (ShopifyFile | null);
    shopifyFiles: ShopifyFileConnection;
    internal: (InternalQueries | null);
    currentSession: (Session | null);
    shopifyConnection: Shopify;
};
export type AvailableQuerySelection = {
    __typename?: boolean | null | undefined;
    session?: AvailableSessionSelection;
    sessions?: AvailableSessionConnectionSelection;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
    shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;
    shopifyProduct?: AvailableShopifyProductSelection;
    shopifyProducts?: AvailableShopifyProductConnectionSelection;
    shopifyProductImage?: AvailableShopifyProductImageSelection;
    shopifyProductImages?: AvailableShopifyProductImageConnectionSelection;
    shopifyShop?: AvailableShopifyShopSelection;
    shopifyShops?: AvailableShopifyShopConnectionSelection;
    shopifySync?: AvailableShopifySyncSelection;
    shopifySyncs?: AvailableShopifySyncConnectionSelection;
    shopifyFile?: AvailableShopifyFileSelection;
    shopifyFiles?: AvailableShopifyFileConnectionSelection;
    internal?: AvailableInternalQueriesSelection;
    currentSession?: AvailableSessionSelection;
    shopifyConnection?: AvailableShopifySelection;
};
export type Session = {
    __typename: 'Session';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: (Scalars['GadgetID'] | null);
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    roles: Role[];
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    shopifySID: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableSessionSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    roles?: AvailableRoleSelection;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    shopifySID?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {
    __typename: 'Role';
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key: Scalars['String'];
    /** The human readable name for this role. Can be changed. */
    name: Scalars['String'];
};
export type AvailableRoleSelection = {
    __typename?: boolean | null | undefined;
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key?: boolean | null | undefined;
    /** The human readable name for this role. Can be changed. */
    name?: boolean | null | undefined;
};
export type ShopifyShop = {
    __typename: 'ShopifyShop';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars['RecordState'];
    gdprRequests: ShopifyGdprRequestConnection;
    syncs: ShopifySyncConnection;
    customerAccountsV2: (Scalars['JSON'] | null);
    /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
    accessToken: (Scalars['String'] | null);
    address1: (Scalars['String'] | null);
    address2: (Scalars['String'] | null);
    checkoutApiSupported: (Scalars['Boolean'] | null);
    city: (Scalars['String'] | null);
    cookieConsentLevel: (Scalars['String'] | null);
    country: (Scalars['String'] | null);
    countryCode: (Scalars['String'] | null);
    countryName: (Scalars['String'] | null);
    countyTaxes: (Scalars['JSON'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    currency: (Scalars['String'] | null);
    customerEmail: (Scalars['String'] | null);
    disabledWebhooks: (Scalars['JSON'] | null);
    domain: (Scalars['String'] | null);
    eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);
    eligibleForPayments: (Scalars['Boolean'] | null);
    email: (Scalars['String'] | null);
    enabledPresentmentCurrencies: (Scalars['JSON'] | null);
    finances: (Scalars['Boolean'] | null);
    forceSsl: (Scalars['Boolean'] | null);
    googleAppsDomain: (Scalars['String'] | null);
    googleAppsLoginEnabled: (Scalars['Boolean'] | null);
    grantedScopes: (Scalars['JSON'] | null);
    hasDiscounts: (Scalars['Boolean'] | null);
    hasGiftCards: (Scalars['Boolean'] | null);
    hasStorefront: (Scalars['Boolean'] | null);
    ianaTimezone: (Scalars['String'] | null);
    installedViaApiKey: (Scalars['String'] | null);
    products: ShopifyProductConnection;
    latitude: (Scalars['Float'] | null);
    longitude: (Scalars['Float'] | null);
    marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);
    moneyFormat: (Scalars['String'] | null);
    moneyInEmailsFormat: (Scalars['String'] | null);
    moneyWithCurrencyFormat: (Scalars['String'] | null);
    moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);
    multiLocationEnabled: (Scalars['Boolean'] | null);
    myshopifyDomain: (Scalars['String'] | null);
    name: (Scalars['String'] | null);
    passwordEnabled: (Scalars['Boolean'] | null);
    phone: (Scalars['String'] | null);
    planDisplayName: (Scalars['String'] | null);
    planName: (Scalars['String'] | null);
    preLaunchEnabled: (Scalars['Boolean'] | null);
    primaryLocale: (Scalars['String'] | null);
    province: (Scalars['String'] | null);
    provinceCode: (Scalars['String'] | null);
    registeredWebhooks: (Scalars['JSON'] | null);
    requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);
    setupRequired: (Scalars['Boolean'] | null);
    shopOwner: (Scalars['String'] | null);
    productImages: ShopifyProductImageConnection;
    source: (Scalars['String'] | null);
    taxShipping: (Scalars['Boolean'] | null);
    taxesIncluded: (Scalars['Boolean'] | null);
    timezone: (Scalars['String'] | null);
    transactionalSmsDisabled: (Scalars['Boolean'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    weightUnit: (Scalars['String'] | null);
    zipCode: (Scalars['String'] | null);
    files: ShopifyFileConnection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyShopSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state?: boolean | null | undefined;
    gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;
    syncs?: AvailableShopifySyncConnectionSelection;
    customerAccountsV2?: boolean | null | undefined;
    /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
    accessToken?: boolean | null | undefined;
    address1?: boolean | null | undefined;
    address2?: boolean | null | undefined;
    checkoutApiSupported?: boolean | null | undefined;
    city?: boolean | null | undefined;
    cookieConsentLevel?: boolean | null | undefined;
    country?: boolean | null | undefined;
    countryCode?: boolean | null | undefined;
    countryName?: boolean | null | undefined;
    countyTaxes?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    currency?: boolean | null | undefined;
    customerEmail?: boolean | null | undefined;
    disabledWebhooks?: boolean | null | undefined;
    domain?: boolean | null | undefined;
    eligibleForCardReaderGiveaway?: boolean | null | undefined;
    eligibleForPayments?: boolean | null | undefined;
    email?: boolean | null | undefined;
    enabledPresentmentCurrencies?: boolean | null | undefined;
    finances?: boolean | null | undefined;
    forceSsl?: boolean | null | undefined;
    googleAppsDomain?: boolean | null | undefined;
    googleAppsLoginEnabled?: boolean | null | undefined;
    grantedScopes?: boolean | null | undefined;
    hasDiscounts?: boolean | null | undefined;
    hasGiftCards?: boolean | null | undefined;
    hasStorefront?: boolean | null | undefined;
    ianaTimezone?: boolean | null | undefined;
    installedViaApiKey?: boolean | null | undefined;
    products?: AvailableShopifyProductConnectionSelection;
    latitude?: boolean | null | undefined;
    longitude?: boolean | null | undefined;
    marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;
    moneyFormat?: boolean | null | undefined;
    moneyInEmailsFormat?: boolean | null | undefined;
    moneyWithCurrencyFormat?: boolean | null | undefined;
    moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;
    multiLocationEnabled?: boolean | null | undefined;
    myshopifyDomain?: boolean | null | undefined;
    name?: boolean | null | undefined;
    passwordEnabled?: boolean | null | undefined;
    phone?: boolean | null | undefined;
    planDisplayName?: boolean | null | undefined;
    planName?: boolean | null | undefined;
    preLaunchEnabled?: boolean | null | undefined;
    primaryLocale?: boolean | null | undefined;
    province?: boolean | null | undefined;
    provinceCode?: boolean | null | undefined;
    registeredWebhooks?: boolean | null | undefined;
    requiresExtraPaymentsAgreement?: boolean | null | undefined;
    setupRequired?: boolean | null | undefined;
    shopOwner?: boolean | null | undefined;
    productImages?: AvailableShopifyProductImageConnectionSelection;
    source?: boolean | null | undefined;
    taxShipping?: boolean | null | undefined;
    taxesIncluded?: boolean | null | undefined;
    timezone?: boolean | null | undefined;
    transactionalSmsDisabled?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    weightUnit?: boolean | null | undefined;
    zipCode?: boolean | null | undefined;
    files?: AvailableShopifyFileConnectionSelection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {
    __typename: 'ShopifyGdprRequestConnection';
    /** A list of edges. */
    edges: ShopifyGdprRequestEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyGdprRequestConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyGdprRequestEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {
    __typename: 'ShopifyGdprRequestEdge';
    /** The item at the end of the edge */
    node: ShopifyGdprRequest;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyGdprRequestEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyGdprRequestSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyGdprRequest = {
    __typename: 'ShopifyGdprRequest';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    payload: (Scalars['JSON'] | null);
    topic: ShopifyGdprRequestTopicEnum;
    shop: ShopifyShop;
    shopId: Scalars['GadgetID'];
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyGdprRequestSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    payload?: boolean | null | undefined;
    topic?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** Information about pagination in a connection. */
export type PageInfo = {
    __typename: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null);
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null);
};
export type AvailablePageInfoSelection = {
    __typename?: boolean | null | undefined;
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | null | undefined;
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | null | undefined;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | null | undefined;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | null | undefined;
};
/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {
    __typename: 'ShopifySyncConnection';
    /** A list of edges. */
    edges: ShopifySyncEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifySyncConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifySyncEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {
    __typename: 'ShopifySyncEdge';
    /** The item at the end of the edge */
    node: ShopifySync;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifySyncEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifySyncSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifySync = {
    __typename: 'ShopifySync';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars['RecordState'];
    domain: Scalars['String'];
    errorMessage: (Scalars['String'] | null);
    errorDetails: (Scalars['String'] | null);
    /** DateTime that this sync was run from */
    syncSince: (Scalars['DateTime'] | null);
    force: (Scalars['Boolean'] | null);
    models: (Scalars['JSON'] | null);
    shop: ShopifyShop;
    shopId: Scalars['GadgetID'];
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifySyncSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state?: boolean | null | undefined;
    domain?: boolean | null | undefined;
    errorMessage?: boolean | null | undefined;
    errorDetails?: boolean | null | undefined;
    /** DateTime that this sync was run from */
    syncSince?: boolean | null | undefined;
    force?: boolean | null | undefined;
    models?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {
    __typename: 'ShopifyProductConnection';
    /** A list of edges. */
    edges: ShopifyProductEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyProductConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyProductEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {
    __typename: 'ShopifyProductEdge';
    /** The item at the end of the edge */
    node: ShopifyProduct;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyProductEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyProductSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyProduct = {
    __typename: 'ShopifyProduct';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    compareAtPriceRange: (Scalars['JSON'] | null);
    productCategory: (Scalars['JSON'] | null);
    body: (Scalars['String'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    handle: (Scalars['String'] | null);
    images: ShopifyProductImageConnection;
    productType: (Scalars['String'] | null);
    publishedAt: (Scalars['DateTime'] | null);
    publishedScope: (Scalars['String'] | null);
    status: ShopifyProductStatusEnum;
    tags: (Scalars['JSON'] | null);
    templateSuffix: (Scalars['String'] | null);
    title: (Scalars['String'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    vendor: (Scalars['String'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyProductSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    compareAtPriceRange?: boolean | null | undefined;
    productCategory?: boolean | null | undefined;
    body?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    handle?: boolean | null | undefined;
    images?: AvailableShopifyProductImageConnectionSelection;
    productType?: boolean | null | undefined;
    publishedAt?: boolean | null | undefined;
    publishedScope?: boolean | null | undefined;
    status?: boolean | null | undefined;
    tags?: boolean | null | undefined;
    templateSuffix?: boolean | null | undefined;
    title?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    vendor?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyProductImage items. */
export type ShopifyProductImageConnection = {
    __typename: 'ShopifyProductImageConnection';
    /** A list of edges. */
    edges: ShopifyProductImageEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyProductImageConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyProductImageEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyProductImage connection. */
export type ShopifyProductImageEdge = {
    __typename: 'ShopifyProductImageEdge';
    /** The item at the end of the edge */
    node: ShopifyProductImage;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyProductImageEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyProductImageSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyProductImage = {
    __typename: 'ShopifyProductImage';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    alt: (Scalars['String'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    height: (Scalars['Float'] | null);
    position: (Scalars['Float'] | null);
    source: (Scalars['String'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    width: (Scalars['Float'] | null);
    product: (ShopifyProduct | null);
    productId: (Scalars['GadgetID'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyProductImageSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    alt?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    height?: boolean | null | undefined;
    position?: boolean | null | undefined;
    source?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    width?: boolean | null | undefined;
    product?: AvailableShopifyProductSelection;
    productId?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyFile items. */
export type ShopifyFileConnection = {
    __typename: 'ShopifyFileConnection';
    /** A list of edges. */
    edges: ShopifyFileEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyFileConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyFileEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyFile connection. */
export type ShopifyFileEdge = {
    __typename: 'ShopifyFileEdge';
    /** The item at the end of the edge */
    node: ShopifyFile;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyFileEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyFileSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyFile = {
    __typename: 'ShopifyFile';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    type: ShopifyFileTypeEnum;
    alt: (Scalars['String'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    duration: (Scalars['Int'] | null);
    fileErrors: (Scalars['JSON'] | null);
    fileStatus: ShopifyFileFileStatusEnum;
    image: (Scalars['JSON'] | null);
    originalFileSize: (Scalars['Int'] | null);
    originalSource: (Scalars['JSON'] | null);
    preview: (Scalars['JSON'] | null);
    sources: (Scalars['JSON'] | null);
    url: (Scalars['String'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    test: (StoredFile | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyFileSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    type?: boolean | null | undefined;
    alt?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    duration?: boolean | null | undefined;
    fileErrors?: boolean | null | undefined;
    fileStatus?: boolean | null | undefined;
    image?: boolean | null | undefined;
    originalFileSize?: boolean | null | undefined;
    originalSource?: boolean | null | undefined;
    preview?: boolean | null | undefined;
    sources?: boolean | null | undefined;
    url?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    test?: AvailableStoredFileSelection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** One file that has been stored and attached to a record */
export type StoredFile = {
    __typename: 'StoredFile';
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url: Scalars['String'];
    /** The content type of the file. */
    mimeType: Scalars['String'];
    /** The size of this file in bytes. */
    byteSize: Scalars['Int'];
    /** The size of this file in bytes. */
    humanSize: Scalars['String'];
    /** The file name of this file. */
    fileName: Scalars['String'];
};
export type AvailableStoredFileSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url?: boolean | null | undefined;
    /** The content type of the file. */
    mimeType?: boolean | null | undefined;
    /** The size of this file in bytes. */
    byteSize?: boolean | null | undefined;
    /** The size of this file in bytes. */
    humanSize?: boolean | null | undefined;
    /** The file name of this file. */
    fileName?: boolean | null | undefined;
};
/** A connection to a list of Session items. */
export type SessionConnection = {
    __typename: 'SessionConnection';
    /** A list of edges. */
    edges: SessionEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableSessionConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableSessionEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Session connection. */
export type SessionEdge = {
    __typename: 'SessionEdge';
    /** The item at the end of the edge */
    node: Session;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableSessionEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableSessionSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {
    __typename: 'ShopifyShopConnection';
    /** A list of edges. */
    edges: ShopifyShopEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyShopConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyShopEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {
    __typename: 'ShopifyShopEdge';
    /** The item at the end of the edge */
    node: ShopifyShop;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyShopEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyShopSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type InternalQueries = {
    __typename: 'InternalQueries';
    session: (InternalSessionRecord | null);
    listSession: InternalSessionRecordConnection;
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
    listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;
    shopifyProduct: (InternalShopifyProductRecord | null);
    listShopifyProduct: InternalShopifyProductRecordConnection;
    shopifyProductImage: (InternalShopifyProductImageRecord | null);
    listShopifyProductImage: InternalShopifyProductImageRecordConnection;
    shopifyShop: (InternalShopifyShopRecord | null);
    listShopifyShop: InternalShopifyShopRecordConnection;
    shopifySync: (InternalShopifySyncRecord | null);
    listShopifySync: InternalShopifySyncRecordConnection;
    shopifyFile: (InternalShopifyFileRecord | null);
    listShopifyFile: InternalShopifyFileRecordConnection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails: (Scalars['JSONObject'] | null);
};
export type AvailableInternalQueriesSelection = {
    __typename?: boolean | null | undefined;
    session?: boolean | null | undefined;
    listSession?: AvailableInternalSessionRecordConnectionSelection;
    shopifyGdprRequest?: boolean | null | undefined;
    listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;
    shopifyProduct?: boolean | null | undefined;
    listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;
    shopifyProductImage?: boolean | null | undefined;
    listShopifyProductImage?: AvailableInternalShopifyProductImageRecordConnectionSelection;
    shopifyShop?: boolean | null | undefined;
    listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;
    shopifySync?: boolean | null | undefined;
    listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;
    shopifyFile?: boolean | null | undefined;
    listShopifyFile?: AvailableInternalShopifyFileRecordConnectionSelection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails?: boolean | null | undefined;
};
/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {
    __typename: 'InternalSessionRecordConnection';
    /** A list of edges. */
    edges: InternalSessionRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalSessionRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalSessionRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {
    __typename: 'InternalSessionRecordEdge';
    /** The item at the end of the edge */
    node: InternalSessionRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalSessionRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {
    __typename: 'InternalShopifyGdprRequestRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyGdprRequestRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {
    __typename: 'InternalShopifyGdprRequestRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyGdprRequestRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {
    __typename: 'InternalShopifyProductRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyProductRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyProductRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyProductRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {
    __typename: 'InternalShopifyProductRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyProductRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyProductRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyProductImageRecord items. */
export type InternalShopifyProductImageRecordConnection = {
    __typename: 'InternalShopifyProductImageRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyProductImageRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyProductImageRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyProductImageRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyProductImageRecord connection. */
export type InternalShopifyProductImageRecordEdge = {
    __typename: 'InternalShopifyProductImageRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyProductImageRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyProductImageRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {
    __typename: 'InternalShopifyShopRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyShopRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyShopRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyShopRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {
    __typename: 'InternalShopifyShopRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyShopRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyShopRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {
    __typename: 'InternalShopifySyncRecordConnection';
    /** A list of edges. */
    edges: InternalShopifySyncRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifySyncRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifySyncRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {
    __typename: 'InternalShopifySyncRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifySyncRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifySyncRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyFileRecord items. */
export type InternalShopifyFileRecordConnection = {
    __typename: 'InternalShopifyFileRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyFileRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyFileRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyFileRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyFileRecord connection. */
export type InternalShopifyFileRecordEdge = {
    __typename: 'InternalShopifyFileRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyFileRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyFileRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {
    __typename: 'GadgetRole';
    key: Scalars['String'];
    name: Scalars['String'];
    selectable: Scalars['Boolean'];
    order: Scalars['Int'];
};
export type AvailableGadgetRoleSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    selectable?: boolean | null | undefined;
    order?: boolean | null | undefined;
};
export type GadgetGlobalAction = {
    __typename: 'GadgetGlobalAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetGlobalActionGraphQLType | null);
};
export type AvailableGadgetGlobalActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};
export type GadgetGlobalActionGraphQLType = {
    __typename: 'GadgetGlobalActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetGlobalActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {
    __typename: 'DirectUploadToken';
    /** The URL to upload a file to. */
    url: Scalars['String'];
    /** The token to pass to an action to reference the uploaded file. */
    token: Scalars['String'];
};
export type AvailableDirectUploadTokenSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to upload a file to. */
    url?: boolean | null | undefined;
    /** The token to pass to an action to reference the uploaded file. */
    token?: boolean | null | undefined;
};
/** Information about the Shopify Connection */
export type Shopify = {
    __typename: 'Shopify';
    /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
    requiresReauthentication: (Scalars['Boolean'] | null);
    /** A list missing scopes compared to the Connection based on the current session's shop */
    missingScopes: Scalars['String'][];
};
export type AvailableShopifySelection = {
    __typename?: boolean | null | undefined;
    /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
    requiresReauthentication?: boolean | null | undefined;
    /** A list missing scopes compared to the Connection based on the current session's shop */
    missingScopes?: boolean | null | undefined;
};
export type Mutation = {
    __typename: 'Mutation';
    createShopifyProduct: (CreateShopifyProductResult | null);
    bulkCreateShopifyProducts: (BulkCreateShopifyProductsResult | null);
    updateShopifyProduct: (UpdateShopifyProductResult | null);
    bulkUpdateShopifyProducts: (BulkUpdateShopifyProductsResult | null);
    createShopifyProductImage: (CreateShopifyProductImageResult | null);
    bulkCreateShopifyProductImages: (BulkCreateShopifyProductImagesResult | null);
    updateShopifyProductImage: (UpdateShopifyProductImageResult | null);
    bulkUpdateShopifyProductImages: (BulkUpdateShopifyProductImagesResult | null);
    hostOnShopifyShopifyProductImage: (HostOnShopifyShopifyProductImageResult | null);
    bulkHostOnShopifyShopifyProductImages: (BulkHostOnShopifyShopifyProductImagesResult | null);
    updateShopifyImageShopifyProductImage: (UpdateShopifyImageShopifyProductImageResult | null);
    bulkUpdateShopifyImageShopifyProductImages: (BulkUpdateShopifyImageShopifyProductImagesResult | null);
    updateShopifyShop: (UpdateShopifyShopResult | null);
    bulkUpdateShopifyShops: (BulkUpdateShopifyShopsResult | null);
    runShopifySync: (RunShopifySyncResult | null);
    bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);
    completeShopifySync: (CompleteShopifySyncResult | null);
    bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);
    errorShopifySync: (ErrorShopifySyncResult | null);
    bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);
    abortShopifySync: (AbortShopifySyncResult | null);
    bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);
    createShopifyFile: (CreateShopifyFileResult | null);
    bulkCreateShopifyFiles: (BulkCreateShopifyFilesResult | null);
    updateShopifyFile: (UpdateShopifyFileResult | null);
    bulkUpdateShopifyFiles: (BulkUpdateShopifyFilesResult | null);
    hostOnShopifyTest: (HostOnShopifyTestResult | null);
    internal: (InternalMutations | null);
    shopifyConnection: (ShopifyConnectionMutations | null);
};
export type AvailableMutationSelection = {
    __typename?: boolean | null | undefined;
    createShopifyProduct?: AvailableCreateShopifyProductResultSelection;
    bulkCreateShopifyProducts?: AvailableBulkCreateShopifyProductsResultSelection;
    updateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;
    bulkUpdateShopifyProducts?: AvailableBulkUpdateShopifyProductsResultSelection;
    createShopifyProductImage?: AvailableCreateShopifyProductImageResultSelection;
    bulkCreateShopifyProductImages?: AvailableBulkCreateShopifyProductImagesResultSelection;
    updateShopifyProductImage?: AvailableUpdateShopifyProductImageResultSelection;
    bulkUpdateShopifyProductImages?: AvailableBulkUpdateShopifyProductImagesResultSelection;
    hostOnShopifyShopifyProductImage?: AvailableHostOnShopifyShopifyProductImageResultSelection;
    bulkHostOnShopifyShopifyProductImages?: AvailableBulkHostOnShopifyShopifyProductImagesResultSelection;
    updateShopifyImageShopifyProductImage?: AvailableUpdateShopifyImageShopifyProductImageResultSelection;
    bulkUpdateShopifyImageShopifyProductImages?: AvailableBulkUpdateShopifyImageShopifyProductImagesResultSelection;
    updateShopifyShop?: AvailableUpdateShopifyShopResultSelection;
    bulkUpdateShopifyShops?: AvailableBulkUpdateShopifyShopsResultSelection;
    runShopifySync?: AvailableRunShopifySyncResultSelection;
    bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;
    completeShopifySync?: AvailableCompleteShopifySyncResultSelection;
    bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;
    errorShopifySync?: AvailableErrorShopifySyncResultSelection;
    bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;
    abortShopifySync?: AvailableAbortShopifySyncResultSelection;
    bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;
    createShopifyFile?: AvailableCreateShopifyFileResultSelection;
    bulkCreateShopifyFiles?: AvailableBulkCreateShopifyFilesResultSelection;
    updateShopifyFile?: AvailableUpdateShopifyFileResultSelection;
    bulkUpdateShopifyFiles?: AvailableBulkUpdateShopifyFilesResultSelection;
    hostOnShopifyTest?: AvailableHostOnShopifyTestResultSelection;
    internal?: AvailableInternalMutationsSelection;
    shopifyConnection?: AvailableShopifyConnectionMutationsSelection;
};
export type CreateShopifyProductResult = {
    __typename: 'CreateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProduct: (ShopifyProduct | null);
};
export type AvailableCreateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProduct?: AvailableShopifyProductSelection;
};
/** The output when running the create on the shopifyProduct model in bulk. */
export type BulkCreateShopifyProductsResult = {
    __typename: 'BulkCreateShopifyProductsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProducts: (ShopifyProduct | null)[];
};
export type AvailableBulkCreateShopifyProductsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProducts?: AvailableShopifyProductSelection;
};
export type UpdateShopifyProductResult = {
    __typename: 'UpdateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProduct: (ShopifyProduct | null);
};
export type AvailableUpdateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProduct?: AvailableShopifyProductSelection;
};
/** The output when running the update on the shopifyProduct model in bulk. */
export type BulkUpdateShopifyProductsResult = {
    __typename: 'BulkUpdateShopifyProductsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProducts: (ShopifyProduct | null)[];
};
export type AvailableBulkUpdateShopifyProductsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProducts?: AvailableShopifyProductSelection;
};
export type CreateShopifyProductImageResult = {
    __typename: 'CreateShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (ShopifyProductImage | null);
};
export type AvailableCreateShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: AvailableShopifyProductImageSelection;
};
/** The output when running the create on the shopifyProductImage model in bulk. */
export type BulkCreateShopifyProductImagesResult = {
    __typename: 'BulkCreateShopifyProductImagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages: (ShopifyProductImage | null)[];
};
export type AvailableBulkCreateShopifyProductImagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages?: AvailableShopifyProductImageSelection;
};
export type UpdateShopifyProductImageResult = {
    __typename: 'UpdateShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (ShopifyProductImage | null);
};
export type AvailableUpdateShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: AvailableShopifyProductImageSelection;
};
/** The output when running the update on the shopifyProductImage model in bulk. */
export type BulkUpdateShopifyProductImagesResult = {
    __typename: 'BulkUpdateShopifyProductImagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages: (ShopifyProductImage | null)[];
};
export type AvailableBulkUpdateShopifyProductImagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages?: AvailableShopifyProductImageSelection;
};
export type HostOnShopifyShopifyProductImageResult = {
    __typename: 'HostOnShopifyShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (ShopifyProductImage | null);
};
export type AvailableHostOnShopifyShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: AvailableShopifyProductImageSelection;
};
/** The output when running the hostOnShopify on the shopifyProductImage model in bulk. */
export type BulkHostOnShopifyShopifyProductImagesResult = {
    __typename: 'BulkHostOnShopifyShopifyProductImagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages: (ShopifyProductImage | null)[];
};
export type AvailableBulkHostOnShopifyShopifyProductImagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages?: AvailableShopifyProductImageSelection;
};
export type UpdateShopifyImageShopifyProductImageResult = {
    __typename: 'UpdateShopifyImageShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (ShopifyProductImage | null);
};
export type AvailableUpdateShopifyImageShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: AvailableShopifyProductImageSelection;
};
/** The output when running the updateShopifyImage on the shopifyProductImage model in bulk. */
export type BulkUpdateShopifyImageShopifyProductImagesResult = {
    __typename: 'BulkUpdateShopifyImageShopifyProductImagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages: (ShopifyProductImage | null)[];
};
export type AvailableBulkUpdateShopifyImageShopifyProductImagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyProductImage records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyProductImages?: AvailableShopifyProductImageSelection;
};
export type UpdateShopifyShopResult = {
    __typename: 'UpdateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (ShopifyShop | null);
};
export type AvailableUpdateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: AvailableShopifyShopSelection;
};
/** The output when running the update on the shopifyShop model in bulk. */
export type BulkUpdateShopifyShopsResult = {
    __typename: 'BulkUpdateShopifyShopsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyShops: (ShopifyShop | null)[];
};
export type AvailableBulkUpdateShopifyShopsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyShops?: AvailableShopifyShopSelection;
};
export type RunShopifySyncResult = {
    __typename: 'RunShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (ShopifySync | null);
};
export type AvailableRunShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {
    __typename: 'BulkRunShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkRunShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type CompleteShopifySyncResult = {
    __typename: 'CompleteShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (ShopifySync | null);
};
export type AvailableCompleteShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {
    __typename: 'BulkCompleteShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkCompleteShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type ErrorShopifySyncResult = {
    __typename: 'ErrorShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (ShopifySync | null);
};
export type AvailableErrorShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {
    __typename: 'BulkErrorShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkErrorShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type AbortShopifySyncResult = {
    __typename: 'AbortShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (ShopifySync | null);
};
export type AvailableAbortShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {
    __typename: 'BulkAbortShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkAbortShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type CreateShopifyFileResult = {
    __typename: 'CreateShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFile: (ShopifyFile | null);
};
export type AvailableCreateShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFile?: AvailableShopifyFileSelection;
};
/** The output when running the create on the shopifyFile model in bulk. */
export type BulkCreateShopifyFilesResult = {
    __typename: 'BulkCreateShopifyFilesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyFile records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyFiles: (ShopifyFile | null)[];
};
export type AvailableBulkCreateShopifyFilesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyFile records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyFiles?: AvailableShopifyFileSelection;
};
export type UpdateShopifyFileResult = {
    __typename: 'UpdateShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFile: (ShopifyFile | null);
};
export type AvailableUpdateShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFile?: AvailableShopifyFileSelection;
};
/** The output when running the update on the shopifyFile model in bulk. */
export type BulkUpdateShopifyFilesResult = {
    __typename: 'BulkUpdateShopifyFilesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifyFile records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyFiles: (ShopifyFile | null)[];
};
export type AvailableBulkUpdateShopifyFilesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifyFile records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifyFiles?: AvailableShopifyFileSelection;
};
export type HostOnShopifyTestResult = {
    __typename: 'HostOnShopifyTestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableHostOnShopifyTestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
export type InternalMutations = {
    __typename: 'InternalMutations';
    startTransaction: Scalars['String'];
    commitTransaction: Scalars['String'];
    rollbackTransaction: Scalars['String'];
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock: LockOperationResult;
    createSession: (InternalCreateSessionResult | null);
    updateSession: (InternalUpdateSessionResult | null);
    deleteSession: (InternalDeleteSessionResult | null);
    deleteManySession: (InternalDeleteManySessionResult | null);
    bulkCreateSessions: (InternalBulkCreateSessionsResult | null);
    createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);
    updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);
    deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);
    deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);
    bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);
    triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);
    triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);
    createShopifyProduct: (InternalCreateShopifyProductResult | null);
    updateShopifyProduct: (InternalUpdateShopifyProductResult | null);
    deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);
    deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);
    bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);
    triggerCreateShopifyProduct: (CreateShopifyProductResult | null);
    triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);
    triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);
    createShopifyProductImage: (InternalCreateShopifyProductImageResult | null);
    updateShopifyProductImage: (InternalUpdateShopifyProductImageResult | null);
    deleteShopifyProductImage: (InternalDeleteShopifyProductImageResult | null);
    deleteManyShopifyProductImage: (InternalDeleteManyShopifyProductImageResult | null);
    bulkCreateShopifyProductImages: (InternalBulkCreateShopifyProductImagesResult | null);
    triggerCreateShopifyProductImage: (CreateShopifyProductImageResult | null);
    triggerUpdateShopifyProductImage: (UpdateShopifyProductImageResult | null);
    triggerDeleteShopifyProductImage: (DeleteShopifyProductImageResult | null);
    triggerHostOnShopifyShopifyProductImage: (HostOnShopifyShopifyProductImageResult | null);
    triggerUpdateShopifyImageShopifyProductImage: (UpdateShopifyImageShopifyProductImageResult | null);
    createShopifyShop: (InternalCreateShopifyShopResult | null);
    updateShopifyShop: (InternalUpdateShopifyShopResult | null);
    deleteShopifyShop: (InternalDeleteShopifyShopResult | null);
    deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);
    bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);
    triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);
    triggerInstallShopifyShop: (InstallShopifyShopResult | null);
    triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);
    triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);
    createShopifySync: (InternalCreateShopifySyncResult | null);
    updateShopifySync: (InternalUpdateShopifySyncResult | null);
    deleteShopifySync: (InternalDeleteShopifySyncResult | null);
    deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);
    bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);
    triggerRunShopifySync: (RunShopifySyncResult | null);
    triggerCompleteShopifySync: (CompleteShopifySyncResult | null);
    triggerErrorShopifySync: (ErrorShopifySyncResult | null);
    triggerAbortShopifySync: (AbortShopifySyncResult | null);
    createShopifyFile: (InternalCreateShopifyFileResult | null);
    updateShopifyFile: (InternalUpdateShopifyFileResult | null);
    deleteShopifyFile: (InternalDeleteShopifyFileResult | null);
    deleteManyShopifyFile: (InternalDeleteManyShopifyFileResult | null);
    bulkCreateShopifyFiles: (InternalBulkCreateShopifyFilesResult | null);
    triggerCreateShopifyFile: (CreateShopifyFileResult | null);
    triggerUpdateShopifyFile: (UpdateShopifyFileResult | null);
    triggerDeleteShopifyFile: (DeleteShopifyFileResult | null);
    triggerHostOnShopifyTest: (HostOnShopifyTestResult | null);
    triggerScheduledShopifySync: (ScheduledShopifySyncResult | null);
};
export type AvailableInternalMutationsSelection = {
    __typename?: boolean | null | undefined;
    startTransaction?: boolean | null | undefined;
    commitTransaction?: boolean | null | undefined;
    rollbackTransaction?: boolean | null | undefined;
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock?: AvailableLockOperationResultSelection;
    createSession?: AvailableInternalCreateSessionResultSelection;
    updateSession?: AvailableInternalUpdateSessionResultSelection;
    deleteSession?: AvailableInternalDeleteSessionResultSelection;
    deleteManySession?: AvailableInternalDeleteManySessionResultSelection;
    bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;
    createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;
    updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;
    deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;
    deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;
    bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;
    triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;
    triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;
    createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;
    updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;
    deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;
    deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;
    bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;
    triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;
    triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;
    triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;
    createShopifyProductImage?: AvailableInternalCreateShopifyProductImageResultSelection;
    updateShopifyProductImage?: AvailableInternalUpdateShopifyProductImageResultSelection;
    deleteShopifyProductImage?: AvailableInternalDeleteShopifyProductImageResultSelection;
    deleteManyShopifyProductImage?: AvailableInternalDeleteManyShopifyProductImageResultSelection;
    bulkCreateShopifyProductImages?: AvailableInternalBulkCreateShopifyProductImagesResultSelection;
    triggerCreateShopifyProductImage?: AvailableCreateShopifyProductImageResultSelection;
    triggerUpdateShopifyProductImage?: AvailableUpdateShopifyProductImageResultSelection;
    triggerDeleteShopifyProductImage?: AvailableDeleteShopifyProductImageResultSelection;
    triggerHostOnShopifyShopifyProductImage?: AvailableHostOnShopifyShopifyProductImageResultSelection;
    triggerUpdateShopifyImageShopifyProductImage?: AvailableUpdateShopifyImageShopifyProductImageResultSelection;
    createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;
    updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;
    deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;
    deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;
    bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;
    triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;
    triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;
    triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;
    triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;
    createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;
    updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;
    deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;
    deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;
    bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;
    triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;
    triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;
    triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;
    triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;
    createShopifyFile?: AvailableInternalCreateShopifyFileResultSelection;
    updateShopifyFile?: AvailableInternalUpdateShopifyFileResultSelection;
    deleteShopifyFile?: AvailableInternalDeleteShopifyFileResultSelection;
    deleteManyShopifyFile?: AvailableInternalDeleteManyShopifyFileResultSelection;
    bulkCreateShopifyFiles?: AvailableInternalBulkCreateShopifyFilesResultSelection;
    triggerCreateShopifyFile?: AvailableCreateShopifyFileResultSelection;
    triggerUpdateShopifyFile?: AvailableUpdateShopifyFileResultSelection;
    triggerDeleteShopifyFile?: AvailableDeleteShopifyFileResultSelection;
    triggerHostOnShopifyTest?: AvailableHostOnShopifyTestResultSelection;
    triggerScheduledShopifySync?: AvailableScheduledShopifySyncResultSelection;
};
export type LockOperationResult = {
    __typename: 'LockOperationResult';
    /** Whether the lock operation succeeded */
    success: Scalars['Boolean'];
    /** Any errors encountered during the locking/unlocking operation */
    errors: ExecutionError[];
};
export type AvailableLockOperationResultSelection = {
    __typename?: boolean | null | undefined;
    /** Whether the lock operation succeeded */
    success?: boolean | null | undefined;
    /** Any errors encountered during the locking/unlocking operation */
    errors?: AvailableExecutionErrorSelection;
};
export type InternalCreateSessionResult = {
    __typename: 'InternalCreateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalCreateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalUpdateSessionResult = {
    __typename: 'InternalUpdateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalUpdateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalDeleteSessionResult = {
    __typename: 'InternalDeleteSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalDeleteSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalDeleteManySessionResult = {
    __typename: 'InternalDeleteManySessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManySessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateSessionsResult = {
    __typename: 'InternalBulkCreateSessionsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    sessions: (InternalSessionRecord | null)[];
};
export type AvailableInternalBulkCreateSessionsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    sessions?: boolean | null | undefined;
};
export type InternalCreateShopifyGdprRequestResult = {
    __typename: 'InternalCreateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalCreateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalUpdateShopifyGdprRequestResult = {
    __typename: 'InternalUpdateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalDeleteShopifyGdprRequestResult = {
    __typename: 'InternalDeleteShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyGdprRequestResult = {
    __typename: 'InternalDeleteManyShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyGdprRequestsResult = {
    __typename: 'InternalBulkCreateShopifyGdprRequestsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequests?: boolean | null | undefined;
};
export type CreateShopifyGdprRequestResult = {
    __typename: 'CreateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequest: (ShopifyGdprRequest | null);
};
export type AvailableCreateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};
export type UpdateShopifyGdprRequestResult = {
    __typename: 'UpdateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequest: (ShopifyGdprRequest | null);
};
export type AvailableUpdateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};
export type InternalCreateShopifyProductResult = {
    __typename: 'InternalCreateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalCreateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalUpdateShopifyProductResult = {
    __typename: 'InternalUpdateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalUpdateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalDeleteShopifyProductResult = {
    __typename: 'InternalDeleteShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalDeleteShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyProductResult = {
    __typename: 'InternalDeleteManyShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyProductsResult = {
    __typename: 'InternalBulkCreateShopifyProductsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProducts: (InternalShopifyProductRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyProductsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProducts?: boolean | null | undefined;
};
export type DeleteShopifyProductResult = {
    __typename: 'DeleteShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalCreateShopifyProductImageResult = {
    __typename: 'InternalCreateShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (InternalShopifyProductImageRecord | null);
};
export type AvailableInternalCreateShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: boolean | null | undefined;
};
export type InternalUpdateShopifyProductImageResult = {
    __typename: 'InternalUpdateShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (InternalShopifyProductImageRecord | null);
};
export type AvailableInternalUpdateShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: boolean | null | undefined;
};
export type InternalDeleteShopifyProductImageResult = {
    __typename: 'InternalDeleteShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImage: (InternalShopifyProductImageRecord | null);
};
export type AvailableInternalDeleteShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImage?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyProductImageResult = {
    __typename: 'InternalDeleteManyShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyProductImagesResult = {
    __typename: 'InternalBulkCreateShopifyProductImagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProductImages: (InternalShopifyProductImageRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyProductImagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProductImages?: boolean | null | undefined;
};
export type DeleteShopifyProductImageResult = {
    __typename: 'DeleteShopifyProductImageResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteShopifyProductImageResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalCreateShopifyShopResult = {
    __typename: 'InternalCreateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalCreateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: boolean | null | undefined;
};
export type InternalUpdateShopifyShopResult = {
    __typename: 'InternalUpdateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalUpdateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: boolean | null | undefined;
};
export type InternalDeleteShopifyShopResult = {
    __typename: 'InternalDeleteShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalDeleteShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyShopResult = {
    __typename: 'InternalDeleteManyShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyShopsResult = {
    __typename: 'InternalBulkCreateShopifyShopsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShops: (InternalShopifyShopRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyShopsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShops?: boolean | null | undefined;
};
export type InstallShopifyShopResult = {
    __typename: 'InstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (ShopifyShop | null);
};
export type AvailableInstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type UninstallShopifyShopResult = {
    __typename: 'UninstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (ShopifyShop | null);
};
export type AvailableUninstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type ReinstallShopifyShopResult = {
    __typename: 'ReinstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShop: (ShopifyShop | null);
};
export type AvailableReinstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type InternalCreateShopifySyncResult = {
    __typename: 'InternalCreateShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalCreateShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: boolean | null | undefined;
};
export type InternalUpdateShopifySyncResult = {
    __typename: 'InternalUpdateShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalUpdateShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: boolean | null | undefined;
};
export type InternalDeleteShopifySyncResult = {
    __typename: 'InternalDeleteShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalDeleteShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySync?: boolean | null | undefined;
};
export type InternalDeleteManyShopifySyncResult = {
    __typename: 'InternalDeleteManyShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifySyncsResult = {
    __typename: 'InternalBulkCreateShopifySyncsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySyncs: (InternalShopifySyncRecord | null)[];
};
export type AvailableInternalBulkCreateShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySyncs?: boolean | null | undefined;
};
export type InternalCreateShopifyFileResult = {
    __typename: 'InternalCreateShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFile: (InternalShopifyFileRecord | null);
};
export type AvailableInternalCreateShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFile?: boolean | null | undefined;
};
export type InternalUpdateShopifyFileResult = {
    __typename: 'InternalUpdateShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFile: (InternalShopifyFileRecord | null);
};
export type AvailableInternalUpdateShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFile?: boolean | null | undefined;
};
export type InternalDeleteShopifyFileResult = {
    __typename: 'InternalDeleteShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFile: (InternalShopifyFileRecord | null);
};
export type AvailableInternalDeleteShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFile?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyFileResult = {
    __typename: 'InternalDeleteManyShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyFilesResult = {
    __typename: 'InternalBulkCreateShopifyFilesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyFiles: (InternalShopifyFileRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyFilesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyFiles?: boolean | null | undefined;
};
export type DeleteShopifyFileResult = {
    __typename: 'DeleteShopifyFileResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteShopifyFileResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type ScheduledShopifySyncResult = {
    __typename: 'ScheduledShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableScheduledShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
export type ShopifyConnectionMutations = {
    __typename: 'ShopifyConnectionMutations';
    fetchOrInstallShop: (ShopifyConnectionFetchOrInstallShopResult | null);
};
export type AvailableShopifyConnectionMutationsSelection = {
    __typename?: boolean | null | undefined;
    fetchOrInstallShop?: AvailableShopifyConnectionFetchOrInstallShopResultSelection;
};
export type ShopifyConnectionFetchOrInstallShopResult = {
    __typename: 'ShopifyConnectionFetchOrInstallShopResult';
    isAuthenticated: Scalars['Boolean'];
    redirectToOauth: Scalars['Boolean'];
    missingScopes: Scalars['String'][];
};
export type AvailableShopifyConnectionFetchOrInstallShopResultSelection = {
    __typename?: boolean | null | undefined;
    isAuthenticated?: boolean | null | undefined;
    redirectToOauth?: boolean | null | undefined;
    missingScopes?: boolean | null | undefined;
};
export type ExplicitNestingRequired = never;
export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;
/**
 * Given a schema we can select values from, apply a given selection to that schema to get the output type.
 **/
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined ? never : Schema extends (infer T)[] ? Select<T, Selection>[] : Schema extends null ? Select<Exclude<Schema, null>, Selection> | null : {
    [Key in keyof Selection & keyof Schema]: Selection[Key] extends true ? Schema[Key] : Selection[Key] extends FieldSelection ? Select<Schema[Key], Selection[Key]> : never;
};
export type IDsList = {
    ids: string[];
};
/**
 * For finder functions which accept the `live: true` argument, this type decides if the return type will be one value or an async iterable stream of values
 * If {live: true}, returns an AsyncIterable<Result>
 * Anything else, returns a Promise<Result>
 **/
export type PromiseOrLiveIterator<Options extends {
    live?: boolean;
}, Result> = Options extends {
    live: true;
} ? AsyncIterable<Result> : Promise<Result>;
export {};
