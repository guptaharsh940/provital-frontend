import React from 'react'
import '../scss/Top.scss'
import ImageScroll from './ImageScroll'
import ImageScrollDown from './ImageScrollDown'
import Navbar from './Navbar'
import Search from './Search'

const Top = () => {
  return (
    <div className="black">
      <div className='leftimgscroll'>
        <ImageScrollDown />
      </div>
      <div className='rightimgscroll'>
        <ImageScroll />
      </div>
      <div className='text-container'>
        <p className='text-main'>
          Book an appointment with
        </p>
        <div className='text-line-two'>

          <p className='text-main text-highlight'>
            lifestyle medicine
          </p>
          <p className='text-main'>
            experts
          </p>
        </div>
        <p className='text-subtext'>
          Optimize your lifestyle and reverse chronic diseases.
        </p>
      </div>
      <div className='search-parent'>
      <Search />
      </div>
      <div className='ellipsefirst'></div>
    </div>
  )
}

export default Top