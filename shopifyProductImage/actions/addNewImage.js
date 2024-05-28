import { applyParams, preventCrossShopDataAccess, save, ActionOptions, AddNewImageShopifyProductImageActionContext } from "gadget-server";

/**
 * @param { AddNewImageShopifyProductImageActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { AddNewImageShopifyProductImageActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const { base64String, productId } = params;

  const endpoint = `/admin/api/2024-01/products/${productId}/images.json`;

  const payload = {
    image: {
      attachment: base64String,
      filename: "test.jpg"
    }
  };

  try {
    const response = await api.post(endpoint, payload);
    logger.info("Image added successfully", response);
  } catch (error) {
    logger.error("Error adding image to product", error);
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
