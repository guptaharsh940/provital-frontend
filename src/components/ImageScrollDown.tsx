import React from 'react';
import '../scss/ImageScrollDown.scss'; // Import the SCSS file
import img1 from '../assets/topimages/1.png'
import img2 from '../assets/topimages/3.png'
import img3 from '../assets/topimages/5.png'
import img4 from '../assets/topimages/7.png'

const images = [img1,img2,img3,img4];

const ImageScrollDown = () => {
    return (
        <div className="scroll-container-down">
            <div className="scroll-wrappers">
                {images.map((image, index) => (
                    <img src={image} alt={`img-${index}`} key={index} className="scroll-image-down" />
                ))}
                {images.map((image, index) => (
                    <img src={image} alt={`img-${index}-copy`} key={index + images.length} className="scroll-image-down" />
                ))}
            </div>
        </div>
    );
};

export default ImageScrollDown;
