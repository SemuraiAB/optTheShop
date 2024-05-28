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
      ShopifyProduct,
      ShopifyProductSort,
      ShopifyProductFilter,
      AvailableShopifyProductSelection,
      CreateShopifyProductInput,
      UpdateShopifyProductInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyProductSelection = {
  "__typename": true,
  "body": true,
  "compareAtPriceRange": true,
  "createdAt": true,
  "handle": true,
  "id": true,
  "productCategory": true,
  "productType": true,
  "publishedAt": true,
  "publishedScope": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "tags": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true,
  "vendor": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProduct". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProductOrDefault<Options extends Selectable<AvailableShopifyProductSelection>> = DeepFilterNever<
  Select<
    ShopifyProduct,
    DefaultSelection<
      AvailableShopifyProductSelection,
      Options,
      typeof DefaultShopifyProductSelection
    >
  >>;

/** Options that can be passed to the `ShopifyProductManager#findOne` method */
export interface FindOneShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};

/** Options that can be passed to the `ShopifyProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};

/** Options that can be passed to the `ShopifyProductManager#findMany` method */
export interface FindManyShopifyProductsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductSort | ShopifyProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyProductManager#findFirst` method */
export interface FindFirstShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductSort | ShopifyProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyProductManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductSort | ShopifyProductSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};


export interface UpdateShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};


const apiIdentifier = "shopifyProduct";
const pluralApiIdentifier = "shopifyProducts";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyProductVariables = {
          shopifyProduct?: CreateShopifyProductInput,
      }

  /**
   * The inputs for executing create on shopifyProduct.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyProductVariables = CreateShopifyProductInput;



/**
 * The return value from executing create on shopifyProduct.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyProductResult<Options extends CreateShopifyProductOptions> =
  SelectedShopifyProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyProduct<Options extends CreateShopifyProductOptions>(
  
    variables: CreateShopifyProductVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyProductOptions>
): Promise<CreateShopifyProductResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyProduct<Options extends CreateShopifyProductOptions>(
  
      variables: FullyQualifiedCreateShopifyProductVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyProductOptions>
): Promise<CreateShopifyProductResult<Options>>;

// Function implementation
async function createShopifyProduct<Options extends CreateShopifyProductOptions>(
  this: ShopifyProductManager,
  
      variables: CreateShopifyProductVariables | FullyQualifiedCreateShopifyProductVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyProductOptions>
): Promise<CreateShopifyProductResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

    
  return (await actionRunner<SelectedShopifyProductOrDefault<Options>>(
    this,
    "createShopifyProduct",
    DefaultShopifyProductSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyProduct": {
          value: newVariables.shopifyProduct,
          required: false,
          type: "CreateShopifyProductInput",
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
  export type FullyQualifiedUpdateShopifyProductVariables = {
          shopifyProduct?: UpdateShopifyProductInput,
      }

  /**
   * The inputs for executing update on shopifyProduct.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyProductVariables = UpdateShopifyProductInput;



/**
 * The return value from executing update on shopifyProduct.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyProductResult<Options extends UpdateShopifyProductOptions> =
  SelectedShopifyProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyProductOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyProduct<Options extends UpdateShopifyProductOptions>(
  id: string,
    variables: UpdateShopifyProductVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyProductOptions>
): Promise<UpdateShopifyProductResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyProduct<Options extends UpdateShopifyProductOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyProductVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyProductOptions>
): Promise<UpdateShopifyProductResult<Options>>;

// Function implementation
async function updateShopifyProduct<Options extends UpdateShopifyProductOptions>(
  this: ShopifyProductManager,
  id: string,
      variables: UpdateShopifyProductVariables | FullyQualifiedUpdateShopifyProductVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyProductOptions>
): Promise<UpdateShopifyProductResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

    
  return (await actionRunner<SelectedShopifyProductOrDefault<Options>>(
    this,
    "updateShopifyProduct",
    DefaultShopifyProductSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyProduct": {
          value: newVariables.shopifyProduct,
          required: false,
          type: "UpdateShopifyProductInput",
        },
          },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "shopifyProduct" */
