import colors from '@/utils/colors'
import { Typography } from '@mui/material'
import React from 'react'

const LogoTeks = () => {
    return (
        <Typography sx={{ color: colors.white, fontSize: { xs: '28px', sm: '24px', md: '32px', lg: '48px' }, fontWeight: 900, lineHeight: '72px', letterSpacing: '0.5em', textAlign: 'left' }}>
            CINEMA
        </Typography>
    )
}

export default LogoTeks