import React from "react";
import { useNavigate } from "react-router-dom";

// רכיב Navbar עם תמונה לחזרה לדף הראשי
function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed", // התמונה תהיה בתחתית המסך
        bottom: 0,
        left: 0,
        width: "100%", // תמלא את הרוחב של המסך
        backgroundColor: "#333", // צבע רקע כהה
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center", // ניישר את התמונה במרכז
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <img
        src="pages/Icon.png" // הקישור לתמונה הקטנה
        alt="Logo"
        style={{
          width: "50px", // הגודל של התמונה
          height: "50px", // הגובה של התמונה
          cursor: "pointer", // כאשר תלחץ על התמונה היא תעביר לדף הראשי
        }}
        onClick={() => navigate("/second")} // לחיצה על התמונה מחזירה לדף הראשי
      />
    </div>
  );
}

export default Navbar;
