import MovieDetailPage from '@/component/pages/movieDetailPage'
import React from 'react'

export default function Page({ params }: { params: { id: number } }) {
    return (
        <MovieDetailPage params={params} />
    )
}

// export default page