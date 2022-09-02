import { getNodeLabel } from '@ory/integrations/ui'

import { NodeInputButton } from './NodeInputButton'
import { NodeInputCheckbox } from './NodeInputCheckbox'
import { NodeInputHidden } from './NodeInputHidden'
import { NodeInputSubmit } from './NodeInputSubmit'
import { NodeInputProps } from './helpers'
import { Input } from '@mui/material'

export function NodeInputDefault<T>(props: NodeInputProps) {
  const { node, attributes, value = '', setValue, disabled } = props

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = new Function(attributes.onclick)
      run()
    }
  }

  // Render a generic text input field.
  return (
    <Input
      title={node.meta.label?.text}
      onClick={onClick}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      type={attributes.type}
      name={attributes.name}
      value={value}
      disabled={attributes.disabled || disabled}

    />
  )
}
