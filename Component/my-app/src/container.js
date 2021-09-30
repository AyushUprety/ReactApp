import React from 'react';


const Container = (props)=>{
return(
<div className="ui cards">
  <div className="card">
    <div className="content">
    <div class="description">
        {props.children}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
</div>
</div>
)
}

export default Container;
