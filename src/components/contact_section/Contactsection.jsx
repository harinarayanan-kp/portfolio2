import React from 'react'
import './contactstyle.css'
import '../style/commonstyle.css'
import Mediabox from '../mediabox/Mediabox'

const Contactsection = () => {
    return (
        <div className="section" id='contact'>
            <section className='contactsection'>
                <div className="container">
                    <ContactTextbox title='NAME' placeholder='Enter Full Name' />
                    <ContactTextbox title='Email' placeholder='Enter Email Address' />
                    <div className='message'>
                        <div className="inputhead">MESSAGE</div>
                        <input placeholder='Enter the Message' className='nametextbox' type="text" />
                    </div>
                    <button>SUBMIT</button>
                </div>
                <div className="medi2"><Mediabox/></div>
                
            </section>
        </div>

    )
}

export default Contactsection

function ContactTextbox(props) {
    return <form action="">
        <div className="inputhead">{props.title}</div>
        <input placeholder={props.placeholder} className='nametextbox' type="text" />
    </form>
}

