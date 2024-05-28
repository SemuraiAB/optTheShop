// Import necessary components and hooks
import bannerLogo from "./assets/logo/0_2.webp";
import { Page, Layout, Spinner, Card } from "@shopify/polaris";
import { useEffect, useState } from "react";
import ImagesIndexTable from "./components/itemList.jsx";
import BatchUpdatePopup from "./components/batchUpdatePopup.jsx";
import CompressionPopup from "./components/batchCompresPopup.jsx";
import Banner from "./components/banner.jsx";
import DropdownWithCheckboxes from "./components/settingsBar.jsx";
import { api } from "./api";
import {
  generateAndUpdateAltText,
  handleImageCompressionAndUpload,
  callApiWithProductURLsCompress,
} from "./apiService";
import useImages from "./imageHook.jsx";

import "./ShopPage.css";

const ShopPage = () => {
  const [focusWords, setFocusWords] = useState({});
  const { images, fetching, error, setImages, refetch } = useImages();
  const [selectedImages, setSelectedImages] = useState([]);
  const [store, setStore] = useState();
  const [showAltPopup, setShowALtPopup] = useState(false);
  const [showCompressPopup, setShowCompressPopup] = useState(false);
  const [processedImages, setProcessedImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiSettings, setApiSettings] = useState({
    storeDescOption: true,
    focusWordOption: true,
  });

  const handleSelectionChange = (selectedResources) => {
    setSelectedImages(selectedResources);
    console.log("Selected IDs:", selectedResources);
  };
  const handleSettingsChange = (newSettings) => {
    setApiSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };
  const handleFocusWordChange = (id, newValue) => {
    setFocusWords((prevWords) => ({
      ...prevWords,
      [id]: newValue,
    }));
  };

  const updateSingleImageAltText = (imageId, newAltText) => {
    setImages(
      images.map((image) =>
        image.id === imageId ? { ...image, alt: newAltText } : image
      )
    );
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleBatchCompress = async () => {
    if (!selectedImages.length) {
      alert("No images selected for compression.");
      return;
    }
    setIsLoading(true);
    setShowCompressPopup(true);
    const imageDetails = images.filter((img) =>
      selectedImages.includes(img.id)
    );

    const urls = imageDetails.map((img) => img.source);
    const altTexts = imageDetails.map((img) => img.alt);
    const productId = imageDetails.map((img) => img.product.id);

    const compressedImagesDetails = [];

    for (let i = 0; i < urls.length; i++) {
      try {
        const result = await callApiWithProductURLsCompress(
          [urls[i]],
          [altTexts[i]]
        );
        compressedImagesDetails.push({
          originalSource: urls[i],
          originalSize: imageDetails[i].imageSize.toFixed(2),
          compressedSource: result[0].source,
          compressedSize: result[0].fileSize.toFixed(2),
          originalAltText: altTexts[i],
          productId: productId[i],
        });
        await delay(100);
      } catch (error) {
        console.error(
          "Error during image compression for image: ",
          urls[i],
          error
        );
      }
    }

    if (compressedImagesDetails.length > 0) {
      setCompressedImages(compressedImagesDetails);
      setIsLoading(false);
    } else {
      setShowCompressPopup(false);
    }
  };

  const handleBatchUpdateAltText = async () => {
    if (!selectedImages.length) {
      console.log("No images selected for updating.");
      return;
    }

    setShowALtPopup(true);
    setProcessedImages([]);

    try {
      const tempProcessedImages = await Promise.all(
        selectedImages.map((imageId) => {
          const image = images.find((img) => img.id === imageId);
          const focusWord = apiSettings.focusWordOption
            ? focusWords[imageId] || null
            : null;
          const storeDesc = apiSettings.storeDescOption ? store || null : null;
          return generateAndUpdateAltText(
            image.id,
            image.source,
            storeDesc,
            focusWord
          ).then(({ newAltText }) => ({
            ...image,
            newAlt: newAltText || image.alt,
            oldAlt: image.alt,
          }));
        })
      );
      setProcessedImages(tempProcessedImages);
    } catch (error) {
      console.error("Failed during batch update:", error);
    }
  };

  const handleCompressedSave = async (url, originalAltText, productId) => {
    console.log(url, originalAltText, productId);
    console.log("Starting the hostOnShopify process", {
      url,
      originalAltText,
      productId,
    });
    try {
      await api.shopifyProductImage.hostOnShopify({
        source: url,
        alt: originalAltText,
        product: {
          _link: productId,
        },
      });
      console.log("hostOnShopify completed successfully");
      refetch();
    } catch (error) {
      console.error("Error saving image to Shopify:", error);
      throw error;
    }
  };

  const handleSave = async (imageId, newAltText) => {
    console.log(
      `Saving new alt text for imageId: ${imageId} with altText: ${newAltText}`
    );
    try {
      await api.shopifyProductImage.update(imageId, {
        alt: newAltText,
      });
      console.log(`Alt text updated for product image ${imageId}`);
      setImages(
        images.map((image) =>
          image.id === imageId ? { ...image, alt: newAltText } : image
        )
      );
      const newProcessedImages = processedImages.filter(
        (img) => img.id !== imageId
      );
      setProcessedImages(newProcessedImages);
      if (newProcessedImages.length === 0) {
        setShowALtPopup(false);
      }
    } catch (error) {
      console.error(
        `Error updating alt text for product image ${imageId}:`,
        error
      );
    }
  };

  const handleKeepOld = async (imageId, oldAltText) => {
    console.log(
      `Keeping the old alt text for ImageId: ${imageId} with altText: ${oldAltText}`
    );
    try {
      await api.shopifyProductImage.update(imageId, {
        alt: oldAltText,
      });
      console.log(`Alt text updated for product image ${imageId}`);
      setImages(
        images.map((image) =>
          image.id === imageId ? { ...image, alt: oldAltText } : image
        )
      );
      const newProcessedImages = processedImages.filter(
        (img) => img.id !== imageId
      );
      setProcessedImages(newProcessedImages);
      if (newProcessedImages.length === 0) {
        setShowPopup(false);
      }
    } catch (error) {
      console.error(
        `Error keeping the old alt text for image: ${imageId}:`,
        error
      );
    }
  };

  function updateLocalImagesState(imageId, newAltText) {
    const updatedImages = images.map((image) => {
      if (image.id === imageId) {
        return { ...image, alt: newAltText };
      }
      return image;
    });
    setImages(updatedImages);
  }

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };

  if (error) {
    return <Page title="Error">{/* Error message rendering */}</Page>;
  }

  if (fetching) {
    return (
      <div className="spinner-container">
        <Spinner accessibilityLabel="Loading content" size="large" />
      </div>
    );
  }

  // Main content
  return (
    <Layout>
      <Layout.Section>
        <div className="main-content-wrapper">
          <Banner
            text="OptTheShop"
            imageUrl={bannerLogo}
            store={store}
            onStoreChange={handleStoreChange}
          />
          <DropdownWithCheckboxes
            width="100%"
            onBatchAltTex={(selectedImages) =>
              handleBatchUpdateAltText(selectedImages, apiSettings)
            }
            onBatchCompress={handleBatchCompress}
            onSettingsChange={handleSettingsChange}
          />
          <ImagesIndexTable
            images={images}
            focusWords={focusWords}
            handleFocusWordChange={handleFocusWordChange}
            onCompress={handleImageCompressionAndUpload}
            onUpdateAltText={(imageId, imageUrl, currentFocusWord) =>
              generateAndUpdateAltText(
                imageId,
                imageUrl,
                store,
                focusWords[imageId],
                currentFocusWord,
                updateSingleImageAltText
              )
            }
            onSelectionChange={handleSelectionChange}
          />
          <BatchUpdatePopup
            open={showAltPopup}
            images={processedImages}
            onSave={handleSave}
            onKeep={handleKeepOld}
            onClose={() => setShowALtPopup(false)}
          />
          <CompressionPopup
            open={showCompressPopup}
            onSaveCompress={handleCompressedSave}
            isLoading={isLoading}
            onClose={() => setShowCompressPopup(false)}
            images={compressedImages}
          />
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default ShopPage;

/* const generateImageFileName = async (imageId, imageUrl, altText, productId) => {
     try {
       const updatedFile = await callApiGenerateFileName(imageUrl, altText);
       console.log("Generated file source:", updatedFile.source);
       console.log("Product ID:", productId);
 
       const result = await api.shopifyProductImage.updateShopifyImage(imageId, {
         id: imageId,
         source: updatedFile.source,
         product: {
           _link: productId
         },
       });
       console.log("Update result:", result);
     } catch (error) {
       console.error("Error in updating image:", error);
     }
   };*/

/*const handleBatchCompress = async () => {
    if (selectedImages.length === 0) {
      console.error("No images selected for compression.");
      return;
    }

    setShowCompressPopup(true);
    setCompressedImages([]);

    // Map over selected images to fetch and process each
    const compressedImagePromises = selectedImages.map(async (imageId) => {
      const image = images.find((img) => img.id === imageId);
      if (!image) {
        console.error("Image not found:", imageId);
        return;
      }
      const originalSize = await getImageSize(image.source);
      const imgData = { ...image, originalSize };

      try {
        // Compress image via API call
        const compressedData = await callApiWithProductURLsCompress(
          [image.source],
          [image.alt || null]
        );
        const compressedInfo = compressedData[0];
        if (compressedInfo.error) {
          console.error(
            `Error compressing image: ${image.source}`,
            compressedInfo.error
          );
          return null;
        }

        // Additional processing if needed, like saving to Shopify
        const uploadResult = await api.shopifyProductImage.hostOnShopify({
          source: compressedInfo.source,
          alt: compressedInfo.newAltText || image.alt,
          product: { _link: image.product.id },
        });

        const newSize = await getImageSize(uploadResult.newUrl);
        console.log(`New size for ${image.fileName}:`, newSize);

        return {
          ...imgData,
          compressedSource: uploadResult.newUrl,
          newSize,
        };
      } catch (error) {
        console.error("Failed during image processing:", error);
        return null;
      }
    });

    // Resolve all promises and update state
    const newCompressedImages = await Promise.all(compressedImagePromises);
    setCompressedImages(newCompressedImages.filter((img) => img !== null)); // Filter out any nulls from errors
  };*/
