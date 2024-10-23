import dynamic from 'next/dynamic'
import React from 'react'

const WatchlistPage = dynamic(
    () => import('@/component/pages/watchlistPage'),
    { ssr: false }
)
const page = () => {
    return (
        <WatchlistPage />
    )
}

export default page