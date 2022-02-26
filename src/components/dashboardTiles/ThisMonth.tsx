import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Info from './Info';
import { Box } from '@mui/material';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ThisMonth() {
  return (
    <React.Fragment>
      <Title>Este mês</Title>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
        <Info main='$ 2000,00' label='Investido' />
        <Info main='$ 270,00' label='Div recebido' />
      </Box>
    </React.Fragment>
  );
}
