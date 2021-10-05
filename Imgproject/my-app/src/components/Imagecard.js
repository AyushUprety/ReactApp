import React from 'react';


class ImageCard extends React.Component {
    render() {
        console.log(this.props)
        const{alt,src}=this.props;
        return (
        <div>
            <img 
                alt={alt} 
                src={src}
            />
        </div>
        );
    }
}
export default ImageCard;