import React from 'react'
import facebook from '../../assets/59439.png'
import linkedin from '../../assets/1946483.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import gmail from '../../assets/gmail.png'
import './mediabox.css'
function Mediabox() {
    return <ul class="mediabox">
        <li>
            <a className='facebook' target="_blank" rel="noreferrer" href="https://www.facebook.com/harinarayanan.kp.58">
                <div><img className='icon' src={facebook} alt=""></img></div>
            </a>
            <a className='linkedin' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harinarayanan-kp-a25094255/">
                <div><img className='icon' src={linkedin} alt=""></img></div>
            </a>
            <a className='twitter' target="_blank" rel="noreferrer" href="https://twitter.com/Harinarayanan08">
                <div><img className='icon' src={twitter} alt=""></img></div>
            </a>
            <a className='instagram' target="_blank" rel="noreferrer" href="https://www.instagram.com/harinarayanan.kp/">
                <div><img className='icon' src={instagram} alt=""></img></div>
            </a>
            <a className='gmail' target="_blank" rel="noreferrer" href="mailto:harikpaug18@gmail.com">
                <div>
                    <img className='icon' src={gmail} alt=""></img>
                </div>
            </a>
        </li>
    </ul>
}
export default Mediabox
