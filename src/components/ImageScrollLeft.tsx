import React from 'react';
import '../scss/ImageScrollLeft.scss'; // Import the SCSS file
import img1 from '../assets/topimages/1.png';
import img2 from '../assets/topimages/2.png';
import img3 from '../assets/topimages/3.png';
import img4 from '../assets/topimages/4.png';
import img5 from '../assets/topimages/5.png';
import img6 from '../assets/topimages/6.png';
import img7 from '../assets/topimages/7.png';
import img8 from '../assets/topimages/8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageScrollLeft = () => {
    return (
        <div className="scroll-container-left">
            <div className="scroll-wrappers-left">
            {images.map((image, index) => (
                    <img src={image} alt={`img-${index}`} key={index} className="scroll-image-left" />
                ))}
                {images.map((image, index) => (
                    <img src={image} alt={`img-${index}-copy`} key={index + images.length} className="scroll-image-left" />
                ))}
            </div>
        </div>
    );
};

export default ImageScrollLeft;
