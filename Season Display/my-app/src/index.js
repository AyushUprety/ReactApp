import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasondisplay';
import Loader from './loader'

class App extends React.Component{
  state={lat:null, errMessage:''}
  componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err=>this.setState({errMessage:err.message})
            )
    }
    render() {
        if(this.state.errMessage && !this.state.lat){
            return <div>
                {this.state.errMessage}
            </div>
        }
        else if(this.state.lat && !this.state.errMessage){
            return <SeasonDisplay lat={this.state.lat} />
            
        }
        return <Loader />;
    
        

    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))