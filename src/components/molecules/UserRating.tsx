import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import colors from '@/utils/colors';
import RegulerTeks from '../atoms/RegulerTeks';

interface UserRatingProps {
    value: number;
}

const UserRating: React.FC<UserRatingProps> = ({ value }) => {
    const percentage = (value / 10) * 100;
    return (
        <Box sx={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: colors.white,
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CircularProgress sx={{ color: colors.primary }} variant="determinate" value={percentage} size={24} thickness={4} />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <RegulerTeks size={'10px'} fontWeight='900' color={colors.primary} text={value.toFixed(1).toString()} />
            </Box>
        </Box>
    );
};

export default UserRating;
