import React from 'react';
import product from './product'

const Navbar = ()=>{
    return(
        <div className='ui menu'>
           
            <a className='item'>Our Company</a>
            <div className='right menu'>
            <a className="active teal item">
                Cart
            <div className="ui teal right pointing label">1</div>
            </a>
            </div>
        </div>
    )
}
export default Navbar;