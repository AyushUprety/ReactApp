import React from 'react';


class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.refer = React.createRef();
    }
    componentDidMount() {
        this.refer.current.addEventListener('load',this.setSpans)
    }
    setSpans=() => {
        console.log(this.refer.current.clientHeight);
    }

    
    render() {
        // console.log(this.props)
        const{alt,src}=this.props;
        return (
        <div>
            <img 
                ref={this.refer}
                alt={alt} 
                src={src}
            />
        </div>
        );
    }
}
export default ImageCard;