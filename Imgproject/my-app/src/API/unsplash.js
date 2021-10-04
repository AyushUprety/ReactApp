import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID BFQ-XsNXkU6iZ8BmQSlzdQ8uA-nyLMJnYQr9iUdAl-g',
}})