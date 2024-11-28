import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // ייבוא של Navbar
import DistanceTracker from './DistanceTracker/DistanceTracker'

function SecondPage() {
    const navigate = useNavigate();
    const [showTracker, setShowTracker] = useState(false);


    // מערך של אובייקטים, כל אובייקט מכיל את קישור התמונה ו-URL יעד
    const images = [
        {
            imgUrl: "pages/iconCherum.png",
            link: "https://NatiShenker.github.io/face"
        },
        {
            imgUrl: "pages/iconAzik.png",
            link: "./images"
        },
        {
            imgUrl: "pages/iconSikun.png",
            link: "https://natitok.github.io/digitalForm/"
        },
        {
            imgUrl: "pages/iconEranut.png",
            link: "https://NatiShenker.github.io/face"
        },
        {
            imgUrl: "pages/iconTofes.png",
            link: "https://natitok.github.io/digitalForm/"
        },
        {
            imgUrl: "pages/iconProfil.png",
            link: "https://www.example.com/6"
        },
    ];

    const handleImageClick = (index, event) => {
        if (index === 2) {
            event.preventDefault(); // Prevent the default Link behavior
            setShowTracker(true);
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                backgroundImage: `url("pages/FrameLivuyAsir.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative"
            }}
        >
            {showTracker && <DistanceTracker />}
            
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridGap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    maxWidth: "1200px",
                }}
            >
                {images.map((image, index) => (
                    <Link
                        to={`/external?url=${encodeURIComponent(image.link)}`}
                        key={index}
                        onClick={(e) => handleImageClick(index, e)}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <img
                            src={image.imgUrl}
                            alt={`Random ${index}`}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </Link>
                ))}
            </div>
            <Navbar />
        </div>
    );
}

export default SecondPage;



