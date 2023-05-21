import React from 'react'
import './footer.css'
import LOGO from '../Logo'

const Footer = () => {
    return (
        <div className="footer">
            <LOGO />
            <div className="footercontainer">
              <p>text 1</p>
              <p>text2</p>
            </div>
            
            <p>©harinarayanan.kp</p>
        </div>

    )
}

export default Footer
