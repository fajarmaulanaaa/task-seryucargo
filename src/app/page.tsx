
import HomePage from '@/component/pages/homePage';
import React from 'react'
// const Homepage = dynamic(
//   () => import('../component/pages/homePage'),
//   { ssr: false }
// )

const page = () => {
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
}

export default page