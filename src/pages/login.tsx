import { Button, Container } from '@mui/material'
import {
  SelfServiceLoginFlow,
  SubmitSelfServiceLoginFlowBody
} from '@ory/kratos-client'
import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Flow } from '../components/ory/Flow'
import { createLogoutHandler } from '../orySdk/hooks'
import ory from '../orySdk/sdk'

import { handleGetFlowError, handleFlowError } from '../orySdk/errors'
import Title from '../components/Title'
import LoginForm from '../components/auth/LoginForm'

const Login: NextPage = () => {
  const [flow, setFlow] = useState<SelfServiceLoginFlow>()

  // Get ?flow=... from the URL
  const router = useRouter()
  const {
    return_to: returnTo,
    flow: flowId,
    // Refresh means we want to refresh the session. This is needed, for example, when we want to update the password
    // of a user.
    refresh,
    // AAL = Authorization Assurance Level. This implies that we want to upgrade the AAL, meaning that we want
    // to perform two-factor authentication/verification.
    aal
  } = router.query

  // This might be confusing, but we want to show the user an option
  // to sign out if they are performing two-factor authentication!
  const onLogout = createLogoutHandler([aal, refresh])

  useEffect(() => {
    console.log('return to:', returnTo)

    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      ory
        .getSelfServiceLoginFlow(String(flowId))
        .then(({ data }) => {
          setFlow(data as SelfServiceLoginFlow)
        })
        .catch(handleGetFlowError(router, 'login', setFlow))
      return
    }

    // Otherwise we initialize it
    ory
      .initializeSelfServiceLoginFlowForBrowsers(
        Boolean(refresh),
        aal ? String(aal) : undefined,
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => {
        setFlow(data as SelfServiceLoginFlow)
      })
      .catch(handleFlowError(router, 'login', setFlow))
  }, [flowId, router, router.isReady, aal, refresh, returnTo, flow])

  console.log('flow object ', flow)

  const onSubmit = (values: SubmitSelfServiceLoginFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // data when she/he reloads the page.
      .push(`/login?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        ory
          .submitSelfServiceLoginFlow(String(flow?.id), undefined, values)
          // We logged in successfully! Let's bring the user home.
          .then((res) => {
            if (flow?.return_to) {
              window.location.href = flow?.return_to
              return
            }
            router.push('/')
          })
          .then(() => { })
          .catch(handleFlowError(router, 'login', setFlow))
          .catch((err: AxiosError) => {
            // If the previous handler did not catch the error it's most likely a form validation error
            if (err.response?.status === 400) {
              // Yup, it is!
              setFlow(err.response?.data)
              return
            }

            return Promise.reject(err)
          })
      )

  if (!flow) {
    return <p>Aguarde um momento</p>
  }

  return (
    <Container maxWidth={'lg'}>
      <Head>
        <title>Sign in com Ory</title>
      </Head>
      <div>
        <Title>
          Entrar
        </Title>
        <LoginForm onSubmit={onSubmit} flow={flow} />
      </div>
      <>
        <Link href="/registration" passHref>
          <Button>Create account</Button>
        </Link>
      </>
    </Container>
  )
}

export default Login
