import React from 'react'
import ContainerPages from '../templates/ContainerPages'
import MovieDetailSection from '../organisms/MovieDetailSection'
import RecomendationsSection from '../organisms/RecomendationsSection'

const MovieDetailPage = ({ params }: { params: { id: number } }) => {
    return (
        <ContainerPages>

            {/* movie detail section  */}
            <MovieDetailSection params={params} />

            {/* recomendations  */}
            <RecomendationsSection params={params} />

        </ContainerPages>
    )
}

export default MovieDetailPage