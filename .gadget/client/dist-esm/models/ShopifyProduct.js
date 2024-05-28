import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyProductSelection = {
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
};
;
;
;
;
;
;
;
const apiIdentifier = "shopifyProduct";
const pluralApiIdentifier = "shopifyProducts";
async function createShopifyProduct(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
        type: "CreateShopifyProductInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyProduct(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
        type: "GadgetID"
      },
      "shopifyProduct": {
        value: newVariables.shopifyProduct,
        required: false,
        type: "UpdateShopifyProductInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyProductManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyProduct",
          id,
          DefaultShopifyProductSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
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
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
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
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProducts",
          DefaultShopifyProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProducts",
          DefaultShopifyProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    this.create = Object.assign(
      createShopifyProduct,
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
            type: "CreateShopifyProductInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkCreateShopifyProductsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyProduct,
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
            type: "GadgetID"
          },
          "shopifyProduct": {
            required: false,
            type: "UpdateShopifyProductInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkUpdateShopifyProductsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
export {
  DefaultShopifyProductSelection,
  ShopifyProductManager
};
//# sourceMappingURL=ShopifyProduct.js.map
