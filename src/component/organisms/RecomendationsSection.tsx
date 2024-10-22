'use client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import TitleTeks from '../atoms/TitleTeks'
import SwiperMovie from '../molecules/SwiperMovie'
import LoadingCardMovie from '../molecules/LoadingCardMovie'
import NoMovieFound from '../molecules/NoMovieFound'
import movieDetailStore from '@/context/movie-detail/movieDetailStore'

const RecomendationsSection = ({ params }: { params: { id: number } }) => {
    const { getDataRecomendations, dataRecomendations, loadingRecomendations } = movieDetailStore()
    useEffect(() => {
        getDataRecomendations(params.id)
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '5px', lg: '10px 64px' }, margin: '8px 16px' }} >

            {/* title  */}
            <TitleTeks text='Recomendations' />

            {/* card movie  */}
            <Box sx={{ mt: '16px' }}>
                {
                    loadingRecomendations ?
                        // loading 
                        <LoadingCardMovie />
                        :
                        dataRecomendations && dataRecomendations.results.length !== 0 ?
                            <SwiperMovie
                                dataMovie={dataRecomendations.results.map(item => ({
                                    id: item.id,
                                    title: item.original_title,
                                    years: item.release_date.toString(),
                                    img: item.poster_path
                                }))} />
                            :
                            // not found 
                            <NoMovieFound />
                }
            </Box>
        </Box>
    )
}

export default RecomendationsSection