import React from "react";
import { useNavigate } from "react-router-dom";

function ExternalPage() {
  const navigate = useNavigate();

  // לקבל את ה-URL מהחיפוש או מהפרופס (אפשר גם לשלוח כ-URL פרמטר)
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <iframe
        src={url}
        width="80%"
        height="80%"
        title="External Content"
        style={{ border: "none", borderRadius: "8px" }}
      ></iframe>
      <button
        onClick={() => navigate("/images")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        חזור לתפריט
      </button>
    </div>
  );
}

export default ExternalPage;
