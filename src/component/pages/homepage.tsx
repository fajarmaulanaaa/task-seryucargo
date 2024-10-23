'use client'
import React, { useEffect } from 'react'
import ContainerPages from '../templates/ContainerPages'
import TopRatedMovie from '../organisms/TopRatedMovie'
import NowPlaying from '../organisms/NowPlaying'
import { useSearchParams } from 'next/navigation'
import authStore from '@/context/auth/authStore'
import watchlistStore from '@/context/watchlist/watchlistStore'
import favoriteStore from '@/context/favorite/favoriteStore'

const Homepage = () => {
    const searchParams = useSearchParams()
    const request_token = typeof window !== 'undefined' ? searchParams.get('request_token') : null
    const approved = typeof window !== 'undefined' ? searchParams.get('approved') : null
    const { handleCreateSession } = authStore();
    const { getDataWatchlistMovie } = watchlistStore();
    const { getDataFavoriteMovie } = favoriteStore();
    const session = typeof window !== 'undefined' ? localStorage.getItem('session_id') : null
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
        <ContainerPages>

            {/* now playing  */}
            <NowPlaying />

            {/* top Rate Movie  */}
            <TopRatedMovie />

        </ContainerPages>
    )
}

export default Homepage