import React from "react";

class Searchbar extends React.Component{
   onInputChange(event){
       console.log(event.target.value);
   }
   render() {
    return (
        <div>
            <form className="ui container form segment" style={{marginTop: '10px'}}>
                <div className="field">
                <label for="search">Image Search</label>
                <input type="text" id="search" name="search" onChange={this.onInputChange}></input>
                </div>
                
            </form>
        </div>
    )
}
   }
    
export default Searchbar;