'use client'
import React, { useEffect } from 'react'
import ContainerPages from '../templates/ContainerPages'
import TopRatedMovie from '../organisms/TopRatedMovie'
import NowPlaying from '../organisms/NowPlaying'
import { useSearchParams } from 'next/navigation'
import authStore from '@/context/auth/authStore'
import watchlistStore from '@/context/watchlist/watchlistStore'
import favoriteStore from '@/context/favorite/favoriteStore'

const HomePage = () => {
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
        <ContainerPages>

            {/* now playing  */}
            {/* <NowPlaying /> */}
            halo
            {/* top Rate Movie  */}
            {/* <TopRatedMovie /> */}

        </ContainerPages>
    )
}

export default HomePage