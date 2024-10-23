import { Box } from '@mui/material'
import React from 'react'
import IconButtonComponent from '../atoms/IconButton'
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import authStore from '@/context/auth/authStore';
import favoriteStore from '@/context/favorite/favoriteStore';
import watchlistStore from '@/context/watchlist/watchlistStore';
import colors from '@/utils/colors';

interface Proops {
    id: number;
}

const IconToogleMovie: React.FC<Proops> = ({ id }) => {
    const session = localStorage.getItem('session_id')
    const { setPopUpLogin } = authStore();
    const { dataFavorite, handleToogleMovie } = favoriteStore()
    const { dataWatchlist } = watchlistStore()

    const checkIfIdsExist = (id: number, button: 'favorite' | 'watchlist') => {
        if (button === 'favorite') {
            if (dataFavorite) {
                return !!dataFavorite.results.find((item: any) => item.id === id);
            } else {
                return false
            }
        } else {
            if (dataWatchlist) {
                return !!dataWatchlist.results.find((item: any) => item.id === id);
            } else {
                return false
            }
        }

    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <IconButtonComponent
                icon={
                    checkIfIdsExist(id, 'watchlist') ?
                        <FaBookmark color="white" size={24} /> :
                        <FaRegBookmark color="white" size={24} />
                }
                onClick={() => {
                    session ?
                        handleToogleMovie(id, atob(session), !checkIfIdsExist(id, 'watchlist'), 'watchlist') :
                        setPopUpLogin(true)
                }} />

            <IconButtonComponent
                icon={
                    checkIfIdsExist(id, 'favorite') ?
                        <MdFavorite color={colors.error} size={24} /> :
                        <MdFavoriteBorder color="white" size={24} />
                }
                onClick={() => {
                    session ? handleToogleMovie(id, atob(session), !checkIfIdsExist(id, 'favorite'), 'favorite') :
                        setPopUpLogin(true)
                }} />
        </Box>
    )
}

export default IconToogleMovie