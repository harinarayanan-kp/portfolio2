import React from 'react'
function Card(props){
    return (
        <div>
            <div className='card'>
                <img className='cardimage' src={props.image} alt='imageloading'></img>
                <a href='#about' className='hireme'>HIRE ME</a>
                <div className='cardcaption'>{props.caption}</div>
            </div>
        </div>
    )
}

export default Card
