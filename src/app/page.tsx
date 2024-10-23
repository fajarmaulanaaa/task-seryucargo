import HomePage from '@/component/pages/homePage';
import dynamic from 'next/dynamic';
import React from 'react'
// const Homepage = dynamic(
//   () => import('../component/pages/homePage'),
//   { ssr: false }
// )

export default function Home() {
  return (
    <HomePage />
  );
}
