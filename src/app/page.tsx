// 'use client'
import NowPlaying from '@/component/organisms/NowPlaying';
import TopRatedMovie from '@/component/organisms/TopRatedMovie';
import ContainerPages from '@/component/templates/ContainerPages';
import { useSearchParams } from 'next/navigation'
import authStore from '@/context/auth/authStore'
import watchlistStore from '@/context/watchlist/watchlistStore'
import favoriteStore from '@/context/favorite/favoriteStore'

import React, { useEffect } from 'react'

export default function Home() {
  // const searchParams = useSearchParams()
  // const request_token = searchParams.get('request_token');
  // const approved = searchParams.get('approved');
  // const { handleCreateSession } = authStore();
  // const { getDataWatchlistMovie } = watchlistStore();
  // const { getDataFavoriteMovie } = favoriteStore();
  // const session = localStorage.getItem('session_id')
  // useEffect(() => {
  //   if (!session && request_token && approved === 'true') {
  //     handleCreateSession(request_token)
  //   }
  //   if (session) {
  //     getDataFavoriteMovie(atob(session))
  //     getDataWatchlistMovie(atob(session))
  //   }
  // }, [])
  return (
    <ContainerPages>
      <NowPlaying />

      {/* top Rate Movie  */}
      <TopRatedMovie />
    </ContainerPages>
  );
}
