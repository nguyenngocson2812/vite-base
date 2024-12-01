// src/api/axiosInstance.js
import axios from 'axios';

// https://api-xi-fawn.vercel.app/api/v1/auth/profile
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api-xi-fawn.vercel.app/api/v1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const endpoint = {
    post: 'posts',
    auth: "auth",
    todos: "todos"
}

export default axiosInstance;