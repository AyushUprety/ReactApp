import React from 'react'
import axios from 'axios'
import SearchBar from './searchbar'

class App extends React.Component {
    submitForm=(event)=> {
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query:event},
            headers:{
                Authorization:'Client-ID BFQ-XsNXkU6iZ8BmQSlzdQ8uA-nyLMJnYQr9iUdAl-g'
        }
        }
        )
        console.log(event)
    }
    
    render() {
        return (
            <SearchBar submit={this.submitForm}/>
        )
    }
    }
   
export default App;