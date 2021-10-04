import React from 'react'
import unsplash from '../API/unsplash'
import SearchBar from './searchbar'
import ImageList from './imagelist'

class App extends React.Component {
    state ={image:[]}

    submitForm=async(event)=>{
        const response = await unsplash.get('/search/photos',{
            params:{query:event},
            headers:{
                Authorization:'Client-ID BFQ-XsNXkU6iZ8BmQSlzdQ8uA-nyLMJnYQr9iUdAl-g',
        }
        }
        )
        console.log(this)
        console.log(response.data.results);
        this.setState({image:response.data.results});
      
    }
    
    render() {
        return (
            <div className="ui segment container">
                 <SearchBar submit={this.submitForm}/>
                 <h1>Found {this.state.image.length} images</h1>
            </div>
           
        )
    }
    }
   
export default App;