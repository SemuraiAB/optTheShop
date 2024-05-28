import { applyParams, preventCrossShopDataAccess, save, ActionOptions, CreateShopifyFileActionContext } from "gadget-server";

/**
 * @param { CreateShopifyFileActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyFileActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
