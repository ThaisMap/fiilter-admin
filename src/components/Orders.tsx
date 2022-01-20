import { Box, Link } from '@mui/material';
import NextLink from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { compras } from '../fakeData/compras';
import { columns } from '../pages/operacoes';
import { dynamicSort, sortByDate } from '../utils/sortBy';
import Title from './Title';

const Orders = () => {
  let rows = compras.slice().sort(dynamicSort('-date')).slice(0, 5);

  return (
    <Box sx={{ flex: 1 }}>
      <Title>Últimas operações</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        density='compact'
        sx={{ height: 221 }}
      />
      <NextLink href='/operacoes' passHref>
        <Link sx={{ lineHeight: 3 }}>Ver mais</Link>
      </NextLink>
    </Box>
  );
};

export default Orders;
