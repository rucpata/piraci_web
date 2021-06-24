import React from 'react';
import './Intro.css';

const Intro = ({intro}) => {
    

    return(
        <div 
            className='introne' 
            style={{
                backgroundImage: `url(${intro.picture})`,
            }}>
            <h2>{intro.text}</h2>
            <p>{intro.extra}</p>
        </div>
    )
}

export default Intro;