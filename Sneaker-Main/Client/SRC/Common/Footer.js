import React from 'react';
import { Typography,Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#F3F3F3',
            py: 3,
            textAlign: 'center',
        }}>
        <Typography variant="body">
          @2022 - All rights reserved by Sneaker Seeker.
        </Typography>
        </Box>
    );
};

export default Footer;