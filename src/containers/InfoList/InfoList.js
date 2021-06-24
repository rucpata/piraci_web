import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Info from '../../components/Info/Info';
import './InfoList.css';


const InfoList = ({title, info}) => {

    const responsive = {
        
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 0 },
          items: 2
        },
        // mobile: {
        //   breakpoint: { max: 464, min: 0 },
        //   items: 1
        // }
      };

    const title1 = 'Co Cię dzieli od przygody?';
    const title2 = 'Korzyści';

    const listInfo = info.map((inf) => (
        <Info inf={inf} key={inf.id}/>   
       
    ));

    return (
        <div className='infoList'>
            <h2>{title ? title1 : title2}</h2>
            {/* <div className='styleInfo'>{listInfo}</div>  */}
            <Carousel responsive={responsive}>
                {listInfo}
                <div></div>
            </Carousel>;     
        </div>
        )
    } 
    





export default InfoList;