import React from 'react';

import Info from '../../components/Info/Info';
import './InfoList.css';


const InfoList = ({title, info}) => {
    const title1 = 'Co Cię dzieli od przygody?';
    const title2 = 'Korzyści';

    const listInfo = info.map((inf) => (
        <Info inf={inf} key={inf.id}/>
    ));

    return (
        <div className='infoList'>
            <h2>{title ? title1 : title2}</h2>
            <div className='styleInfo'>{listInfo}</div>
        </div>
        )
    } 
    





export default InfoList;