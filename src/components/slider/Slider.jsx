import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css'



const Slider = (props) => {
    const {fadeImages} = props
  return (
    
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ">
              <img src={fadeImage.url} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "50%", }}/>
            </div>
            <h4 style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "50%", }}>{fadeImage.caption} </h4>
          </div>
  
        ))}
      </Fade>
    </div>
    
  )
}

export default Slider