import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UploadImageShopifyProductImageActionContext } from "gadget-server";

/**
 * @param { UploadImageShopifyProductImageActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UploadImageShopifyProductImageActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
  async function uploadImageToShopify(base64String, productId) {
  // Assuming `base64String` is the base64-encoded image data you receive from the API call
  // and `productId` is the ID of the product you want to attach the image to.

  // Get the Shopify API client from Gadget's connections
  const shopify = connections.shopify.current;

  // Create a new product image on Shopify
  const result = await shopify.productImage.create({
    productId: productId,
    attachment: base64String,
    filename: 'image.jpg', // Provide a filename for the image
  });

  // The result will contain the new image object, including the `src` attribute with the hosted URL
  return result.image.src;
}

// Example usage:
// Replace 'your-base64-image-string' with the actual base64 string and 'product-id' with the actual product ID
uploadImageToShopify('your-base64-image-string', 'product-id')
  .then((imageUrl) => {
    console.log('Image uploaded to Shopify:', imageUrl);
    // Here you can create a productImage with the imageUrl as a source
  })
  .catch((error) => {
    console.error('Failed to upload image to Shopify:', error);
  });
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
