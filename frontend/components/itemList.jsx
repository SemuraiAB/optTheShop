import React, { useState, useEffect } from "react";
import {
  Card,
  IndexTable,
  Text,
  Thumbnail,
  Button,
  Pagination,
  BlockStack,
  Tooltip,
  useIndexResourceState,
  useBreakpoints,
  Spinner,
  Modal,
  TextField,
} from "@shopify/polaris";

import "./itemList.css";

const ImagesIndexTable = ({
  images,
  onCompress,
  onUpdateAltText,
  onUpdateFileName,
  onSelectionChange,
  handleFocusWordChange,
  focusWords,
}) => {
  const resourceName = { singular: "image", plural: "images" };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageStart = currentPage * itemsPerPage;
  const pageEnd = pageStart + itemsPerPage;
  const currentItems = images.slice(pageStart, pageEnd);
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState({});
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const paginationLabel = `${pageStart + 1}-${pageEnd} of ${
    images.length
  } images`;

  const handleUpdateAltText = async (id, source, focusWord) => {
    setIsLoading((prevState) => ({ ...prevState, [id]: true }));
    try {
      await onUpdateAltText(id, source, focusWord);
    } catch (error) {
      console.error("Error updating Alt Text for image", id, ":", error);
    }
    setIsLoading((prevState) => ({ ...prevState, [id]: false }));
  };
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(images);

  const toggleModal = () => setModalActive(!modalActive);

  const handleShowMoreInfo = (image, event) => {
    event.stopPropagation();
    setSelectedImage(image);
    toggleModal();
  };

  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const hasNext = images.length > pageEnd;
  const hasPrevious = currentPage > 0;
  useEffect(() => {
    onSelectionChange(selectedResources);
  }, [selectedResources, onSelectionChange]);

  const rowMarkup = currentItems.map(
    ({ id, source, alt, product, imageSize, fileName }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Thumbnail source={source} alt={alt || "No alt text"} size="medium" />
          {`Image size: ${
            imageSize ? `${imageSize.toFixed(2)} KB` : "Loading..."
          }`}
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Button
            variation="strong"
            onClick={(event) =>
              handleShowMoreInfo(
                {
                  id,
                  source,
                  alt,
                  product,
                  imageSize,
                  fileName,
                },
                event
              )
            }
          >
            Show more info
          </Button>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Tooltip content={alt || "No alt text available"}>
            <div className="text-overflow">
              {isLoading[id] ? (
                <Spinner size="small" accessibilityLabel="Updating alt text" />
              ) : (
                alt || "None"
              )}
            </div>
          </Tooltip>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <BlockStack>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                onCompress(source, product?.id, alt);
              }}
            >
              Compress Image
            </Button>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                const currentFocusWord = focusWords[id] || "";
                setIsLoading((prevState) => ({ ...prevState, [id]: true }));
                handleUpdateAltText(id, source, currentFocusWord);
              }}
            >
              Update Alt Text
            </Button>
            <Button onClick={() => onUpdateFileName(id)}>
              Generate File name
            </Button>
          </BlockStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <input
            className="inputField"
            key={id}
            value={focusWords[id] || ""}
            onChange={(event) => handleFocusWordChange(id, event.target.value)}
            placeholder="Enter focus word"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          />
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <>
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={images.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Thumbnail" },
            { title: "Nerd Info" },
            { title: "Alt Text" },
            { title: "Actions" },
            { title: "Focus word" },
          ]}
          condensed={useBreakpoints().smDown}
        >
          {rowMarkup}
        </IndexTable>
        <div className="paginationContainer">
          <Pagination
            hasPrevious={hasPrevious}
            onPrevious={handlePreviousPage}
            hasNext={hasNext}
            onNext={handleNextPage}
            label={paginationLabel}
          />
        </div>
      </Card>
      {selectedImage && (
        <Modal
          open={modalActive}
          onClose={toggleModal}
          title="Image Details"
          primaryAction={{
            content: "Close",
            onAction: toggleModal,
          }}
        >
          <Modal.Section>
            <Text className="modal-text">Image ID: {selectedImage.id}</Text>
            <Text className="modal-text">
              Product Title:{" "}
              {selectedImage.product
                ? selectedImage.product.title
                : "No product info"}
            </Text>
            <Text className="modal-text">
              File Name: {selectedImage.fileName}
            </Text>
            <Text className="modal-text">
              Image Source: {selectedImage.source}
            </Text>
            <Text className="modal-text">
              Image Alt Text: {selectedImage.alt}
            </Text>
            <Text className="modal-text">
              Image Size:{" "}
              {selectedImage.imageSize
                ? `${selectedImage.imageSize.toFixed(2)} KB`
                : "Loading..."}
            </Text>
          </Modal.Section>
        </Modal>
      )}
    </>
  );
};

export default ImagesIndexTable;
