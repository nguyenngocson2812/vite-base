import React, {useEffect, useState} from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom'; // for routing to Forgot Password and Register pages
import { toast } from 'react-toastify'; // Import React-Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import {errorToast, successToast} from '../../utils/toast.js';
import {emailRegex} from "../../utils/regex.js";
import Loading from "../../components/Loading/index.jsx";
import axios from "axios";
import {loginUser} from "../../api/auth.js";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, _] = useState(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(false);

    // Hàm xử lý khi người dùng nhấn submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!email || !password) {
            errorToast("Email và mật khẩu không được để trống!");
            return;
        }

        if (!emailRegex.test(email)) {
            errorToast("Email không đúng định dạng!");
        }
        const fetchData = await loginUser(email, password);
        setIsLoading(false);

    };
    const fetchAuth = async (token) => {
        const res = await axios.get('https://api-xi-fawn.vercel.app/api/v1/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        successToast("Login success")
    }

    useEffect(() => {
        if (token) {
            fetchAuth(token);
        }
    }, []);
    if(isLoading){
        return <Loading/>
    }

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <Typography variant="h4" className="text-center text-2xl mb-4 font-semibold">
                    Login
                </Typography>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        className="mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        className="mb-6"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                    >
                        Log In
                    </Button>
                </form>

                {/* Forgot Password link */}
                <div className="mt-4 text-center">
                    <Link
                        to="/forgot-password" // Assuming you have a route for Forgot Password page
                        className="text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Register link */}
                <div className="mt-4 text-center">
                    <Typography variant="body2">
                        Don't have an account?
                        <Link
                            to="/register" // Assuming you have a route for Register page
                            className="text-blue-500 hover:underline"
                        >
                            Register
                        </Link>
                    </Typography>
                </div>
            </div>

        </Container>
    );
}

export default Login;
