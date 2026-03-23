import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081/api', // Pointing to the Spring Boot backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
