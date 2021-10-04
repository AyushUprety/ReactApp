import React from 'react'
import unsplash from '../API/unsplash'
import SearchBar from './searchbar'
import ImageList from './imagelist'

class App extends React.Component {
    state ={image:[]}

    submitForm=async(event)=>{
        const response = await unsplash.get('/search/photos',{
            params:{query:event},
        }
        )
        // console.log(this)
        // console.log(response.data.results);
        this.setState({image:response.data.results});
      
    }
    
    render() {
        return (
            <div className="ui segment container">
                 <SearchBar submit={this.submitForm}/>
                 <ImageList images={this.state.image}/>
            </div>
           
        )
    }
    }
   
export default App;