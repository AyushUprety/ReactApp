import React from "react";

class Searchbar extends React.Component{
  state={text:'Enter the Value:'}
//   constructor(){
//       super();
//       this.onFormSubmit = this.onFormSubmit.bind(this);
//   }
  onFormSubmit=(e)=>{ 
    e.preventDefault();
    // console.log(this.state.text);
    this.props.submit(this.state.text);
  }
   render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit} className="ui container form segment" style={{marginTop: '10px'}}>
                <div className="field">
                <label for="search">Image Search</label>
                <input type="text" id="search" name="search" value={this.state.text} onChange={e=>this.setState({text:e.target.value})}></input>
                </div>
                
            </form>
        </div>
    )
}
   }
    
export default Searchbar;