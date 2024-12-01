import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function NotFound() {
    return (
        <Container className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center">
                <Typography variant="h1" className="text-6xl font-bold text-red-600 mb-4">
                    404
                </Typography>
                <Typography variant="h5" className="text-xl mb-6">
                    Oops! The page you're looking for cannot be found.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    href="/"
                >
                    Go to Homepage
                </Button>
            </div>
        </Container>
    );
}

export default NotFound;
