import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile, loginUser } from '../middlewares/authMiddleware';

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle', 
    error: null,
    isLogin: false, 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
            state.isLogin = false;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch user profile';
            })
            // Login user
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to log in';
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice;
