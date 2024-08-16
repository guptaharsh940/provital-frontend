import React from 'react';
import '../scss/ImageScroll.scss'; // Import the SCSS file
import img1 from '../assets/topimages/2.png'
import img2 from '../assets/topimages/4.png'
import img3 from '../assets/topimages/6.png'
import img4 from '../assets/topimages/8.png'

const images = [img1,img2,img3,img4];

const ImageScroll = () => {
    return (
        <div className="scroll-container">
            <div className="scroll-wrapper">
                {images.map((image, index) => (
                    <img src={image} alt={`img-${index}`} key={index} className="scroll-image" />
                ))}
                {images.map((image, index) => (
                    <img src={image} alt={`img-${index}-copy`} key={index + images.length} className="scroll-image" />
                ))}
            </div>
        </div>
    );
};

export default ImageScroll;
