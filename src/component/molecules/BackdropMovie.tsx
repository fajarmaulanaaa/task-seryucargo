import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface BacdropProops {
    children: ReactNode;
    path: string;
}

const BackdropMovie: React.FC<BacdropProops> = ({ path, children }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '600px', lg: '400px' },
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASEIMGURL}${path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
        >
            {children}

        </Box>
    );
};

export default BackdropMovie;
