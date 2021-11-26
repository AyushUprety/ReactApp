import React from 'react';
import Navbar from './navbar'
import Container from './container'
import Data from './data'

const App=()=>{
    const {products}=Data;
    return(
        <div>
            <Navbar/>
                <div className="ui grid">
                    <div className="six wide column">
                        <Container Products={products}/>
                    </div>
            
                </div>
        </div>
    )
}
export default App;