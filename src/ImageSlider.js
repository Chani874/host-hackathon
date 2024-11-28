// import React, { useState } from 'react';

// function ImageSlider() {
//     // יצירת סטייט למעקב אחרי התמונה הנוכחית
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);


//     const images = [
//         "data:image/jpeg;base64,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",
//         "data:image/png;base64,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",
//         "data:image/png;base64,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",
//         "data:image/png;base64,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",
//         "data:image/png;base64,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",
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABMlBMVEX////qQzU0qFNChfT7vAXd5/xJifS4zvo3gPPi6v0/g/Rwnvb7uQDqQTL7tgD//PwopUvqPCz///oAnjXpNyYaokPW6tr86+r51NLoGwDpLBYddvP+9/fpMyHymJP7vzv3xMH2urb7xT4pevP95bbq9Oz75OLzpaDrT0PvgHjpOTf09/5glfXA4Mef0KpCrF1OsWd1vobtaF/sX1X936H8ymL7vif91ov+7Mn/9uX9xgD7xkv+8tr7ylj80XL81X/G1/uLr/detnSLx5mv2Ljudm7xjIbtXTv4qgPuaSvxfSb0kx/sUDH3pBfziiLwdCqivvjJtSKjsjfZuCB9rkJVqkwApVrpuhiMsD66tC0kk55AiOYyqzs3oX5AjNkwomdElsM4no1Ik9Q5m5g7lrNEqXlfoeS8AAAKjklEQVR4nO2bi3fSyB7HQ6AtUlISSHikhAuLvLbl3VXrutcWKndfulXrdtVqddf7//8Ld5LQCnQm+c0wk4R7/J6z7qFHyXz6e89MJOmbAMqUy+UCUrM4V9P+VCiXM2GvjEqZcqHZrNYqs1FbLy3Jao87lVq12GwWNgEpUygijGdts2Salq4psSUpmqZbZqmkjWYthFQOe7VeKhRrrU4bRxFbhbJMMzZCRmpG00KFams2tkxd88RYIWo/q9SaYa98VeUqci3LAoPcAumWglwuSjxFO9R1b8/yMJAeG3dqYTO4KtdGbc0nRnx5tNi4UgibRCpUYn7RDrWP1gnX2wqdksmBZM6jl0ah4ZSbs5LFi8SVXnoWSvHJNCu8UVycTvA4zZZi8kexZVqtYCtpoTbiFyurUsxxLbjMlql2UG0QKJTYigEZp1BpW8LM4kqx2sGUnepIo+5a6KVpo6J4lpkSAIqDo1QEozTHrC0YvRR9JDRJ1yyhgb8qXRHnauWKuHyMl6bXBGW1ZidoFjuticlq1ZGgku9NY4ropWttAZ0YROYz7oHTCiojY2jGVb4sFfg+BX+V+M7UFdH9iydLi2u5mfEYjKPCElzVF82SmYWRkudSzBbPqplphcmiVzizhOdjisaVRaqFGC+c7SJVgxjESDL5shRjYdZKvizlcUj9mAAWqRNiIuNcK1ETs+aC7OOkxSNN0wKnE94s1dg6iUyx0OLbs1bNPo21D52bxVprNtLQTwFxWKrwZWmOmYNf0XRTm1WxM2K52GqXLE3x+kUpnPOYVO4wOpmCutJRy3PYzVQ7zgET6Rs41xc0jbF1yprWHkGOKMu1Tpsw7/Gu+6jCMDmZpo9nVehKmpURdsva4s1SmDE4mWaOW1TzerM1upsNeMeLlKnRj5aK2aZDcXHGK40s71qJDDOm3rnUtRnTLkqxsuRrvHMyMkyFtvQr5rjKuIpydfz1afxZpCbtDKOts/GYKcxunieARaJ1Ml0HpzCsMjWXxhTAUi3RsVjttddQtLOaORNwhEGXyRSrw+GZmZilzwTs+Neoop/bAddYBEv2P9/TsLS57Z2KOCY7+vkXOI0+Xi/0BSv7YyL9awyIo/PeoOesowTSb7+DaLR2Nezleur4h7RN8xzialpM1IkjJ91/kHC094c/jc51H1iAHqYTc73wo+FSX0Tq0Xe3MI+fe6cBfRz2Yv10tJe41eP07x4sihn2Wv00D/9bnD88WAK4p7OeHiWW9fgFKUebom/prK3sopfNAwefo/VxpF9KsHX8YzqxSvMzztUUrRr2Wn316A6LXXFeKHeMI2KK4qy7Xubq+WrgaOPIR790/B3OMkirfbTVCnup/nqCN4ytXxdp9PBuucNF8DInD/y2QKNvgGGyPxG8zKHZuw0cbRMMk/VgQUr/cgMT+XopeYaMK7cd0NobYBjpoR+MO4BqUe/8HZES80Lg2M2NUg17oRD5GsZubl583474eOnoGABju9omhL90HwaTfsLy5fe2xOiA8Dz/+HdhmFh249silDon0PjHv8PybzaYZFyE6qcEGJBdEnuPogSTOryHfZ5P/b+FyUYKJr6Ffd4TmJc9YGERBhOv42FgySz9NFow+yfY5x2BLLN3P1ow9R3s857CYI4jBoPPzT/AYJjiXyAMPjff3WXCKP0gYjBJPMy/IIZJ/xQ1mF12mL2nUYM5xMFkYTAPIwaT2sa1AECYIyYWcTDx5BowbGVGIEz9/wlm/xvMN5hvMIHBRC41rwMTtaKJh9nQdmYdmMg1mviiuaEjAL6d2dDhLB7Hwmzm2Izvmjd0QwM/z2zoVhNh0tzMTUDCHsBGbs8Sd85BLBHbOCftm23kkUa8foJ/oNjDJlF7zfiNc+gx4B7LMaADk4qnUql4yv1/avnjwg/dj+g/gFJJAgzwgPbllAmG/hgQBLNNgIEcnScuX8l9BpiDkx1a7UJgkrv4kzNQBnh9Ictql4GGXqeQKCOUGQmSAd6+kRHMMBAYUMqon5P+ue9FoFeyo0E+AJatQxAM/qxJ8u8BLlwWWWVJAbTaiQPSWSp+QoTxujyXuHwj38BMGuJhYCFzSEpmntcaEy//lG+l9oSzwKosOf49giadeLXAgkwjPGp2QDWTHP8eV4EvLxZZZNkQbZqD0zoEJkWMf9Il7XTi5ZtlFlkVndC2tiGWSXmEDOH6/E1GXjLNlG1jA6odkGEIY+ZcmBcbEpd/3WUR3QbcAxWZeNIjZLB+9voCxyI4PcMME9/2CBnp7stAbgODkyGwch6AIsYnZO68ppXAupirnLgccA4zTHLX53uWd89IZnFtI4rl3j6IJR73DBlp6dXGxGsvFCSWwQaibdiITboFuKCvL52+9WGRDTGzwDnQMCk/L/v6OvDlX3/6wYjp0bagTuZV/ufKuing9YU/i6zK/KvNAWj2d+RVMeeyX6FPv5UBLIimz5vmYBeUleOAXGYri7oATANDoBnwpTk4hbKQbmeu6Gi1Rw6O5uAcMl86Sm2DvjHrWV1EetrBOWzrzzGMf/g7OjOoaGReOe3gNAlmidcB4e9IpYHhV29o9qO9ZsxldXOUNAMe0812Hc4S34caRpImlLZR1x9vtvZpzgnghpGkBlXUOMaZrjXfNKA9jKtUyrctW9CUnmbSZfa1bH7y7j2dYeBehn5TA0pHs11tyjjh5HuycfXhYx1uGOJBBl5dahhknH6PASffG9hucHX9CZyYk1SGQaahdzRkHGNAi5OfTlT396b23wEHGa9NWcJT6B3NXpE6mFIktvx0oH59jPr5I4yGIpXN1WOBsXH6kx4oszV6k7669BD1+m+Aq3nvlhE0ZHA0d02yPDjz4UE2cf7i6r/8VPejSW2f0LOwZLSFZRnqtIsHyuZ7k5xB+O6rf/x6zeQpAwvKaOwstoxczhgMe91uAylr/9E96w0H9o89bH517V1xUvhrTP5iyWjLUg0DLf5W6JOvtY2rjx7GSSVP2FjWCJu1dPWFvKNZZ3MyW9lBKDTG5/cE49QPmVlQ0umvkQTWoPmAz9FJwguzQHXVUGjU6y+43QDSHSao6GZofjTyP3ebm3360r+iXkg06n/f11dYPM6WI06DeP5eoqkTL/3QaP1yw6irLwuzdJJyiCHShJIEkHIfbgMneXjChSVEGuN63g6wtZcRo1EHn+x2IMmRJcS4UeV375NJn3NlWvXCqZ52r/r5I/kmFqPO+qEltQ+8WVBnMwmHxuB8BuQqH8pEYAzFXDhg2n9aU7mhsHstZ/6TIlepQm+2rbXLQc/C/QB4RdO7O0SiUAK42dqdBFNyjH4QV44b0wB8TZWHwVzTl7pD0cYxBrA9Xh5qnAmtoOxnPaw4qigcNTck7OwKU7bRywnByfWDRnHUGPLHyRl+BwibgqPmjJ7YC9M+OKiI8slsqsr7jhSLzib99bsCVe4Lao9plZ+unuhR2kQeAM8OA1G26/AwAKmGOhiynLkLVaPbmw4MgwJIVQ2jP5me5cMMeqIaeeegD0Jkn6nZIN2o2WRJjXz+DLmckcMz2dbIoXzucETTJCtqNBp5+zR2MlBzSzLkwXDaO8vn843oxDtMzhEzstSNnI+NTbBGFPQ/9FahGioMrokAAAAASUVORK5CYII="
//     ];





