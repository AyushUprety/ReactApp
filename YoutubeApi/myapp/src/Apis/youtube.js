import React from "react";
import axios from 'axios'

const key= 'AIzaSyCkWyDZUzhdDtfoITVxXqLh4C9ywzgh-ng';

axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    part:snippet,
    maxResults:5	
})