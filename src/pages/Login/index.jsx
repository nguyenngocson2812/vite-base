import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../stores/middlewares/authMiddleware';
import { errorToast, successToast } from '../../utils/toast';
import { emailRegex } from '../../utils/regex';
import Loading from '../../components/Loading';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLogin, status } = useSelector((state) => state.auth);

    // Navigate to home page if login is successful
    useEffect(() => {
        if (isLogin) {
            successToast('Login successful');
            navigate('/');
        }
    }, [isLogin, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.trim() || !password.trim()) {
            errorToast('Email and password must not be empty!');
            return;
        }

        if (!emailRegex.test(email.trim())) {
            errorToast('Invalid email format!');
            return;
        }

        // Dispatch login action
        dispatch(loginUser({ email: email.trim(), password: password.trim() }));
    };

    // Show loading spinner while logging in
    if (status === 'loading') {
        return <Loading />;
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth type="submit">
                        Log In
                    </Button>
                </form>

                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                    <Link to="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>

                {/* Register Link */}
                <div className="mt-4 text-center">
                    <Typography variant="body2">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </Typography>
                </div>
            </div>
        </Container>
    );
}

export default Login;
