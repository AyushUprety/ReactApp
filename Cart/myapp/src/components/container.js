import React from 'react';

const Container = ({Name,img})=>{
    return (
        
        
      <div className="ui card">
      <div className="image">
        <img src={img}/>
      </div>
      <div className="content">
        <a className="header">{Name}</a>
        <div className="meta">
          <span className="date">Added in 2020</span>
        </div>
      </div>
      <div className="extra content">
        <a>
        <i class="fas fa-arrow-up"></i>
        22 Friends
        <i class="fas fa-arrow-down"></i>
        </a>
      </div>
    </div>
    )
}
export default Container;