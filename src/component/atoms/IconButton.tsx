import colors from '@/utils/colors';
import { IconButton } from '@mui/material';

import React from 'react'

interface ButtonProops {
    icon: React.ReactNode;
    onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
    disable?: boolean;
}

const IconButtonComponent: React.FC<ButtonProops> = ({ icon, onClick, disable }) => {
    return (
        <IconButton disabled={disable} sx={{
            color: colors.white,
            "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.3s ease-in-out",
            }
        }} onClick={onClick}>{icon}</IconButton>
    )
}

export default IconButtonComponent