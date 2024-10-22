import { Typography } from '@mui/material';
import React from 'react'

const TitleTeks: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography sx={{ fontSize: { xs: '24px', sm: '24px', md: '28px', lg: '32px' }, fontWeight: '600' }}>
      {text}
    </Typography>
  );
};

export default TitleTeks