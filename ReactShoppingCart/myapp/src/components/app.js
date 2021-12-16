import React from 'react';
import Header from './header';
import Product from './products';
import Cart from './cart';

const App = ()=>{
    return(
        <div>
            <Header/>
            <div className="items-container">
                <Product/>
            </div>
        <Cart/>
        </div>
    )
}
export default App;