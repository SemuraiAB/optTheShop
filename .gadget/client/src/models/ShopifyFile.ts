import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      ShopifyFile,
      ShopifyFileSort,
      ShopifyFileFilter,
      AvailableShopifyFileSelection,
      CreateShopifyFileInput,
      UpdateShopifyFileInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFileSelection = {
  "__typename": true,
  "alt": true,
  "createdAt": true,
  "duration": true,
  "fileErrors": true,
  "fileStatus": true,
  "id": true,
  "image": true,
  "originalFileSize": true,
  "originalSource": true,
  "preview": true,
  "shopifyCreatedAt": true,
  "sources": true,
  "test": {
    "mimeType": true,
    "url": true
  },
  "type": true,
  "updatedAt": true,
  "url": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFile". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFileOrDefault<Options extends Selectable<AvailableShopifyFileSelection>> = DeepFilterNever<
  Select<
    ShopifyFile,
    DefaultSelection<
      AvailableShopifyFileSelection,
      Options,
      typeof DefaultShopifyFileSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFileManager#findOne` method */
export interface FindOneShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};

/** Options that can be passed to the `ShopifyFileManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};

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
};

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
};

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
};


export interface CreateShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};


export interface UpdateShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};


const apiIdentifier = "shopifyFile";
const pluralApiIdentifier = "shopifyFiles";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyFileVariables = {
          shopifyFile?: CreateShopifyFileInput,
      }

  /**
   * The inputs for executing create on shopifyFile.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyFileVariables = CreateShopifyFileInput;



/**
 * The return value from executing create on shopifyFile.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFileResult<Options extends CreateShopifyFileOptions> =
  SelectedShopifyFileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFileOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyFile<Options extends CreateShopifyFileOptions>(
  
    variables: CreateShopifyFileVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>
): Promise<CreateShopifyFileResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyFile<Options extends CreateShopifyFileOptions>(
  
      variables: FullyQualifiedCreateShopifyFileVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>
): Promise<CreateShopifyFileResult<Options>>;

// Function implementation
async function createShopifyFile<Options extends CreateShopifyFileOptions>(
  this: ShopifyFileManager,
  
      variables: CreateShopifyFileVariables | FullyQualifiedCreateShopifyFileVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>
): Promise<CreateShopifyFileResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

    
  return (await actionRunner<SelectedShopifyFileOrDefault<Options>>(
    this,
    "createShopifyFile",
    DefaultShopifyFileSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyFile": {
          value: newVariables.shopifyFile,
          required: false,
          type: "CreateShopifyFileInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateShopifyFileVariables = {
          shopifyFile?: UpdateShopifyFileInput,
      }

  /**
   * The inputs for executing update on shopifyFile.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyFileVariables = UpdateShopifyFileInput;



/**
 * The return value from executing update on shopifyFile.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFileResult<Options extends UpdateShopifyFileOptions> =
  SelectedShopifyFileOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFileOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyFile<Options extends UpdateShopifyFileOptions>(
  id: string,
    variables: UpdateShopifyFileVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>
): Promise<UpdateShopifyFileResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyFile<Options extends UpdateShopifyFileOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyFileVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>
): Promise<UpdateShopifyFileResult<Options>>;

// Function implementation
async function updateShopifyFile<Options extends UpdateShopifyFileOptions>(
  this: ShopifyFileManager,
  id: string,
      variables: UpdateShopifyFileVariables | FullyQualifiedUpdateShopifyFileVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>
): Promise<UpdateShopifyFileResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

    
  return (await actionRunner<SelectedShopifyFileOrDefault<Options>>(
    this,
    "updateShopifyFile",
    DefaultShopifyFileSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyFile": {
          value: newVariables.shopifyFile,
          required: false,
          type: "UpdateShopifyFileInput",
        },
          },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "shopifyFile" */
export class ShopifyFileManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFile";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindOneShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFileOptions>): Promise<
  GadgetRecord<
    SelectedShopifyFileOrDefault<Options>
  >
> => {
    return await findOneRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFile",
      id,
      DefaultShopifyFileSelection,
      apiIdentifier,
      options
    ) as any;
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFile",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
)

  
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFile";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: MaybeFindOneShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFileOptions>) => {
    const record = await findOneRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFile",
      id,
      DefaultShopifyFileSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFile",
    modelApiIdentifier: "shopifyFile",
    defaultSelection: DefaultShopifyFileSelection,
  } as any
)

  
    /**
 * Finds many shopifyFile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindManyShopifyFilesOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindManyShopifyFilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFileOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      "shopifyFile",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindFirstShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: MaybeFindFirstShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
    create = Object.assign(createShopifyFile,
  {
    type: "action",
    operationName: "createShopifyFile",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFileSelection,
    variables: {
      "shopifyFile": {
        required: false,
        type: "CreateShopifyFileInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createShopifyFile";
    namespace: null;
    modelApiIdentifier: "shopifyFile";
    modelSelectionField: "shopifyFile";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFileSelection;
    selectionType: AvailableShopifyFileSelection;
    optionsType: CreateShopifyFileOptions;
    schemaType:  Query["shopifyFile"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyFileVariables          | CreateShopifyFileVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
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
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateShopifyFileOptions>(
        inputs: (FullyQualifiedCreateShopifyFileVariables | CreateShopifyFileVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>
    ): Promise<CreateShopifyFileResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends CreateShopifyFileOptions>(
        inputs: (FullyQualifiedCreateShopifyFileVariables | CreateShopifyFileVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFileOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkCreateShopifyFiles",
        DefaultShopifyFileSelection,
        "shopifyFile",
        "shopifyFiles",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyFiles",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFiles",
      isBulk: true,
      defaultSelection: DefaultShopifyFileSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyFilesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyFile,
  {
    type: "action",
    operationName: "updateShopifyFile",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFileSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyFile": {
        required: false,
        type: "UpdateShopifyFileInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateShopifyFile";
    namespace: null;
    modelApiIdentifier: "shopifyFile";
    modelSelectionField: "shopifyFile";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFileSelection;
    selectionType: AvailableShopifyFileSelection;
    optionsType: UpdateShopifyFileOptions;
    schemaType:  Query["shopifyFile"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyFileVariables          | UpdateShopifyFileVariables      )
    )
    ;
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
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateShopifyFileOptions>(
        inputs: (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>
    ): Promise<UpdateShopifyFileResult<Options>[]>;
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
    variablesType: (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyFilesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyFileOptions>(
        inputs: (FullyQualifiedUpdateShopifyFileVariables | UpdateShopifyFileVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFileOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkUpdateShopifyFiles",
        DefaultShopifyFileSelection,
        "shopifyFile",
        "shopifyFiles",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyFiles",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFiles",
      isBulk: true,
      defaultSelection: DefaultShopifyFileSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyFilesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
}
