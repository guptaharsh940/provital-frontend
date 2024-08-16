import React from 'react'
import '../scss/Bottom.scss'
import CarouselTabs from './CarouselTabs';
const Bottom = () => {
    return (
        <div className='bottom-container'>
            <p className='bottom-subtitle'>HOW IT WORKS</p>
            <div className='bottom-title'>
                <p className='bottom-title-highlight'>Lifestyle as medicine:</p>
                <p className='bottom-title-regular'>The six pillars</p>
            </div>
            <CarouselTabs  />
            <div className='ellipsesecond'></div>
        </div>
    )
}

export default Bottom