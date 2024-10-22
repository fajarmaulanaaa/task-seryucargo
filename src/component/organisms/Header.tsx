'use client'
import React from 'react'
import colors from '@/utils/colors'
import { Box, useMediaQuery } from '@mui/material'
import LogoTeks from '../atoms/LogoTeks'
import MenuNavigationBar from '@/utils/navMenu'
import MenuMobile from './MenuMobile'
import GeneralButton from '../atoms/GeneralButton'
import { useRouter } from 'next/navigation'
import AuthButton from '../molecules/AuthButton'
import AuthPopUp from '../molecules/AuthPopUp'
import authStore from '@/context/auth/authStore'
import SearchMovie from '../molecules/SearchMovie'

const Header = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const router = useRouter();
    const { popUpLogin, setPopUpLogin } = authStore();
    const session = localStorage.getItem('session_id')
    return (
        <Box sx={{
            padding: { xs: '5px', lg: '10px 64px' }, bgcolor: colors.primary, height: {
                xs: '150px', sm: '100px', justifyContent: 'center', display: 'flex',
                flexDirection: 'column', alignItems: { xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between' }
            }
        }}>
            <Box sx={{ margin: '8px 16px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <LogoTeks />

                {
                    mobile ?
                        <MenuMobile />
                        :
                        <Box sx={{ display: 'flex', flexDirection: 'Row' }}>
                            <SearchMovie />
                            {
                                MenuNavigationBar.map((item, index) => (
                                    <GeneralButton key={index} color={colors.white} variant='text'
                                        onClick={() => {
                                            if (item.title === 'Home') {
                                                router.push(item.path);
                                            } else {
                                                if (!session) {
                                                    setPopUpLogin(true)
                                                } else {
                                                    router.push(item.path);
                                                }
                                            }

                                        }} >{item.title}</GeneralButton>
                                ))
                            }
                            <Box sx={{ ml: '16px' }}>
                                <AuthButton />
                            </Box>
                        </Box>
                }

            </Box>
            {
                mobile && (
                    <SearchMovie />
                )
            }
            <AuthPopUp open={popUpLogin} onClose={() => setPopUpLogin(false)} />
        </Box>
    )
}

export default Header