import React from 'react';

import Info from '../../components/Info/Info';


const InfoList = ({title, info}) => {
    const title1 = 'Co Cię dzieli od przygody?';
    const title2 = 'Korzyści';
    
    return (
        <div className='infoList'>
            <h2>{title ? title1 : title2}</h2>
            <Info info={info}/>
        </div>
        )} 
    





export default InfoList;