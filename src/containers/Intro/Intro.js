import React from 'react';
import './Intro.scss';

const Intro = ({intro}) => {

    const styles = {
        backgroundImage: `url(${intro.picture})`,
    }

    return(
        <div 
            className='introne' 
            style={styles}>
            <h2>{intro.text}</h2>
            <p>{intro.extra}</p>
        </div>
    )
}

export default Intro;