import { Box, Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h4' component='h1' gutterBottom>
          MUI v5 + Next.js with TypeScript Fiilter
        </Typography>
        <Box maxWidth='sm'>
          <Button variant='contained'>A button</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
