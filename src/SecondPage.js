import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // ייבוא של Navbar

function SecondPage() {
    const navigate = useNavigate();


    // מערך של אובייקטים, כל אובייקט מכיל את קישור התמונה ו-URL יעד
    const images = [
        {
            imgUrl: "pages/10.png",
            link: "https://NatiShenker.github.io/face"
        },
        {
            imgUrl: "pages/10.png",
            link: "https://natitok.github.io/digitalForm/"
        },
        {
            imgUrl: "pages/10.png",
            link: "https://www.example.com/3"
        },
        {
            imgUrl: "pages/10.png",
            link: "./images"
        },
        {
            imgUrl: "pages/10.png",
            link: "https://www.example.com/5"
        },
        {
            imgUrl: "pages/10.png",
            link: "https://www.example.com/6"
        },
    ];

    return (
        <div
            style={{
                height: "100vh",
                backgroundImage: `url("pages/02.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // 2 תמונות בשורה
                    gridGap: "20px", // רווח בין התמונות
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%", // קובע רוחב כללי לרשת
                    maxWidth: "1200px", // הגבלת רוחב מרבי לרשת (עוזר כאשר יש מסכים גדולים)
                }}
            >
                {images.map((image, index) => (
                    <Link
                        to={`/external?url=${encodeURIComponent(image.link)}`}
                        key={index}
                        style={{
                            width: "100%", // כך שהתמונה תתפוס את הרוחב המלא של התיבה שלה
                            height: "auto", // גובה אוטומטי שמאפשר שמירה על יחס התמונות
                        }}
                    >
                        <img
                            src={image.imgUrl}
                            alt={`Random ${index}`}
                            style={{
                                width: "100%", // התמונה ממלאת את רוחב הבלוק
                                height: "auto", // שמירה על יחס המידות
                                objectFit: "cover", // ממלאת את הבלוק בצורה אופטימלית
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // צל עדין לתמונה
                            }}
                        />
                    </Link>
                ))}
            </div>
            <Navbar /> {/* הוספת Navbar */}
        </div>
    );
}

export default SecondPage;



