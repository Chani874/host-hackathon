
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar"; // ייבוא של Navbar

function ExternalPage() {
  // שימוש ב-URL parameters (הקישור ששולחים לך)
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const externalUrl = params.get("url");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        paddingBottom: "60px", // מקום ל-navbar
      }}
    >
      <iframe
        src={externalUrl}
        title="External Content"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "8px",
        }}
      />
      <Navbar /> {/* הוספת Navbar */}
    </div>
  );
}

export default ExternalPage;
