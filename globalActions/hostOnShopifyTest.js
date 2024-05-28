import { HostOnShopifyTestGlobalActionContext ,applyParams,record,save,pre} from "gadget-server";

/**
 * @param { HostOnShopifyTestGlobalActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  const sourceURL = params.source;
  const altText = params.alt;
  if (!sourceURL) {
    logger.error("Source URL is null or undefined.");
    return;  // Ensure return to prevent further execution
  }

  const mediaInput = [{
    alt: altText,
    mediaContentType: 'IMAGE',
    originalSource: sourceURL, 
  }];

  const productIdGID = `gid://shopify/Product/${params.shopifyProductImage.product._link}`;

  try {
    const shopifyResponse = await connections.shopify.current.graphql(`
    mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`, {
      media: mediaInput,
      productId: productIdGID,
    });

    if (shopifyResponse.data) {
      const newShopifyImageSrc = shopifyResponse.data.productCreateMedia.media[0].image.src;
      record.source = newShopifyImageSrc;
      console.log("Attempting to save record with ID:", record.id);
try {
    await save(record);
    console.log("Record saved successfully, ID:", record.id);
} catch (error) {
    console.error("Failed to save record:", error);
    throw error;  // Ensure errors are not suppressed if they are critical
} // Ensure that save is properly awaited and any errors handled
      logger.info(`Image successfully uploaded and hosted by Shopify. New source: ${newShopifyImageSrc}`);
    } else if (shopifyResponse.errors) {
      shopifyResponse.errors.forEach(error => {
        logger.error(`Shopify media creation error: ${error.message}`);
      });
    }
  } catch (error) {
    logger.error(`An error occurred during the Shopify media creation process: ${error.message}`);
    throw error;  // Re-throw to ensure the error is not suppressed
  }
};
