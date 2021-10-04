import React from "react";
import './imagelist.css';

const ImgList = (props) =>{ 
    const Images = props.images;
    const returnImage = Images.map(({id,urls,description}) =>{
        return <img key={id} src={urls.regular} alt={description} />;
    }) 
    return(
        <div className="imageList">{returnImage}</div>
    )
}
export default ImgList;