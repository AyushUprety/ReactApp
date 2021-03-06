import React from 'react';
import './seasondisplay.css';

const seasonConfig = 
{
    summer:{
        text:'Time to hit the beach',
        icon:'sun'
    },
    winter:{
        text:'Brr! oh so chilly',
        icon:'snowflake'
    }
}
const getSeason =(lat,month)=>{
    if(month>2 && month<9){
        return lat>0?'summer':'winter'
    }
    else{
        return lat>0?'winter':'summer'
    }
}

const SeasonDisplay=(props)=>{
   
    const season = getSeason(props.lat,new Date().getMonth());
    // seasonConfig.season;
    const {text,icon} = seasonConfig[season];
    console.log(season);
    return (
    <div className={`seasondisplay ${season}`}>
        <i className={`icon-left massive ${icon} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${icon} icon`}></i>

    </div>
    )
}
export default SeasonDisplay;