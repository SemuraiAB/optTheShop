import React, { useState, useCallback } from "react";
import { Checkbox } from "@shopify/polaris";

const DropdownWithCheckboxes = ({
  width,
  selectedImages,
  onBatchAltTex,
  onBatchCompress,
  onBatchOverhaul,
  onSettingsChange,
  apiSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedState, setCheckedState] = useState({
    storeDescOption: true,
    focusWordOption: true,
    option3: false,
  });

  const options = [
    { label: "Use Store Description", name: "storeDescOption" },
    { label: "Use Focus Word", name: "focusWordOption" },
    { label: "Placeholder(overhaul?)", name: "option3" },
  ];

  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "0px 0px 8px 8px",
    width: width,
    backgroundColor: "#fff",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const buttonContainerStyle = {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  };

  const actionButtonContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const checkboxContainerStyle = {
    display: isOpen ? "block" : "none",
    padding: "10px",
    background: "#f8f8f8",
  };

  const buttonStyle = {
    padding: "8px 20px",
    margin: "0 5px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: "#f0f0f0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    fontWeight: "500",
  };

  const checkboxLabelStyle = {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
    fontSize: "15px",
    color: "#333",
    fontWeight: "400",
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = useCallback(
    (checked, name) => {
      setCheckedState((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
      onSettingsChange({ ...checkedState, [name]: checked }); // Assuming onSettingsChange needs the entire state
    },
    [onSettingsChange, checkedState]
  );

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <button onClick={handleToggle} style={buttonStyle}>
          More Settings {isOpen ? "▲" : "▼"}
        </button>
        <div style={actionButtonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => onBatchAltTex(selectedImages, apiSettings)}
          >
            Batch Alt
          </button>
          <button
            style={buttonStyle}
            onClick={() => onBatchCompress(selectedImages)}
          >
            Batch Compress
          </button>
          <button style={buttonStyle} onClick={onBatchOverhaul}>
            Overhaul
          </button>
        </div>
      </div>
      <div style={checkboxContainerStyle}>
        {options.map((option, index) => (
          <div key={index} style={checkboxLabelStyle}>
            <Checkbox
              label={option.label}
              checked={checkedState[option.name]}
              onChange={(checked) => handleCheckboxChange(checked, option.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownWithCheckboxes;
