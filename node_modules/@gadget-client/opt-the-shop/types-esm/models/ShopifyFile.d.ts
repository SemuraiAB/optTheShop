import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyFile, ShopifyFileSort, ShopifyFileFilter, AvailableShopifyFileSelection, CreateShopifyFileInput, UpdateShopifyFileInput } from "../types.js";
export declare const DefaultShopifyFileSelection: {
    readonly __typename: true;
    readonly alt: true;
    readonly createdAt: true;
    readonly duration: true;
    readonly fileErrors: true;
    readonly fileStatus: true;
    readonly id: true;
    readonly image: true;
    readonly originalFileSize: true;
    readonly originalSource: true;
    readonly preview: true;
    readonly shopifyCreatedAt: true;
    readonly sources: true;
    readonly test: {
        readonly mimeType: true;
        readonly url: true;
    };
    readonly type: true;
    readonly updatedAt: true;
    readonly url: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFile". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFileOrDefault<Options extends Selectable<AvailableShopifyFileSelection>> = DeepFilterNever<Select<ShopifyFile, DefaultSelection<AvailableShopifyFileSelection, Options, typeof DefaultShopifyFileSelection>>>;
/** Options that can be passed to the `ShopifyFileManager#findOne` method */
export interface FindOneShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
}
/** Options that can be passed to the `ShopifyFileManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
}
/** Options that can be passed to the `ShopifyFileManager#findMany` method */
export interface FindManyShopifyFilesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFileSort | ShopifyFileSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFileManager#findFirst` method */
export interface FindFirstShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFileSort | ShopifyFileSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFileManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFileSort | ShopifyFileSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
}
export interface UpdateShopifyFileOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFileSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyFileVariables = {
    shopifyFile?: CreateShopifyFileInput;
};
/**
 * The inputs for executing create on shopifyFile.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyFileVariables = CreateShopifyFileInput;
/**
 * The return value from executing create on shopifyFile.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFileResult<Options extends CreateShopifyFileOptions> = SelectedShopifyFileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFileOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyFile<Options extends CreateShopifyFileOptions>(variables: CreateShopifyFileVariables, options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>): Promise<CreateShopifyFileResult<Options>>;
declare function createShopifyFile<Options extends CreateShopifyFileOptions>(variables: FullyQualifiedCreateShopifyFileVariables, options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>): Promise<CreateShopifyFileResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyFileVariables = {
    shopifyFile?: UpdateShopifyFileInput;
};
/**
 * The inputs for executing update on shopifyFile.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyFileVariables = UpdateShopifyFileInput;
/**
 * The return value from executing update on shopifyFile.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFileResult<Options extends UpdateShopifyFileOptions> = SelectedShopifyFileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFileOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyFile<Options extends UpdateShopifyFileOptions>(id: string, variables: UpdateShopifyFileVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>): Promise<UpdateShopifyFileResult<Options>>;
declare function updateShopifyFile<Options extends UpdateShopifyFileOptions>(id: string, variables: FullyQualifiedUpdateShopifyFileVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>): Promise<UpdateShopifyFileResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyFile" */
export declare class ShopifyFileManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFileOptions>): Promise<GadgetRecord<SelectedShopifyFileOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFile";
        modelApiIdentifier: "shopifyFile";
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: FindOneShopifyFileOptions;
        schemaType: Query["shopifyFile"];
    };
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFileOptions>): Promise<GadgetRecord<SelectedShopifyFileOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFile";
        modelApiIdentifier: "shopifyFile";
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: MaybeFindOneShopifyFileOptions;
        schemaType: Query["shopifyFile"];
    };
    /**
 * Finds many shopifyFile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFilesOptions>): Promise<GadgetRecordList<SelectedShopifyFileOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFiles";
        modelApiIdentifier: "shopifyFile";
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: FindManyShopifyFilesOptions;
        schemaType: Query["shopifyFile"];
    };
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFileOptions>): Promise<GadgetRecord<SelectedShopifyFileOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFiles";
        modelApiIdentifier: "shopifyFile";
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: FindFirstShopifyFileOptions;
        schemaType: Query["shopifyFile"];
    };
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFileOptions>): Promise<GadgetRecord<SelectedShopifyFileOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFiles";
        modelApiIdentifier: "shopifyFile";
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: MaybeFindFirstShopifyFileOptions;
        schemaType: Query["shopifyFile"];
    };
    create: typeof createShopifyFile & {
        type: "action";
        operationName: "createShopifyFile";
        namespace: null;
        modelApiIdentifier: "shopifyFile";
        modelSelectionField: "shopifyFile";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: CreateShopifyFileOptions;
        schemaType: Query["shopifyFile"];
        variablesType: ((FullyQualifiedCreateShopifyFileVariables | CreateShopifyFileVariables)) | undefined;
        variables: {
            "shopifyFile": {
                required: false;
                type: "CreateShopifyFileInput";
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
        <Options extends CreateShopifyFileOptions>(inputs: (FullyQualifiedCreateShopifyFileVariables | CreateShopifyFileVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>): Promise<CreateShopifyFileResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyFiles";
        namespace: null;
        modelApiIdentifier: "shopifyFile";
        modelSelectionField: "shopifyFiles";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: CreateShopifyFileOptions;
        schemaType: Query["shopifyFile"];
        variablesType: (FullyQualifiedCreateShopifyFileVariables | CreateShopifyFileVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyFilesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyFile & {
        type: "action";
        operationName: "updateShopifyFile";
        namespace: null;
        modelApiIdentifier: "shopifyFile";
        modelSelectionField: "shopifyFile";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: UpdateShopifyFileOptions;
        schemaType: Query["shopifyFile"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyFile": {
                required: false;
                type: "UpdateShopifyFileInput";
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
        <Options extends UpdateShopifyFileOptions>(inputs: (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>): Promise<UpdateShopifyFileResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyFiles";
        namespace: null;
        modelApiIdentifier: "shopifyFile";
        modelSelectionField: "shopifyFiles";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFileSelection;
        selectionType: AvailableShopifyFileSelection;
        optionsType: UpdateShopifyFileOptions;
        schemaType: Query["shopifyFile"];
        variablesType: (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyFilesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
