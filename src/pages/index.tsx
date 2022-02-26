import { Typography, Container, Grid, Paper, Link } from '@mui/material';
import type { NextPage } from 'next';
import Orders from '../components/dashboardTiles/Orders';
import ThisMonth from '../components/dashboardTiles/ThisMonth';
import Wallet from '../components/dashboardTiles/Wallet';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://portfolio-thaismap.vercel.app/'>
        Marpi Sistemas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Dashboard: NextPage = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}>
            <Wallet />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}>
            <ThisMonth />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default Dashboard;
