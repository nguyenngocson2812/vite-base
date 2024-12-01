import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dữ liệu đăng ký:', formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
            <h2 className="text-2xl font-semibold text-center mb-6">Đăng ký tài khoản</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <TextField
                        label="Tên người dùng"
                        variant="outlined"
                        fullWidth
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <TextField
                        label="Mật khẩu"
                        variant="outlined"
                        type="password"
                        fullWidth
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="py-2"
                    >
                        Đăng ký
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Register;
