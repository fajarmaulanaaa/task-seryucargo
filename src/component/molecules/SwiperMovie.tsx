'use client'
import React from 'react'
import MovieCard from './MovieCard';
import { useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/navigation';

interface Data {
    id: number
    title: string
    years: string
    img: string

}

interface SwiperProops {
    dataMovie: Data[];
}

const SwiperMovie: React.FC<SwiperProops> = ({ dataMovie }) => {
    const dekstop = useMediaQuery('(min-width:1200px)');
    const tab = useMediaQuery('(min-width:700px)');

    return (
        <Swiper
            grabCursor={true}
            slidesPerView={dekstop ? 6.3 : tab ? 4.5 : 1.5}
            loop={false}
            modules={[Navigation]}
            spaceBetween={dekstop ? 10 : 30}
            autoplay={false}
        >
            {
                dataMovie.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'center', }}>
                        <MovieCard
                            id={item.id}
                            title={item.title}
                            years={item.years}
                            img={item.img}
                        />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default SwiperMovie