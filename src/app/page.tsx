import NowPlaying from '@/component/organisms/NowPlaying';
import TopRatedMovie from '@/component/organisms/TopRatedMovie';
import ContainerPages from '@/component/templates/ContainerPages';

import React from 'react'

export default function Home() {
 
  return (
    <ContainerPages>
      <NowPlaying />

      {/* top Rate Movie  */}
      <TopRatedMovie />
    </ContainerPages>
  );
}
