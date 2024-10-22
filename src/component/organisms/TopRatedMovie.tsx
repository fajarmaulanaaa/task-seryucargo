'use client'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import TitleTeks from '../atoms/TitleTeks'
import rateMovieStore from '@/context/ratemovie/rateMovieStore'
import MovieCard from '../molecules/MovieCard'
import LoadingCardMovie from '../molecules/LoadingCardMovie'
import NoMovieFound from '../molecules/NoMovieFound'

const TopRatedMovie = () => {
    const { dataRateMovie, loadingRateMovie, getDataRatemovie } = rateMovieStore();
    useEffect(() => {
        getDataRatemovie()
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '5px', lg: '10px 64px' }, margin: '8px 16px' }} >

            {/* title  */}
            <TitleTeks text='Top Rate Movie' />

            {/* movie card  */}
            <Box sx={{ mt: '16px' }}>
                {
                    loadingRateMovie ?
                        <LoadingCardMovie /> :
                        dataRateMovie && dataRateMovie.results.length !== 0 ?
                            <Grid container spacing={2}>
                                {
                                    dataRateMovie.results.map((item, index) => (
                                        <Grid spacing={1} key={index} item xs={6} sm={4} md={3} lg={2} sx={{ alignItems: "center", }}>
                                            <Box>
                                                <MovieCard
                                                    id={item.id}
                                                    title={item.original_title}
                                                    years={item.release_date.toString()}
                                                    img={item.poster_path}
                                                />
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            :
                            <NoMovieFound />
                }
            </Box>
        </Box>
    )
}

export default TopRatedMovie