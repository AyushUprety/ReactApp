/** here in line 12 i was confused how to generate unique key when
 * there is no unique id passed from json.So you can use as written
 * in line 15 to generate new key. Note item is written so that unique key
 * will be generated when you are using map in another component for example
 * todo.map.
 */

import React from 'react';

const display = (props)=>{
    const{items,setItems,userInput,setUserInput}=props;
    console.log({items});
    return(
        <div>
            {items.map((item,index)=>{
            return(
                <li key={`item${index}`}>{item}</li>
            )
            })}
        </div>
    )
}
export default display;