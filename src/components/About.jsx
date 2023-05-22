import React from 'react'
import './style/commonstyle.css'
import img1 from '../assets/me1.jpg'
function About(props) {
    return (
        <div>
            <section className='section' id='about'>
                <div className="about">
                    <div className="card"><img alt='' className="aboutimg" src={img1}></img></div>
                    <div className='abouttextcontainer'>
                        <span>ABOUT</span>
                        <br />
                        I am a passionate photographer currently pursuing my Bachelor of Technology (B.Tech) degree as an undergraduate in Thrissur, Kerala.
                        <br />
                        Photography has always been a creative outlet for me, allowing me to capture moments and express my unique perspective of the world. While studying for my B.Tech degree, I have honed my skills and developed a deep appreciation for the art of photography.
                        <br />
                        <br />
                        Thrissur, with its rich cultural heritage and scenic beauty, has provided me with endless opportunities to explore and capture captivating images. From the vibrant festivals and traditional events to the stunning landscapes and architectural wonders, this city has been a constant source of inspiration for my work.
                        <br />
                        <br />
                        Thank you for visiting my photography portfolio website. I invite you to explore my gallery and experience the world through my lens. If you have any inquiries, collaboration opportunities, or would like to discuss a photography project, please feel free to reach out. I look forward to connecting with you and sharing my passion for photography.
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
