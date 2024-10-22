import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import RegulerTeks from '../atoms/RegulerTeks';
import colors from '@/utils/colors';
import { MovieDetailModel } from '@/models/movieDetailsModel';
import { TbPointFilled } from "react-icons/tb";
import { convertDate, convertMinutesToHoursAndMinutes } from '@/utils/helper';
import UserRating from './UserRating';
import IconToogleMovie from './IconToogleMovie';
import RatingUserSection from './RatingUserSection';

interface Proops {
    item: MovieDetailModel
}

const PropertiesMovieDetail: React.FC<Proops> = ({ item }) => {
    const mobile = useMediaQuery('(max-width:600px)');
    const genreNames = item.genres.map(genre => genre.name).join(', ');
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'start', justifyContent: 'start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <RegulerTeks size={mobile ? '18px' : '28px'} fontWeight='700' color={colors.white} text={item.original_title} maxLine={1} />
                <RegulerTeks size={mobile ? '18px' : '28px'} fontWeight='400' color={colors.white} text={`(${item.release_date.toString().slice(0, 4)})`} maxLine={1} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='300' color={colors.white} text={convertDate(item.release_date.toString(), 'DD/MM/YYYY')} maxLine={1} />
                <TbPointFilled size={16} color={colors.white} />
                <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='300' color={colors.white} text={genreNames} maxLine={1} />
                <TbPointFilled size={16} color={colors.white} />
                <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='300' color={colors.white} text={convertMinutesToHoursAndMinutes(item.runtime)} maxLine={1} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <UserRating value={item.vote_average} />
                <Box sx={{ ml: '8px' }}>
                    <RegulerTeks size={'8px'} fontWeight='400' color={colors.white} text={'User'} />
                    <RegulerTeks size={'8px'} fontWeight='400' color={colors.white} text={'Score'} />
                </Box>
                <IconToogleMovie id={item.id} />
                <RatingUserSection id={item.id} title={item.title} />
            </Box>

            <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='300' color={colors.white} text={item.tagline} maxLine={1} fontStyle='italic' />
            <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='600' color={colors.white} text={'Overview'} maxLine={1} />
            <RegulerTeks size={mobile ? '12px' : '14px'} fontWeight='300' color={colors.white} text={item.overview} maxLine={5} />

        </Box>
    )
}

export default PropertiesMovieDetail