import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UploadImageShopifyProductActionContext } from "gadget-server";

/**
 * @param { UploadImageShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UploadImageShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const base64Image = params.base64string;
  const shopify = context.connections.shopify;

  // Create a new image on Shopify for the associated product
  const result = await shopify.productImage.create({
    productId: record.id,
    attachment: base64Image
  });

  // The result object will contain the new image information, including the src (URL)
  return { imageUrl: result.src };
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
