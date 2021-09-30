import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.js';

const App = ()=>{
    return(
        <div>
            <Comment author="Ayush" description="I am hero" />
            <Comment author="sandeep" description="angryyoungman" />
            <Comment author="dipgiri" description="cat.com" />
        </div>
    
    )
        
}

ReactDOM.render(<App />,document.querySelector('#root'));