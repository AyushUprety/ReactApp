import React from 'react';
import Navbar from './navbar'
import Products from './products'
import Data from './data'

const App=()=>{
    const {products}=Data;
    return(
        <div>
            <Navbar/>
                <div className="ui grid">
                    <div className="six wide column">
                        <Products Products={products}/>
                    </div>
            
                </div>
        </div>
    )
}
export default App;