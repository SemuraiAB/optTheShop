"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyFile_exports = {};
__export(ShopifyFile_exports, {
  DefaultShopifyFileSelection: () => DefaultShopifyFileSelection,
  ShopifyFileManager: () => ShopifyFileManager
});
module.exports = __toCommonJS(ShopifyFile_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyFileSelection = {
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
};
;
;
;
;
;
;
;
const apiIdentifier = "shopifyFile";
const pluralApiIdentifier = "shopifyFiles";
async function createShopifyFile(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
        type: "CreateShopifyFileInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFile(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      },
      "shopifyFile": {
        value: newVariables.shopifyFile,
        required: false,
        type: "UpdateShopifyFileInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyFileManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFile",
          id,
          DefaultShopifyFileSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFile",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds many shopifyFile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFiles",
          DefaultShopifyFileSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFiles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFiles",
          DefaultShopifyFileSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFiles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    this.create = Object.assign(
      createShopifyFile,
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
            type: "CreateShopifyFileInput"
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkCreateShopifyFilesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFile,
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
            type: "GadgetID"
          },
          "shopifyFile": {
            required: false,
            type: "UpdateShopifyFileInput"
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkUpdateShopifyFilesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyFileSelection,
  ShopifyFileManager
});
//# sourceMappingURL=ShopifyFile.js.map
