'use client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import TitleTeks from '../atoms/TitleTeks'
import SwiperMovie from '../molecules/SwiperMovie'
import nowPlayingStore from '@/context/now-playing/nowPlayingStore'
import LoadingCardMovie from '../molecules/LoadingCardMovie'
import NoMovieFound from '../molecules/NoMovieFound'
import { useSearchParams } from 'next/navigation'
import authStore from '@/context/auth/authStore'
import watchlistStore from '@/context/watchlist/watchlistStore'
import favoriteStore from '@/context/favorite/favoriteStore'

const NowPlaying = () => {
    const { getDataNowPlaying, dataNowPlaying, loadingNowPlaying } = nowPlayingStore()
    const searchParams = useSearchParams()
    const request_token = searchParams.get('request_token');
    const approved = searchParams.get('approved');
    const { handleCreateSession } = authStore();
    const { getDataWatchlistMovie } = watchlistStore();
    const { getDataFavoriteMovie } = favoriteStore();
    const session = localStorage.getItem('session_id')
    useEffect(() => {
        if (!session && request_token && approved === 'true') {
            handleCreateSession(request_token)
        }
        if (session) {
            getDataFavoriteMovie(atob(session))
            getDataWatchlistMovie(atob(session))
        }
    }, [])

    useEffect(() => {
        getDataNowPlaying()
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '5px', lg: '10px 64px' }, margin: '8px 16px' }} >

            {/* title  */}
            <TitleTeks text='Now Playing' />

            {/* card movie  */}
            <Box sx={{ mt: '16px' }}>
                {
                    loadingNowPlaying ?
                        // loading 
                        <LoadingCardMovie />
                        :
                        dataNowPlaying && dataNowPlaying.results.length !== 0 ?
                            <SwiperMovie
                                dataMovie={dataNowPlaying.results.map(item => ({
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

export default NowPlaying