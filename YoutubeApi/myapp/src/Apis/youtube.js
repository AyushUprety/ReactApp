import React from "react";
import axios from 'axios'

const key= 'AIzaSyCkWyDZUzhdDtfoITVxXqLh4C9ywzgh-ng';

const youtube=axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        key:key,
        part:'snippet',
        maxResults:5
    }
  	
})

export default youtube;
