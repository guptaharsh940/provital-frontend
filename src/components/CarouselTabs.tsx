import React, { useState, useRef } from 'react';
import '../scss/CarouselTabs.scss';
import { NutritionCard, PhysicalActivityCard, RestorativeSleepCard, SocialConnectionCard, StressManagementCard, SubstanceAbuseCard } from './Card';

const CarouselTabs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
        document.getElementById(`card-${index}`)?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    };

    const scrollCarousel = (direction: 'prev' | 'next') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            if (direction === 'prev') {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div className="carousel-tabs-container">
            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button className="nav-button prev" onClick={() => scrollCarousel('prev')}><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7L15 7M1 7L7 13M1 7L7 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                <button className="nav-button next" onClick={() => scrollCarousel('next')}><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7L1 7M15 7L9 13M15 7L9 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </div>

            {/* Tabs */}
            <div className="tabs">
                {['Nutrition', 'Physical activity', 'Restorative sleep', 'Stress management', 'Social connection', 'Substance abuse'].map((name, index) => (
                    <button 
                        key={index} 
                        className={`tab ${activeIndex === index ? 'active' : ''}`} 
                        onClick={() => handleTabClick(index)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div className="carousel" ref={carouselRef}>
                {[<NutritionCard/>,<PhysicalActivityCard/>,<RestorativeSleepCard/>,<StressManagementCard/>,<SocialConnectionCard/>,<SubstanceAbuseCard/>].map((Content, index) => (
                    <div key={index} id={`card-${index}`} className="card">
                        {Content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselTabs;
