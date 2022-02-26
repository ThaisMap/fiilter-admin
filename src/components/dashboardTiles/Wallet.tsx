import * as React from 'react';
import { Box } from '@mui/material';
import Title from '../Title';
import Info from '../Info';

export default function Wallet() {
  return (
    <Box>
      <Title>Carteira</Title>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
        <Info main='17' label='Fundos' />
        <Info main='500' label='Cotas' />
        <Info main='$ 110,00' label='Preço médio' />
        <Info main='0,90 %' label='YoC' />
      </Box>
    </Box>
  );
}
