import React from "react";
import './imagelist.css';
import ImageCard from "./Imagecard"

const ImgList = (props) =>{ 
    const Images = props.images;
    console.log(Images);
    const returnImage = Images.map(({id,urls,description}) =>{
        return <ImageCard key={id} src={urls.regular} alt={description} />;
    }) 
    return(
        <div className="imageList">{returnImage}</div>
    )
}
export default ImgList;