import dynamic from 'next/dynamic';
import React from 'react'
const Homepage = dynamic(
  () => import('../components/pages/homePage'),
  { ssr: false }
)

export default function Home() {
  return (
    <React.Fragment>
      <Homepage />
    </React.Fragment>
  );
}
