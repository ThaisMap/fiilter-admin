import { Typography, Container, Grid, Paper, Link } from '@mui/material';
import type { NextPage } from 'next';
import Orders from '../components/dashboardTiles/Orders';
import ThisMonth from '../components/dashboardTiles/ThisMonth';
import Wallet from '../components/dashboardTiles/Wallet';


import { Session, Identity } from '@ory/client'
import { edgeConfig } from '@ory/integrations/next'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setLogoutUrl } from '../redux/slices/auth';
import ory from '../orySdk/sdk';


// Returns either the email or the username depending on the user's Identity Schema
const getUserName = (identity: Identity) =>
  identity.traits.email || identity.traits.username

//TODO: Mover copyright para componente
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
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [session, setSession] = useState<Session | undefined>()
  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        setSession(data)

        return ory.createSelfServiceLogoutFlowUrlForBrowsers()
          .then(({ data }) => {
            dispatch(setLogoutUrl(data.logout_url))
          })
      })
      .catch(() => {
        return router.push(edgeConfig.basePath + '/ui/login')
      })
    console.log('session identity', session?.identity)
  }, [])

  if (!session) {
    return null
  }

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Typography component='h3' variant='h3'>{`Olá ${getUserName(session?.identity)}`}</Typography>
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
