import React from 'react'
import './style/section2style.css'
import './style/commonstyle.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
const Gallery = () => {
    return (
        <div>

            <div className="section"  id='gallery'>
                <div className='section2'>
                    <img className='galleryimage' src={image1} alt='image1' />
                    <img className='galleryimage' src={image2} alt='image2' />
                    <img className='galleryimage' src={image3} alt='image3' />
                    <img className='galleryimage' src={image4} alt='image4' />
                    <img className='galleryimage' src={image5} alt='image5' />
                    <img className='galleryimage' src={image6} alt='image6' />
                    <img className='galleryimage' src={image7} alt='image7' />
                </div>
            </div>
        </div>
    )
}

export default Gallery
