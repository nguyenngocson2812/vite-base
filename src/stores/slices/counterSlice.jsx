// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getPost } from '../middlewares/postMiddleware';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        postList: [],
        status: 'idle',
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
    },
    // call api
    extraReducers: (builder) => {
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.status = 'success';
            state.postList = action.payload;
        });
        builder.addCase(getPost.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(getPost.rejected, (state, action) => {
            state.status = 'error';
        });
    },
});

export default counterSlice;
