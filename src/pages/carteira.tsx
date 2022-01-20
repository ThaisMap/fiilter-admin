import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Title from '../components/Title';
import { dadosCarteira } from '../fakeData/carteira';

const Carteira: NextPage = () => {
  const rows = dadosCarteira;
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Title>Carteira</Title>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Fundo</TableCell>
              <TableCell>Cotas</TableCell>
              <TableCell align='right'>Preço médio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.fund}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell align='right'>{`R$ ${row.avgPrice}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Carteira;
