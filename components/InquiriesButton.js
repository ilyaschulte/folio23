// components/InquiriesButton.js

const InquiriesButton = () => {
    const handleClick = () => {
      window.location.href = "mailto:mail@ilyaschulte.com";
    };
  
    const buttonStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        textDecoration: "none",
        color: "black",
        fontSize: "11px",
        fontFamily: "SuisseIntl-Book",
        textTransform: "capitalize",
        cursor: "pointer",
        bottom: "10px",
        left: "10px",
    };
  
    return (
      <a style={buttonStyle} onClick={handleClick}>
        INQUIRIES
      </a>
    );
  };
  
  export default InquiriesButton;
  
