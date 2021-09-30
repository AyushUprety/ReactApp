import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.js';
import Container from './container.js';
const faker = require("faker");



const App = ()=>{
    return(
        
        <div>
            <Container>
                <Comment author="Ayush" content="I am hero" timeago="Today at 6pm" avatar={faker.image.avatar()}/>
            </Container>
            <Container>
                <Comment author="sandeep" content="angryyoungman" timeago="Today at 5pm" avatar={faker.image.avatar()}/>
            </Container>
            <Container>
                <Comment author="dipgiri" content="cat.com" timeago="Today at 4pm" avatar={faker.image.avatar()}/>
            </Container>
        </div>
    
    )
        
}

ReactDOM.render(<App />,document.querySelector('#root'));