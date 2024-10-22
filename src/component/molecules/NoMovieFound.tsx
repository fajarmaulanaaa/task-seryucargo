import { Box } from '@mui/material'
import React from 'react'
import TitleTeks from '../atoms/TitleTeks'
import RegulerTeks from '../atoms/RegulerTeks'
import { MdSearchOff } from "react-icons/md"

const NoMovieFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <MdSearchOff color="white" size={48} />

            <TitleTeks text='No Movie Found' />
        </Box>
    )
}

export default NoMovieFound