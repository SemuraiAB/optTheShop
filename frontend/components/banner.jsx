const Banner = ({ text, imageUrl, store, onStoreChange }) => {
  const bannerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px 8px 0px 0px",
    background: "linear-gradient(to bottom right, #ffdbac 40%, #3b4f5f 41%)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const textStyle = {
    display: "flex",
    fontSize: "48px",
    fontWeight: "bold",
    color: "#333",
    textShadow: "2px 2px #dee3e0",
    margin: "0",
    flexDirection: "column",
  };

  const inputStyle = {
    marginTop: "40px",
    fontSize: "14px",
    padding: "20px",
    borderRadius: "4px",
    border: "1px solid #161716",
    width: "calc(100%)",
    maxWidth: "500px",
    maxHeight: "105px",
    minWidth: "500px",
    minHeight: "105px",
  };

  const imageStyle = {
    width: "200px",
    height: "auto",
    minWidth: "auto",
    borderRadius: "0px 8px 0px 0px",
  };

  return (
    <div style={bannerStyle}>
      <div style={textStyle}>
        {text}

        <textarea
          rows="3"
          value={store}
          onChange={onStoreChange}
          placeholder="This is a description about  the store. Use it to give the tool a better understanding of products to write better alt text. Exp: This store sells Snowboard of the brand Snowboard brand"
          style={inputStyle}
        />
      </div>
      <img src={imageUrl} alt="" style={imageStyle} />
    </div>
  );
};

export default Banner;
