import React from "react";

const Comment = (props)=>{
    return(
        <div className="ui container comments">
            <div className="comment">
                <div className="avatar">
                    <img src={props.avatar} />
                </div>
                <div className="content">
                    {props.author}
                    <div className="meta">
                        {props.timeago}
                        <div className="text">
                            {props.content}
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    )
}
export default Comment;