import { Typography } from '@mui/material';
import React from 'react'

interface Proops {
    text: string;
    fontWeight?: string;
    size?: string;
    color?: string
    maxLine?: number;
    fontStyle?: string;
}

const RegulerTeks: React.FC<Proops> = ({ text, fontWeight, size, color, maxLine, fontStyle }) => {
    return (
        <Typography sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: maxLine,
            color: color, fontSize: size ?? { xs: '12px', sm: '12px', md: '14px', lg: '18px' }, fontWeight: fontWeight ?? '400',
            fontStyle: fontStyle
        }}>
            {text}
        </Typography>
    );
};

export default RegulerTeks