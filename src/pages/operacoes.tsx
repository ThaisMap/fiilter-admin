import { Container, Paper } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Title from '../components/Title';
import { compras } from '../fakeData/compras';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'type',
    headerName: 'Tipo',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'fund',
    headerName: 'Fundo',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'amount',
    headerName: 'Cotas',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'price',
    headerName: 'Preço',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = (params.value as number).toFixed(2);
      return `RS ${valueFormatted}`;
    },
  },
  {
    field: 'date',
    headerName: 'Data',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valor: Date = params.value as Date;
      const valueFormatted = valor.toLocaleDateString();
      return valueFormatted;
    },
  },
];

const Operacoes: NextPage = () => {
  const rows = compras;

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3, height: '85vh' }}>
        <Title>Operações</Title>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          hideFooterSelectedRowCount
          sx={{ height: '75vh' }}
        />
      </Paper>
    </Container>
  );
};

export default Operacoes;
