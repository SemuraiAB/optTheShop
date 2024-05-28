import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UpdateShopifyImageShopifyProductImageActionContext } from "gadget-server";

export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);

  // Ensure "sourceURL" comes from "params" correctly
  const sourceURL = params.shopifyProductImage.source;
  console.log(sourceURL, "Url");
  console.log(params.shopifyProductImage.product._link, "ID");
  if (!sourceURL) {
    logger.error("Source URL is null or undefined.");
    return;
  }

  const mediaInput = {
    originalSrc: sourceURL,
    id: params.shopifyProductImage.id
  };

  // Shopify GraphQL call with corrected variables
  const shopifyResponse = await connections.shopify.current.graphql(`
    mutation productUpdateMedia($mediaId: ID!, $media: MediaInput!) {
      productUpdateMedia(mediaId: $mediaId, media: $media) {
        media {
          ... on MediaImage {
            preview {
              image {
                id
                src
                altText
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `, {
    mediaId: mediaInput.id,
    media: mediaInput,
  });

  // Process Shopify response
  if (shopifyResponse.data && shopifyResponse.data.productUpdateMedia.media) {
    const updatedImage = shopifyResponse.data.productUpdateMedia.media.preview.image;
    record.source = updatedImage.src; // Update record with new image src from Shopify
    record.alt = updatedImage.altText;
    await save(record);
    logger.info(`Image has been successfully updated in Shopify. New source: ${updatedImage.src} and new altText: ${updatedImage.altText}`);
  } else if (shopifyResponse.errors) {
    shopifyResponse.errors.forEach(error => logger.error(`Shopify media update error: ${error.message}`));
  }
};

export const options = {
  actionType: "update"
};