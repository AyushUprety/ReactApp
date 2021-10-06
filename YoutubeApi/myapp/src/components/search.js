import React from 'react';
import youtube from '../Apis/youtube';


class Search extends React.Component {
    state={term:[]}
    onFormSubmit=async(e)=>{
        e.preventDefault();
        console.log(e);
        const response = await youtube.get('/search',{
            params: {
                q:this.state.term
            }
        })
        console.log(response);
        this.setState({term:response.data.items})

    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="ui container segment">
                    <label htmlFor="search">Enter the search term:</label>
                    <input type="text" id="search" name="search" ></input>
                </form>
                    There are {this.state.term.length} videos.
            </div>
        )
    }
}
export default Search;