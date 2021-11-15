import React from 'react';

const Header = ()=>{
    return (
        <div className="ui secondary pointing menu">
            <a className="item" href='/dropdown'>Dropdown</a>
            <a className="item" href='/accordion'>Accordion</a>
            <a className="item" href='/convert'>Convert</a>
        </div>
    )
}
export default Header;