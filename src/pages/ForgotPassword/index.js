import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
    },
    form: {
        backgroundColor: '#f9f9f9',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    input: {
        marginBottom: '20px',
    },
    button: {
        width: '100%',
    },
});

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the password reset logic here
        console.log('Password reset email sent to:', email);
    };

    return (
        <Container className={classes.container}>
            <div className={classes.form}>
                <Typography variant="h5" className={classes.heading}>
                    Forgot Password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Enter your email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4" // Tailwind margin
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                    >
                        Send Reset Link
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default ForgotPassword;
