import { Button, Container } from "@mui/material"
import {
  SelfServiceLoginFlow,
  SubmitSelfServiceLoginFlowBody
} from "@ory/kratos-client"
import { AxiosError } from "axios"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ory from "../orySdk/sdk"

import { handleFlowError } from "../orySdk/errors"
import Title from "../components/Title"
import RegistrationForm from "../components/auth/RegistrationForm"
import {
  SelfServiceRegistrationFlow,
  SubmitSelfServiceRegistrationFlowBody
} from "@ory/client"

const Registration: NextPage = () => {
  const [flow, setFlow] = useState<SelfServiceRegistrationFlow>()

  const router = useRouter()

  // Get ?flow=... from the URL
  const { flow: flowId, return_to: returnTo } = router.query

  // In this effect we either initiate a new registration flow,
  // or we fetch an existing registration flow.
  useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      ory
        .getSelfServiceRegistrationFlow(String(flowId))
        .then(({ data }) => {
          // We received the flow - let's use its data and render the form!
          setFlow(data)
        })
        .catch(handleFlowError(router, "registration", setFlow))
      return
    }

    // Otherwise we initialize it
    ory
      .initializeSelfServiceRegistrationFlowForBrowsers(
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => {
        setFlow(data)
      })
      .catch(handleFlowError(router, "registration", setFlow))
  }, [flowId, router, router.isReady, returnTo, flow])

  const onSubmit = (values: SubmitSelfServiceRegistrationFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // data when she/he reloads the page.
      .push(`/registration?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        ory
          .submitSelfServiceRegistrationFlow(String(flow?.id), values)
          .then(({ data }) => {
            // If we ended up here, it means we are successfully signed up!
            //
            // You can do cool stuff here, like having access to the identity which just signed up:
            // console.log('This is the user session: ', data, data.identity)

            // For now however we just want to redirect home!
            return router.push(flow?.return_to || "/").then(() => {})
          })
          .catch(handleFlowError(router, "registration", setFlow))
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
    <Container maxWidth={"lg"}>
      <Head>
        <title>Sign Up com Ory</title>
      </Head>
      <div>
        <Title>Cadastrar</Title>
        <RegistrationForm onSubmit={onSubmit} flow={flow} />
      </div>
      <>
        <Link href="/login" passHref>
          <Button>Login</Button>
        </Link>
      </>
    </Container>
  )
}

export default Registration
