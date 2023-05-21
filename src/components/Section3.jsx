import React from 'react'
import './style/commonstyle.css'
import Card from './Card.jsx'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
const Section3 = () => {
    return (
        <div>
            <section className='section' id='projects'>
                <div className='title'>Projects</div>
                <div className='container'>
                    <Card caption="WEB DEVELOPMENT" image={card1} />
                    <Card caption="REACT APP" image={card2} />
                </div>
            </section>
        </div>
    )
}

export default Section3
