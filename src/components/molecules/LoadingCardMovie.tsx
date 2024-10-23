import { Box, CircularProgress } from '@mui/material';
import React from 'react'
import colors from '@/utils/colors';

const LoadingCardMovie = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress sx={{ color: colors.white }} />
        </Box>
    )
}

export default LoadingCardMovie