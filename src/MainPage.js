
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // ייבוא של Navbar

function MainPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh", // גובה מלא של המסך
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("pages/01.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // תמונת הרקע לא תתגלגל עם הדף
      }}
      onClick={() => navigate("/second")} // כל לחיצה על הדף מובילה לדף השני
    >
      <Navbar /> {/* הוספת Navbar */}
    </div>
  );
}

export default MainPage;
