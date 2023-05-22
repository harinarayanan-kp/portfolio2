import React from 'react'
import './footer.css'
import LOGO from '../Logo'
const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <div className="footer">
            <LOGO />
            <div className="footercontainer">
            </div>
            
            <p>Copyrights© {currentYear}. All rights reserved.</p>
        </div>

    )
}

export default Footer
