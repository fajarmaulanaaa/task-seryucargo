import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import RegulerTeks from '../atoms/RegulerTeks';
import authStore from '@/context/auth/authStore';
import { CircularProgress } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    height: 250,
    borderRadius: '24px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Proops {
    open: boolean;
    onClose: () => void;
}

const AuthPopUp: React.FC<Proops> = ({ open, onClose }) => {
    const { loadingLogin, handleRequestToken, handleDeleteSession } = authStore()
    return (
        <Modal
            disableScrollLock
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box
                        onClick={() => {
                            if (!loadingLogin) {
                                handleRequestToken()
                            }
                        }}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
                        <Image src={'/assets/img/tmdb.png'} width={164} height={164} alt='tmdb' />
                        {
                            loadingLogin ?
                                <CircularProgress size='24px' />
                                :
                                <RegulerTeks text='Login with TMDB' size='14px' fontWeight='400' />
                        }
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default AuthPopUp