import { Container } from '@mui/material';
import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Dashboard />
    </Container>
  );
};

export default Home;
