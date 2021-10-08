import React from 'react';

const widget = ({Items})=>{
    const renderesList = Items.map(item =>{
    return (
        <div class="ui styled accordion">
            <div class="active title">
                <i class="dropdown icon"></i>
                    {item.title}
            </div>
                <div class="active content">
                    <p>{item.description}</p>
            </div>
       </div> 
    
    )
    })
    return (
       <div>{renderesList}</div>
    )
}
export default widget;