import dynamic from 'next/dynamic';
import React from 'react'
const HomePage = dynamic(
  () => import('./home/homePage'),
  { ssr: false }
)

export default function Home() {
  return (
    <HomePage />
  );
}
