'use client'
import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import colors from '@/utils/colors'
import { TbLogout2 } from "react-icons/tb";
import IconButtonComponent from '../atoms/IconButton'
import GeneralButton from '../atoms/GeneralButton';
import RegulerTeks from '../atoms/RegulerTeks';
import authStore from '@/context/auth/authStore';

const AuthButton = () => {
    const { handleDeleteSession, loadingDelete } = authStore();
    const session = localStorage.getItem('session_id')
    return (
        <Box>
            {
                session &&
                <IconButtonComponent
                    icon={
                        loadingDelete ?
                            <CircularProgress size={'24px'} sx={{ color: colors.white }} />
                            :
                            <TbLogout2 size={32} color={colors.white} />
                    }
                    disable={loadingDelete}
                    onClick={() => handleDeleteSession(atob(session))} />
                // :
                // <GeneralButton
                //     disable={loadingLogin}
                //     onClick={() => { handleRequestToken() }} variant='contained' color={colors.white} bgColor={colors.primary}>
                //     <RegulerTeks text='Login' />
                // </GeneralButton>
            }
        </Box>
    )
}

export default AuthButton