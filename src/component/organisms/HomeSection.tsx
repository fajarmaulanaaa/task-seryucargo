'use client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import NowPlaying from './NowPlaying'
import TopRatedMovie from './TopRatedMovie'
import { useSearchParams } from 'next/navigation'
import authStore from '@/context/auth/authStore'
import watchlistStore from '@/context/watchlist/watchlistStore'
import favoriteStore from '@/context/favorite/favoriteStore'

const HomeSection = () => {
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
    return (
        <Box>
            {/* now playing  */}
            <NowPlaying />

            {/* top Rate Movie  */}
            <TopRatedMovie />
        </Box>
    )
}

export default HomeSection