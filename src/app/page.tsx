import dynamic from 'next/dynamic';
import React from 'react'
const Homepage = dynamic(
  () => import('../component/pages/homePage'),
  { ssr: false }
)

const page = () => {
  return (
    <React.Fragment>
      <Homepage />
    </React.Fragment>
  );
}

export default page