export class ShopifyProductManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyProduct";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindOneShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>): Promise<
  GadgetRecord<
    SelectedShopifyProductOrDefault<Options>
  >
> => {
    return await findOneRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProduct",
      id,
      DefaultShopifyProductSelection,
      apiIdentifier,
      options
    ) as any;
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyProduct",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductSelection,
  } as any
)

  
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyProduct";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: MaybeFindOneShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>) => {
    const record = await findOneRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProduct",
      id,
      DefaultShopifyProductSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyProduct",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
  } as any
)

  
    /**
 * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindManyShopifyProductsOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      "shopifyProduct",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindFirstShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: MaybeFindFirstShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyProducts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductSelection,
  } as any
);

  
    create = Object.assign(createShopifyProduct,
  {
    type: "action",
    operationName: "createShopifyProduct",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyProductSelection,
    variables: {
      "shopifyProduct": {
        required: false,
        type: "CreateShopifyProductInput",
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
    operationName: "createShopifyProduct";
    namespace: null;
    modelApiIdentifier: "shopifyProduct";
    modelSelectionField: "shopifyProduct";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyProductSelection;
    selectionType: AvailableShopifyProductSelection;
    optionsType: CreateShopifyProductOptions;
    schemaType:  Query["shopifyProduct"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyProductVariables          | CreateShopifyProductVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyProduct": {
          required: false;
          type: "CreateShopifyProductInput";
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
    <Options extends CreateShopifyProductOptions>(
        inputs: (FullyQualifiedCreateShopifyProductVariables | CreateShopifyProductVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyProductOptions>
    ): Promise<CreateShopifyProductResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyProducts";
    namespace: null;
    modelApiIdentifier: "shopifyProduct";
    modelSelectionField: "shopifyProducts";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyProductSelection;
    selectionType: AvailableShopifyProductSelection;
    optionsType: CreateShopifyProductOptions;
    schemaType: Query["shopifyProduct"];
    variablesType: (FullyQualifiedCreateShopifyProductVariables | CreateShopifyProductVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyProductsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyProductOptions>(
        inputs: (FullyQualifiedCreateShopifyProductVariables | CreateShopifyProductVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyProductOptions>
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
        "bulkCreateShopifyProducts",
        DefaultShopifyProductSelection,
        "shopifyProduct",
        "shopifyProducts",
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
      operationName: "bulkCreateShopifyProducts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyProducts",
      isBulk: true,
      defaultSelection: DefaultShopifyProductSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyProductsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyProduct,
  {
    type: "action",
    operationName: "updateShopifyProduct",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyProductSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyProduct": {
        required: false,
        type: "UpdateShopifyProductInput",
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
    operationName: "updateShopifyProduct";
    namespace: null;
    modelApiIdentifier: "shopifyProduct";
    modelSelectionField: "shopifyProduct";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyProductSelection;
    selectionType: AvailableShopifyProductSelection;
    optionsType: UpdateShopifyProductOptions;
    schemaType:  Query["shopifyProduct"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyProductVariables          | UpdateShopifyProductVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyProduct": {
          required: false;
          type: "UpdateShopifyProductInput";
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
    <Options extends UpdateShopifyProductOptions>(
        inputs: (FullyQualifiedUpdateShopifyProductVariables | UpdateShopifyProductVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyProductOptions>
    ): Promise<UpdateShopifyProductResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyProducts";
    namespace: null;
    modelApiIdentifier: "shopifyProduct";
    modelSelectionField: "shopifyProducts";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyProductSelection;
    selectionType: AvailableShopifyProductSelection;
    optionsType: UpdateShopifyProductOptions;
    schemaType: Query["shopifyProduct"];
    variablesType: (FullyQualifiedUpdateShopifyProductVariables | UpdateShopifyProductVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyProductsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyProductOptions>(
        inputs: (FullyQualifiedUpdateShopifyProductVariables | UpdateShopifyProductVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyProductOptions>
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
        "bulkUpdateShopifyProducts",
        DefaultShopifyProductSelection,
        "shopifyProduct",
        "shopifyProducts",
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
      operationName: "bulkUpdateShopifyProducts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyProducts",
      isBulk: true,
      defaultSelection: DefaultShopifyProductSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyProductsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
}
