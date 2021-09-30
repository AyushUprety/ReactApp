import React from "react";
const faker = require("faker");

const Comment = (props)=>{
    return(
        <div className="comment">
            <div className="name">
                {console.log(props)}
                {props.author}
            </div>
            <div className="faker">
                <img src={faker.image.avatar()} />
            </div>
        </div>
    )
}
export default Comment;