import React from 'react';
import './Intro.css';
// import back from '../../img/background/bg_mapa2.jpg'

const Intro = ({intro}) => {
    

    return(
        <div 
            className='introne' 
            style={{
                backgroundImage: "url('../../img/background/bg_mapa2.jpg')",
            }}>
            <h2>{intro.text}</h2>
            <p>{intro.extra}</p>
        </div>
    )
}

export default Intro;