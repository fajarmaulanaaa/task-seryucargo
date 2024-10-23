import { Button } from '@mui/material';
import React, { ReactNode } from 'react'

interface ButtonProops {
    children: ReactNode;
    onClick: () => void;
    variant: 'outlined' | 'contained' | 'text';
    color: string;
    bgColor?: string;
    disable?: boolean;
    borderRadius?: string;
}

const GeneralButton: React.FC<ButtonProops> = ({ disable, onClick, variant, children, color, bgColor, borderRadius }) => {
    return (
        <Button
            disabled={disable}
            sx={{
                borderRadius: borderRadius,
                color: color, bgcolor: bgColor ?? 'none', textTransform: 'none', justifyContent: 'flex-start',
                "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                }
            }} variant={variant} onClick={onClick}>
            {children}
        </Button>
    )
}

export default GeneralButton