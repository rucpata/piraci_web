import React from 'react';
import './Info.css';

const Info = ({inf}) => {


    return(
        <div className='info'>
            <img src={inf.picture} alt=''/>
            <p>{inf.text}</p>
        </div>
    )
}

export default Info;