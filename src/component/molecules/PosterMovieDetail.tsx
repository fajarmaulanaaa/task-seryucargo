import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'

interface Proops {
    path: string;
    title: string;
}

const PosterMovieDetail: React.FC<Proops> = ({ path, title }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${path}`}
                alt={title}
                width={200}
                height={300}
            />
        </Box>
    )
}

export default PosterMovieDetail