
import React, { useState } from 'react';


function ImageSlider() {
    // יצירת סטייט למעקב אחרי התמונה הנוכחית
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            image: "pages/FrameAzik1.png",
            url: "",
            isIframe: false
        },
        {
            image: "pages/FrameAzik1.png",
            url: "https://NatiShenker.github.io/face",
            isIframe: true
        },
        {
            image: "pages/FrameCherum.png",
            url: "",
            isIframe: false
        },
    ];


    // פונקציה למעבר לתמונה הבאה
    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1); // מעבר לתמונה הבאה
        }
    };

    // פונקציה למעבר לתמונה הקודמת
    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1); // מעבר לתמונה הקודמת
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${images[currentImageIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* חלק שמאלי - לחיצה על חצי שמאלי למעבר לתמונה הקודמת */}
            <div
                onClick={goToPreviousImage}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    cursor: 'pointer',
                }}
            ></div>

            {/* חלק ימני - לחיצה על חצי ימני למעבר לתמונה הבאה */}
            <div
                onClick={goToNextImage}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    cursor: 'pointer',
                }}
            ></div>

            {

                images[currentImageIndex].isIframe && <iframe
                    src={images[currentImageIndex].url}
                    title="External Content"
                    style={{
                        width: "70%",
                        height: "60%",
                        border: "none",
                        borderRadius: "8px",
                    }}
                />
            }

        </div>
    );
}

export default ImageSlider;
