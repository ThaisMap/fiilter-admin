import { Box, Typography } from '@mui/material';
import React from 'react';

interface InfoProps {
  main?: string;
  label?: string;
}

function Info({ main, label }: InfoProps) {
  return (
    <Box mx={2}>
      <Typography component='p' variant='h4'>
        {main}
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default Info;
