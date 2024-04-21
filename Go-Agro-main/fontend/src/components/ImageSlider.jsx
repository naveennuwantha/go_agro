import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
      url: 'https://img.freepik.com/premium-photo/ripe-rice-paddy-field-background_127755-665.jpg?w=740',
      caption: 'First Slide'
    },
    {
      url: 'https://c1.wallpaperflare.com/preview/825/623/772/rice-nature-food-plant.jpg',
      caption: 'Second Slide'
    },
    {
      url: 'https://i.pinimg.com/564x/3d/aa/d0/3daad01f38209d7dbd5fb2b508ed91fc.jpg',
      caption: 'Third Slide'
    },
  ];

export const ImageSlider = () => {


  return (
    <div style={{width:'100%' }} className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height:550}} src={fadeImage.url} />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}

