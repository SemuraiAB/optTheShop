import React from "react";
import {
  Modal,
  IndexTable,
  Thumbnail,
  Button,
  BlockStack,
  Spinner,
} from "@shopify/polaris";

const CompressionPopup = ({
  open,
  onClose,
  images,
  originalImages,
  isLoading,
  onSaveCompress,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Image Compression Results"
      large
    >
      <Modal.Section>
        {isLoading ? (
          <Spinner accessibilityLabel="Compressing images..." size="large" />
        ) : (
          <IndexTable
            resourceName={{ singular: "image", plural: "images" }}
            itemCount={images.length}
            headings={[
              { title: "Original Image" },
              { title: "Original Size (KB)" },
              { title: "Compressed Image" },
              { title: "Compressed Size (KB)" },
              { title: "Actions" },
            ]}
          >
            {images.map((image, index) => (
              <IndexTable.Row key={index}>
                <IndexTable.Cell>
                  <Thumbnail
                    source={image.originalSource}
                    alt="Original"
                    size="medium"
                  />
                </IndexTable.Cell>
                <IndexTable.Cell>{image.originalSize} KB</IndexTable.Cell>
                <IndexTable.Cell>
                  <Thumbnail
                    source={image.compressedSource}
                    alt="Compressed"
                    size="medium"
                  />
                </IndexTable.Cell>
                <IndexTable.Cell>{image.compressedSize} KB</IndexTable.Cell>
                <IndexTable.Cell>
                  <BlockStack>
                    <Button
                      onClick={() =>
                        onSaveCompress(
                          image.compressedSource,
                          image.originalAltText,
                          image.productId
                        )
                      }
                    >
                      Save
                    </Button>
                    <Button>Keep Old</Button>
                  </BlockStack>
                </IndexTable.Cell>
              </IndexTable.Row>
            ))}
          </IndexTable>
        )}
      </Modal.Section>
    </Modal>
  );
};
export default CompressionPopup;
