import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk('getPost',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    }
)
    