//     // פונקציה למעבר לתמונה הבאה
//     const goToNextImage = () => {
//         if (currentImageIndex < images.length - 1) {
//             setCurrentImageIndex(currentImageIndex + 1); // מעבר לתמונה הבאה
//         }
//     };

//     // פונקציה למעבר לתמונה הקודמת
//     const goToPreviousImage = () => {
//         if (currentImageIndex > 0) {
//             setCurrentImageIndex(currentImageIndex - 1); // מעבר לתמונה הקודמת
//         }
//     };

//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 height: '100vh',
//                 backgroundImage: `url(${images[currentImageIndex]})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//         >
//             {/* חלק שמאלי - לחיצה על חצי שמאלי למעבר לתמונה הקודמת */}
//             <div
//                 onClick={goToPreviousImage}
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '50%',
//                     height: '100%',
//                     cursor: 'pointer',
//                 }}
//             ></div>

//             {/* חלק ימני - לחיצה על חצי ימני למעבר לתמונה הבאה */}
//             <div
//                 onClick={goToNextImage}
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: '50%',
//                     height: '100%',
//                     cursor: 'pointer',
//                 }}
//             ></div>
//         </div>
//     );
// }

// export default ImageSlider;


import React, { useState } from 'react';
import Navbar from './Navbar'; // Navbar בתחתית


