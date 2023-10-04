import React, { useEffect } from 'react'

function Slideshow1() {

    let slideIndex = 0;

    useEffect(() => {
        showSlides()
    }, [])


    const showSlides = () => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        // let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
        setTimeout(() => showSlides(), 4000);
    }
    return (
        <div>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <img className="Slides" src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1600" style={{ width: '100%' }} />
                </div>

                <div className="mySlides fade">
                    <img className="Slides" src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1600" style={{ width: '100%' }} />
                </div>

                <div className="mySlides fade">
                    <img className="Slides" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600" style={{ width: '100%' }} />
                </div>

                <div className="mySlides fade">
                    <img className="Slides" src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1600" style={{ width: '100%' }} />
                </div>

            </div>
            <br />

            {/* <div style={{ textAlign: 'center' }}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div> */}

            <style jsx>{`
            @import url("https://www.w3schools.com/w3css/4/w3.css");
            
                * {box-sizing: border-box;}
                body {font-family: Verdana, sans-serif;}
            
                img {object-fit: cover; width:100%;height:100%}

            
                /* Slideshow container */
                .slideshow-container {
               
                position: relative;
                margin: auto;
                }

                /* Caption text */
                .text {
                color: #f2f2f2;
                font-size: 15px;
                padding: 8px 12px;
                position: absolute;
                bottom: 8px;
                width: 100%;
                text-align: center;
                }


                /* The dots/bullets/indicators */
                /* .dot {
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
                } */

                .active {
                background-color: #717171;
                }

                /* Fading animation */
                .fade {
                animation-name: fade;
                animation-duration: 1.5s;
                }

                @keyframes fade {
                from {opacity: .4} 
                to {opacity: 1}
                }

                /* On smaller screens, decrease text size */
                @media only screen and (max-width: 300px) {
                .text {font-size: 11px}
                }
            
            `}</style>
        </div>
    )
}

export default Slideshow1