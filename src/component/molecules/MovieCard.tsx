import { Box, Card, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import colors from '@/utils/colors';
import RegulerTeks from '../atoms/RegulerTeks';
import { useRouter } from 'next/navigation';
import IconToogleMovie from './IconToogleMovie';

interface CardProops {
    id: number;
    title: string;
    years: string;
    img: string;
}

const MovieCard: React.FC<CardProops> = ({ id, title, years, img }) => {
    const mobile = useMediaQuery('(max-width:600px)');
    const router = useRouter();
    return (
        <Card
            sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondaryDark,
                cursor: 'pointer'
            }} >
            <Box sx={{ position: 'relative', width: '200px', height: '355px' }}>
                {/* Image */}
                <Box onClick={() => { router.push(`/movie/${id}`) }} >
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${img}`}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        style={{ borderRadius: '8px' }}
                    />
                </Box>

                {/* Icons */}
                <Box sx={{
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'absolute',
                    alignItems: 'center',
                    bottom: 15,
                    right: 10,
                    gap: '3px',
                }}>
                    <IconToogleMovie id={id} />
                </Box>
            </Box>
            <Box onClick={() => { router.push(`/movie/${id}`) }} sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', gap: '5px', width: '100%', m: '12px 0'
            }}>
                <RegulerTeks size={mobile ? '16px' : '18px'} fontWeight='700' color={colors.textColor} text={title} maxLine={1} />
                <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='400' color={colors.textColor} text={years.slice(0, 4)} maxLine={1} />
            </Box>

        </Card>
    )
}

export default MovieCard