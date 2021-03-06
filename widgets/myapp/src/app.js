/**SO the goal here was to make a navigation bar. So upon changing the value of href we would be forwarded
   The problem was to change the url upon click and run certain set of code while the button is clicked
   I tried using useEffect thinking when it detect change in url some piece of code will run at first
   The problem was I couldnot return a component from inside of an useEffect funciton. Then I used onClidk
   event listener called nav to return a dropdown component which didnot work. Major problem I faced was I 
   was having trouble to render the form with href and upon click take it to the respective route.I then just
   focused on the fuctionality. I wrote the function that would be invoked when passed a particular path. The
   path was typed manually in the browser to test the functionality. Now, Next step is to create
   a href link that would forward to particualr link upon clicking.Routing was fixed using fucntional component
   but it wasnot the react way of doing things so I made another component 'Route'. I coulnot understand initially
   how was the route code being executed inside the return statement. I thought that all the codes were preloaded 
**/

import React from 'react';
import QA from './Showaccordion';
import Search from './search'
import Dropdown from './dropdown'
import { useState,useEffect } from 'react';
import Translate from './translate';
import Header from './Header';
import Route from './Route';

const App=()=>
{
    const[selected,changeSelected]=useState('The Color Red')
    // const nav =()=>{
    //     return <Dropdown/>
    // }
    // const nav = ()=>{
    //     if(window.location.pathname==='/dropdown'){
    //         return <Dropdown options={options}/>
    //     }
    //     else if(window.location.pathname==='/accordion'){  // --> There are multiple ifelse statements sothere is a good chance the code could be trimmed down.look down for another approach
    //         return <QA Items={items}/>
    //     }
    //     else if(window.location.pathname==='/convert'){
    //         return <Search/>
    //     }
    // }
    // const Nav = (path,component)=>{
    //     let Component = component.replace(/"/g,"");
    //     let Path = path.replace(/"/g,"");
    //     return window.location.pathname===Path?Component:null // you tried to use tertiary expression but used it inside if tertiary itself is a conditonal statement so no need of if
    // }

    const items = [
        { 
            title:'What is React?',
            description:'React is a front end library'
        },
        { 
            title:'Why use React?',
            description:'React is a favourite js library among engineers'
        },
        { 
            title:'How do you use React',
            description:'You use react by creating componenets'
        }
    ]
    const options = [
        { 
            label:'The Color Red',
            value:'red'
        },
        { 
            label:'The color green',
            value:'green'
        },
        {
            label:'The Color Blue',
            value:'blue'
        }
    ]
    // const[link,changelink]=useState(window.location.href)
    // useEffect(()=>{
    //     // const lastItem = window.location.href.substring(thePath.lastIndexOf('/') + 1) // tried to get the last string of the address bar
    //     if(window.location.href=== `${window.location.href}/dropdown`){
    //         return Dropdown --> This is that component
    //     }
    // },[link])
   
    return(
            // <div className="ui secondary  menu">
            //     <a  className="item" onClick={nav}>
            //         Dropdown
            //         {/* <Dropdown options={options}/> */}
            //     </a>
            // </div>
        <div>
            <Header/>
            <Route path={'/accordion'}>
                {/* if(window.location.pathname==='dropdown'){
                    return (
                        <div>
                            </Dropdown>
                        </div>
                    )                     //error syntax is incorrect elseif statement isnot supported inside jsx github gist for more
                 */}
                 <QA Items={items}/>

            </Route>
            <Route path={'/dropdown'}>
                <Dropdown options={options}/>
            </Route>
        </div>
        
        
    )
}
export default App;
//// You were tring to call function in return block that support jsx without div element you need to nest the function inside div element