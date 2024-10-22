import colors from '@/utils/colors';
import { Box } from '@mui/material';
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

interface ContainerProops {
    children: ReactNode;
}
const ContainerPages: React.FC<ContainerProops> = ({ children }) => {
    return (
        <Box sx={{ color: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto', width: '100%', backgroundColor: colors.primaryDark }}>
            {children}
            <ToastContainer />
        </Box>
    )
}

export default ContainerPages