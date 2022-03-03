import { Box, Button, TextField } from '@mui/material'
import { SelfServiceLoginFlow, SubmitSelfServiceLoginFlowWithPasswordMethodBody as ValuesType, UiNode } from '@ory/client'
import { isUiNodeInputAttributes } from '@ory/integrations/ui'
import React, { useState } from 'react'
import { Messages } from '../ory'

interface ILoginForm {
  flow?: SelfServiceLoginFlow,
  onSubmit: (values: ValuesType) => Promise<void>
}

const LoginForm = ({ flow, onSubmit }: ILoginForm) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Compute the values
  let values: ValuesType = {
    csrf_token: '',
    method: 'password',
    password: '',
    password_identifier: ''
  }

  const initializeValues = () => {
    if (flow) {
      const { nodes } = flow?.ui
      nodes.forEach((node) => {
        // This only makes sense for text nodes
        if (isUiNodeInputAttributes(node.attributes)) {
          if (
            node.attributes.type === 'button' ||
            node.attributes.type === 'submit'
          ) {
            // In order to mimic real HTML forms, we need to skip setting the value
            // for buttons as the button value will (in normal HTML forms) only trigger
            // if the user clicks it.
            return
          }
          values[node.attributes.name as keyof ValuesType] = node.attributes.value
        }
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    initializeValues()
    values = {
      ...values,
      password,
      password_identifier: email
    }
    onSubmit(values)
  }

  return (
    <Box>
      <Box
        component="form"
        action={flow.ui.action}
        method={flow.ui.method}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
        noValidate
      >
        <TextField
          required
          id="email-input"
          label="E-mail"
          value={email}
          onChange={({ target: { value } }) => { setEmail(value) }}
        />
        <TextField
          required
          id="password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={({ target: { value } }) => { setPassword(value) }}
        />
        <Button variant='contained' type='submit' onClick={handleSubmit}>Entrar</Button>
      </Box>
      <Messages messages={flow.ui.messages} />
    </Box>
  )
}
export default LoginForm