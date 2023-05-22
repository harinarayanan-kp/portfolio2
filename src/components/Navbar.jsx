
import './style/navbar.css';
import React from 'react'
import { useState } from 'react';
import LOGO from './Logo'
import Mediabox from './mediabox/Mediabox'

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className='navbar'>
            <LOGO/>
            <button onClick={() => { setIsNavExpanded(!isNavExpanded) }} className='menubutton'></button>
            <div className={isNavExpanded ? "expanded" : "navigation-menu"}>
                <a onClick={() => { setIsNavExpanded(!isNavExpanded) }} href='#gallery' className='navsection'>Gallery</a>
                <a onClick={() => { setIsNavExpanded(!isNavExpanded) }} href='#projects' className='navsection'>Projects</a>
                <a onClick={() => { setIsNavExpanded(!isNavExpanded) }} className='navsection' href='#about'>About</a></div>

            <a href='#contact' className='contactbutton'>contact me
                <div className="medi"><Mediabox/></div>
            </a>

        </div>
    )
}

export default Navbar