function ImageSlider() {
    // יצירת סטייט למעקב אחרי התמונה הנוכחית
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            image: "pages/02.png",
            url: "https://NatiShenker.github.io/face",
            isIframe: true
        },
        {
            image: "pages/02.png",
            url: "https://natitok.github.io/digitalForm/",
            isIframe: true
        },
        {
            image: "pages/02.png",
            url: "https://www.example.com/3",
            isIframe: false
        },
        {
            image: "pages/02.png",
            url: "./images",
            isIframe: false
        },
        {
            image: "pages/02.png",
            url: "https://www.example.com/5",
            isIframe: false
        },
        {
            image: "pages/02.png",
            url: "https://www.example.com/6",
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

            {/* הצגת התמונה הנוכחית כקישור
            <a href={images[currentImageIndex].url} target="_blank" rel="noopener noreferrer">
                <img
                    src={images[currentImageIndex].image}
                    alt="Slide"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </a> */}
            {

                images[currentImageIndex].isIframe && <iframe
                    src={images[currentImageIndex].url}
                    title="External Content"
                    style={{
                        width: "30%",
                        height: "30%",
                        border: "none",
                        borderRadius: "8px",
                    }}
                />
            }


            {/* Navbar בתחתית */}
            {/* <Navbar /> */}
        </div>
    );
}

export default ImageSlider;
