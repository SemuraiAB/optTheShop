import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyProductImage, ShopifyProductImageSort, ShopifyProductImageFilter, AvailableShopifyProductImageSelection, CreateShopifyProductImageInput, UpdateShopifyProductImageInput, HostOnShopifyShopifyProductImageInput, UpdateShopifyImageShopifyProductImageInput } from "../types.js";
export declare const DefaultShopifyProductImageSelection: {
    readonly __typename: true;
    readonly alt: true;
    readonly createdAt: true;
    readonly height: true;
    readonly id: true;
    readonly position: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly source: true;
    readonly updatedAt: true;
    readonly width: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProductImage". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProductImageOrDefault<Options extends Selectable<AvailableShopifyProductImageSelection>> = DeepFilterNever<Select<ShopifyProductImage, DefaultSelection<AvailableShopifyProductImageSelection, Options, typeof DefaultShopifyProductImageSelection>>>;
/** Options that can be passed to the `ShopifyProductImageManager#findOne` method */
export interface FindOneShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
/** Options that can be passed to the `ShopifyProductImageManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
/** Options that can be passed to the `ShopifyProductImageManager#findMany` method */
export interface FindManyShopifyProductImagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyProductImageManager#findFirst` method */
export interface FindFirstShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyProductImageManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
export interface UpdateShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
export interface HostOnShopifyShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
export interface UpdateShopifyImageShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyProductImageVariables = {
    shopifyProductImage?: CreateShopifyProductImageInput;
};
/**
 * The inputs for executing create on shopifyProductImage.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyProductImageVariables = CreateShopifyProductImageInput;
/**
 * The return value from executing create on shopifyProductImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyProductImageResult<Options extends CreateShopifyProductImageOptions> = SelectedShopifyProductImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyProductImage<Options extends CreateShopifyProductImageOptions>(variables: CreateShopifyProductImageVariables, options?: LimitToKnownKeys<Options, CreateShopifyProductImageOptions>): Promise<CreateShopifyProductImageResult<Options>>;
declare function createShopifyProductImage<Options extends CreateShopifyProductImageOptions>(variables: FullyQualifiedCreateShopifyProductImageVariables, options?: LimitToKnownKeys<Options, CreateShopifyProductImageOptions>): Promise<CreateShopifyProductImageResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyProductImageVariables = {
    shopifyProductImage?: UpdateShopifyProductImageInput;
};
/**
 * The inputs for executing update on shopifyProductImage.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyProductImageVariables = UpdateShopifyProductImageInput;
/**
 * The return value from executing update on shopifyProductImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyProductImageResult<Options extends UpdateShopifyProductImageOptions> = SelectedShopifyProductImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyProductImage<Options extends UpdateShopifyProductImageOptions>(id: string, variables: UpdateShopifyProductImageVariables, options?: LimitToKnownKeys<Options, UpdateShopifyProductImageOptions>): Promise<UpdateShopifyProductImageResult<Options>>;
declare function updateShopifyProductImage<Options extends UpdateShopifyProductImageOptions>(id: string, variables: FullyQualifiedUpdateShopifyProductImageVariables, options?: LimitToKnownKeys<Options, UpdateShopifyProductImageOptions>): Promise<UpdateShopifyProductImageResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedHostOnShopifyShopifyProductImageVariables = {
    shopifyProductImage?: HostOnShopifyShopifyProductImageInput;
};
/**
 * The inputs for executing hostOnShopify on shopifyProductImage.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type HostOnShopifyShopifyProductImageVariables = HostOnShopifyShopifyProductImageInput;
/**
 * The return value from executing hostOnShopify on shopifyProductImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type HostOnShopifyShopifyProductImageResult<Options extends HostOnShopifyShopifyProductImageOptions> = SelectedShopifyProductImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>;
/**
  * Executes the hostOnShopify action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function hostOnShopifyShopifyProductImage<Options extends HostOnShopifyShopifyProductImageOptions>(variables: HostOnShopifyShopifyProductImageVariables, options?: LimitToKnownKeys<Options, HostOnShopifyShopifyProductImageOptions>): Promise<HostOnShopifyShopifyProductImageResult<Options>>;
declare function hostOnShopifyShopifyProductImage<Options extends HostOnShopifyShopifyProductImageOptions>(variables: FullyQualifiedHostOnShopifyShopifyProductImageVariables, options?: LimitToKnownKeys<Options, HostOnShopifyShopifyProductImageOptions>): Promise<HostOnShopifyShopifyProductImageResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyImageShopifyProductImageVariables = {
    shopifyProductImage?: UpdateShopifyImageShopifyProductImageInput;
};
/**
 * The inputs for executing updateShopifyImage on shopifyProductImage.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyImageShopifyProductImageVariables = UpdateShopifyImageShopifyProductImageInput;
/**
 * The return value from executing updateShopifyImage on shopifyProductImage.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyImageShopifyProductImageResult<Options extends UpdateShopifyImageShopifyProductImageOptions> = SelectedShopifyProductImageOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>;
/**
  * Executes the updateShopifyImage action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyImageShopifyProductImage<Options extends UpdateShopifyImageShopifyProductImageOptions>(id: string, variables: UpdateShopifyImageShopifyProductImageVariables, options?: LimitToKnownKeys<Options, UpdateShopifyImageShopifyProductImageOptions>): Promise<UpdateShopifyImageShopifyProductImageResult<Options>>;
declare function updateShopifyImageShopifyProductImage<Options extends UpdateShopifyImageShopifyProductImageOptions>(id: string, variables: FullyQualifiedUpdateShopifyImageShopifyProductImageVariables, options?: LimitToKnownKeys<Options, UpdateShopifyImageShopifyProductImageOptions>): Promise<UpdateShopifyImageShopifyProductImageResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyProductImage" */
export declare class ShopifyProductImageManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyProductImageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyProductImage";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindOneShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyProductImageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyProductImage";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: MaybeFindOneShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds many shopifyProductImage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyProductImagesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductImagesOptions>): Promise<GadgetRecordList<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindManyShopifyProductImagesOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyProductImageOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindFirstShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyProductImageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: MaybeFindFirstShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    create: typeof createShopifyProductImage & {
        type: "action";
        operationName: "createShopifyProductImage";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImage";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: CreateShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: ((FullyQualifiedCreateShopifyProductImageVariables | CreateShopifyProductImageVariables)) | undefined;
        variables: {
            "shopifyProductImage": {
                required: false;
                type: "CreateShopifyProductImageInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkCreate action with the given inputs.
*/
    bulkCreate: {
        <Options extends CreateShopifyProductImageOptions>(inputs: (FullyQualifiedCreateShopifyProductImageVariables | CreateShopifyProductImageVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyProductImageOptions>): Promise<CreateShopifyProductImageResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyProductImages";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImages";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: CreateShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: (FullyQualifiedCreateShopifyProductImageVariables | CreateShopifyProductImageVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyProductImagesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyProductImage & {
        type: "action";
        operationName: "updateShopifyProductImage";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImage";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: UpdateShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyProductImageVariables | UpdateShopifyProductImageVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyProductImage": {
                required: false;
                type: "UpdateShopifyProductImageInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkUpdate action with the given inputs.
*/
    bulkUpdate: {
        <Options extends UpdateShopifyProductImageOptions>(inputs: (FullyQualifiedUpdateShopifyProductImageVariables | UpdateShopifyProductImageVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyProductImageOptions>): Promise<UpdateShopifyProductImageResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyProductImages";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImages";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: UpdateShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: (FullyQualifiedUpdateShopifyProductImageVariables | UpdateShopifyProductImageVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyProductImagesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    hostOnShopify: typeof hostOnShopifyShopifyProductImage & {
        type: "action";
        operationName: "hostOnShopifyShopifyProductImage";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImage";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: HostOnShopifyShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: ((FullyQualifiedHostOnShopifyShopifyProductImageVariables | HostOnShopifyShopifyProductImageVariables)) | undefined;
        variables: {
            "shopifyProductImage": {
                required: false;
                type: "HostOnShopifyShopifyProductImageInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkHostOnShopify action with the given inputs.
*/
    bulkHostOnShopify: {
        <Options extends HostOnShopifyShopifyProductImageOptions>(inputs: (FullyQualifiedHostOnShopifyShopifyProductImageVariables | HostOnShopifyShopifyProductImageVariables)[], options?: LimitToKnownKeys<Options, HostOnShopifyShopifyProductImageOptions>): Promise<HostOnShopifyShopifyProductImageResult<Options>[]>;
        type: "action";
        operationName: "bulkHostOnShopifyShopifyProductImages";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImages";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: HostOnShopifyShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: (FullyQualifiedHostOnShopifyShopifyProductImageVariables | HostOnShopifyShopifyProductImageVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkHostOnShopifyShopifyProductImagesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    updateShopifyImage: typeof updateShopifyImageShopifyProductImage & {
        type: "action";
        operationName: "updateShopifyImageShopifyProductImage";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImage";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: UpdateShopifyImageShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyImageShopifyProductImageVariables | UpdateShopifyImageShopifyProductImageVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyProductImage": {
                required: false;
                type: "UpdateShopifyImageShopifyProductImageInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkUpdateShopifyImage action with the given inputs.
*/
    bulkUpdateShopifyImage: {
        <Options extends UpdateShopifyImageShopifyProductImageOptions>(inputs: (FullyQualifiedUpdateShopifyImageShopifyProductImageVariables | UpdateShopifyImageShopifyProductImageVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyImageShopifyProductImageOptions>): Promise<UpdateShopifyImageShopifyProductImageResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyImageShopifyProductImages";
        namespace: null;
        modelApiIdentifier: "shopifyProductImage";
        modelSelectionField: "shopifyProductImages";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: UpdateShopifyImageShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
        variablesType: (FullyQualifiedUpdateShopifyImageShopifyProductImageVariables | UpdateShopifyImageShopifyProductImageVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyImageShopifyProductImagesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
