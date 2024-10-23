// import FavoritePage from '@/component/pages/favoritePage'
import React from 'react'
import dynamic from 'next/dynamic'
 
const FavoritePage = dynamic(
  () => import('@/components/pages/favoritePage'),
  { ssr: false }
)

const page = () => {
    return (
        <FavoritePage />
    )
}

export default page