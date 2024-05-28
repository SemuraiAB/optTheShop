import { api } from "./api";

export const callApiWithProductURLsCompress = async (urls, altTexts) => {
  try {
    const responses = await Promise.all(
      urls.map((url, index) =>
        fetch("https://utsusu.azurewebsites.net/api/compress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imgUrl: url, altText: altTexts[index] }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`API call failed: ${response.statusText}`);
            }
            return response.json();
          })
          .catch((error) => {
            console.error(`Failed to process ${url}:`, error.message);
            return { error: error.message, url };
          })
      )
    );
    return responses;
  } catch (error) {
    console.error("Overall failure:", error);
    throw error;
  }
};

export const callApiWithProductURLsAltText = async (
  url,
  storeDesc,
  focusWord
) => {
  try {
    let requestBody = { imgUrl: url };

    if (storeDesc !== null) {
      requestBody.store = storeDesc;
    }
    if (focusWord !== null) {
      requestBody.focusWord = focusWord;
    }

    const response = await fetch(
      "https://utsusu.azurewebsites.net/api/generate-alt-text-from-url",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const generateAndUpdateAltText = async (
  imageId,
  imageUrl,
  store,
  focusWord,
  updateCallback = null
) => {
  try {
    const result = await callApiWithProductURLsAltText(
      imageUrl,
      store,
      focusWord
    );
    if (result && result.alt) {
      const newAltText = await updateProductImageAltText(imageId, result.alt);
      if (updateCallback && typeof updateCallback === "function") {
        updateCallback(imageId, newAltText);
      }
      return { imageId, newAltText };
    }
  } catch (error) {
    console.error(`Error updating alt text for image ${imageId}:`, error);
    // Optional: Call the callback with null if you want to handle the error in UI
    if (updateCallback && typeof updateCallback === "function") {
      updateCallback(imageId, null);
    }
  }
};

export const updateProductImageAltText = async (imageId, newAltText) => {
  console.log(
    `Attempting to update alt text for imageId: ${imageId} with altText: ${newAltText}`
  );
  try {
    await api.shopifyProductImage.update(imageId, { alt: newAltText });
    console.log(`Alt text updated for product image ${imageId}`);
    return newAltText; // Simply return newAltText or success status
  } catch (error) {
    console.error(
      `Error updating alt text for product image ${imageId}:`,
      error
    );
    throw error; // Rethrow error to handle it in the component
  }
};

export const handleImageCompressionAndUpload = async (
  imageUrl,
  productId,
  altText
) => {
  try {
    const compressionResult = await callApiWithProductURLsCompress(
      [imageUrl],
      [altText]
    );
    const temporaryUrl = compressionResult[0].source;
    console.log(temporaryUrl);

    const result = await api.shopifyProductImage.hostOnShopify({
      product: {
        _link: productId,
      },
      source: temporaryUrl,
      alt: altText,
    });

    console.log("Shopify product image creation result:", result);
  } catch (error) {
    console.error("Error during Shopify product image creation:", error);
  }
};

export const callApiGenerateFileName = async (imageData) => {
  try {
    const requests = imageData.map(({ imageUrl, imageAltText }) =>
      fetch("https://utsusu.azurewebsites.net/api/update-file-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgUrl: imageUrl, altText: imageAltText }),
      }).then((response) => {
        if (!response.ok)
          throw new Error(`API call failed: ${response.statusText}`);
        return response.json();
      })
    );

    return await Promise.all(requests);
  } catch (error) {
    throw error;
  }
};

//just to sort the image and get size , will move
export const getImageSize = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const sizeInKB = buffer.byteLength / 1024;
  console.log(`${sizeInKB.toFixed(2)} KB`);
  return sizeInKB; // Return the size in KB
};
