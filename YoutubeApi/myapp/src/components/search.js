import React from 'react';


class Search extends React.Component {
    state={term:'dsadasd'}
    onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.term);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="ui container segment">
                    <label for="search">Enter the search term:</label>
                    <input type="text" id="search" name="search"  value={this.state.term} onChange={(e)=>{this.setState({term: e.target.value})}}></input>
                </form>
            </div>
        )
    }
}
export default Search;