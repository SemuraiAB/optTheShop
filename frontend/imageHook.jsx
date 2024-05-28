import { useState, useEffect, useCallback } from "react";
import { api } from "./api";
import { getImageSize } from "./apiService";

const useImages = () => {
  const [images, setImages] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(null);

  const fetchImages = useCallback(async () => {
    setFetching(true);
    try {
      const data = await api.shopifyProductImage.findMany({
        select: {
          id: true,
          alt: true,
          source: true,
          shopifyCreatedAt: true,
          product: {
            id: true,
            title: true,
            handle: true,
            body: true,
          },
        },
      });
      const sortedData = [...data].sort(
        (a, b) => parseInt(a.product.id) - parseInt(b.product.id)
      );

      const imagesWithSize = await Promise.all(
        sortedData.map(async (image) => {
          const size = await getImageSize(image.source);
          const urlParts = image.source.split("/");
          const fileName = urlParts[urlParts.length - 1];
          return { ...image, imageSize: size, fileName };
        })
      );
      setImages(imagesWithSize);
      setLastFetchTimestamp(new Date()); // Update the timestamp after successful fetch
    } catch (err) {
      console.error("Failed to fetch images:", err);
      setError(err);
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return {
    images,
    fetching,
    error,
    setImages,
    lastFetchTimestamp,
    refetch: fetchImages,
  };
};

export default useImages;
