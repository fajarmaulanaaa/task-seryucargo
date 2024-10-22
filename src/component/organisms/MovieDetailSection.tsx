'use client'
import movieDetailStore from '@/context/movie-detail/movieDetailStore'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import LoadingCardMovie from '../molecules/LoadingCardMovie'
import NoMovieFound from '../molecules/NoMovieFound'
import BackdropMovie from '../molecules/BackdropMovie'
import PosterMovieDetail from '../molecules/PosterMovieDetail'
import PropertiesMovieDetail from '../molecules/PropertiesMovieDetail'

const MovieDetailSection = ({ params }: { params: { id: number } }) => {
    const { getDataDetail, dataDetail, loadingDetail } = movieDetailStore()
    useEffect(() => {
        getDataDetail(params.id.toString())
    }, [])
    return (
        <Box>
            {
                loadingDetail ?
                    <LoadingCardMovie />
                    :
                    dataDetail ?
                        <BackdropMovie path={dataDetail.backdrop_path}>
                            <Box sx={{
                                padding: { xs: '16px', lg: '18px 80px' }, width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Grid spacing={1} item xs={12} sm={12} md={6} lg={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <PosterMovieDetail path={dataDetail.poster_path} title={dataDetail.original_title} />
                                    </Grid>
                                    <Grid spacing={1} item xs={12} sm={12} md={6} lg={10} >
                                        <PropertiesMovieDetail item={dataDetail} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </BackdropMovie>
                        :
                        <NoMovieFound />
            }
        </Box>
    )
}

export default MovieDetailSection