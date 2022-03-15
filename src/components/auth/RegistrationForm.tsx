import { Box, Button, TextField } from "@mui/material"
import {
  SelfServiceRegistrationFlow,
  SubmitSelfServiceRegistrationFlowWithPasswordMethodBody as ValuesType,
  UiNodeInputAttributes
} from "@ory/client"
import { isUiNodeInputAttributes } from "@ory/integrations/ui"
import React, { useState } from "react"
import { Messages } from "../ory"

interface IRegistrationForm {
  flow?: SelfServiceRegistrationFlow
  onSubmit: (values: ValuesType) => Promise<void>
}

const RegistrationForm = ({ flow, onSubmit }: IRegistrationForm) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Compute the values
  let values: ValuesType = {
    csrf_token: "",
    method: "password",
    password: "",
    traits: { email: '' }
  }

  const initializeCrsf = () => {
    if (flow) {
      const { nodes } = flow?.ui
      const csrfNode = nodes.find(
        node =>
          isUiNodeInputAttributes(node.attributes) &&
          node.attributes.name === "csrf_token"
      ).attributes as UiNodeInputAttributes
      if (csrfNode) {
        values.csrf_token = csrfNode.value
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    initializeCrsf()
    values = {
      ...values,
      password,
      traits: { email }
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
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 4
        }}
        noValidate>
        <TextField
          required
          id="email-input"
          label="E-mail"
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
        />
        <TextField
          required
          id="password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value)
          }}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Entrar
        </Button>
      </Box>
      <Messages messages={flow.ui.messages} />
    </Box>
  )
}
export default RegistrationForm
