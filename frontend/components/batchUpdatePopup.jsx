import React, { useState } from "react";
import {
  Modal,
  Spinner,
  IndexTable,
  Button,
  BlockStack,
  TextField,
} from "@shopify/polaris";

const BatchUpdatePopup = ({ open, images, onClose, onSave, onKeep }) => {
  const [editedTexts, setEditedTexts] = useState({});

  const handleTextChange = (id, newText) => {
    setEditedTexts((prev) => ({ ...prev, [id]: newText }));
  };

  const cellStyle = {
    maxWidth: "400px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal",
    width: "180px",
    alignItems: "center",
  };

  return (
    <Modal open={open} onClose={onClose} title="Batch Update Results" large>
      <Modal.Section>
        {images.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Spinner accessibilityLabel="Loading updates" size="large" />
          </div>
        ) : (
          <IndexTable
            resourceName={{ singular: "image", plural: "images" }}
            itemCount={images.length}
            headings={[
              { title: "Image" },
              { title: "Old Alt Text" },
              { title: "New Alt Text" },
              { title: "Actions" },
            ]}
          >
            {images.map((img, index) => (
              <IndexTable.Row id={img.id} key={img.id} position={index}>
                <IndexTable.Cell>
                  <img
                    src={img.source}
                    alt="Thumbnail"
                    style={{ width: 50, height: 50 }}
                  />
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <div style={cellStyle}>{img.oldAlt}</div>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <div style={cellStyle}>
                    <TextField
                      value={editedTexts[img.id] || img.newAlt}
                      onChange={(newText) => handleTextChange(img.id, newText)}
                      placeholder="Edit new alt text"
                      multiline
                    />
                  </div>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <BlockStack>
                    <Button
                      onClick={() =>
                        onSave(img.id, editedTexts[img.id] || img.newAlt)
                      }
                    >
                      Save
                    </Button>
                    <Button onClick={() => onKeep(img.id, img.oldAlt)}>
                      Keep Old
                    </Button>
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

export default BatchUpdatePopup;
