'use client'
import React, { useEffect, useState } from 'react'
import GeneralButton from '../atoms/GeneralButton'
import RegulerTeks from '../atoms/RegulerTeks'
import colors from '@/utils/colors'
import { Backdrop, Box, Fade, Modal, Rating } from '@mui/material'
import rateMovieStore from '@/context/ratemovie/rateMovieStore'
import IconButtonComponent from '../atoms/IconButton'
import { IoClose } from "react-icons/io5";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 250,
    borderRadius: '24px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    justifyContent: 'center',
    gap: '8px'
};

interface Proops {
    id: number;
    title: string;
}

const RatingUserSection: React.FC<Proops> = ({ id, title }) => {
    const session = localStorage.getItem('session_id')
    const { popUpRating, dataRateUser, setPopUpRating, getRateUser, giftRateMovie, deleteRateMovie } = rateMovieStore();

    useEffect(() => {
        if (session) {
            getRateUser(atob(session))
        }
    }, [])
    const yourRating = dataRateUser?.results.find((item) => item.id === id) ?? null;
    const [rating, setRating] = useState(0)
    return (
        <Box>
            <GeneralButton borderRadius='16px' bgColor={colors.primary} color={colors.primary} variant='contained'
                onClick={() => {
                    if (yourRating) {
                        setRating(yourRating.rating)
                    }
                    setPopUpRating(true)
                }}>
                <RegulerTeks text={yourRating ? `Your Rating ${yourRating.rating}/10` : 'What is your Rating?'} size='14px' fontWeight='600' color={colors.white} />
            </GeneralButton>
            <Modal
                disableScrollLock
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={popUpRating}
                onClose={() => setPopUpRating(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={popUpRating}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <RegulerTeks text='Rating' fontWeight='900' />
                            <IconButtonComponent icon={<IoClose size={28} color={colors.error} />} onClick={() => setPopUpRating(false)} />
                        </Box>
                        <RegulerTeks fontStyle='italic' text={`'What did you think of ${title}?`} color={colors.primaryDark} fontWeight='600' size='14px' />
                        <Rating onChange={(e, newValue) => { if (newValue) { setRating(newValue) } }} precision={0.5} value={rating} defaultValue={rating} max={10} />
                        {
                            yourRating && (
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <GeneralButton variant='text' color={colors.primary} onClick={() => { setRating(0) }} >
                                        <RegulerTeks fontStyle='italic' text={`Clear My rating`} color={colors.primary} fontWeight='400' size='12px' />
                                    </GeneralButton>
                                </Box>
                            )
                        }
                        <GeneralButton variant='contained' color={colors.primary} onClick={() => {
                            if (rating === 0) {
                                deleteRateMovie(atob(session ?? ""), id)
                            } else {
                                giftRateMovie(atob(session ?? ""), id, rating)
                            }
                        }} >
                            <RegulerTeks text={`I'm Done`} color={colors.white} fontWeight='600' size='14px' />
                        </GeneralButton>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default RatingUserSection