import { Checkbox } from '@mui/material'

import { NodeInputProps } from './helpers'

export function NodeInputCheckbox<T>({
  node,
  attributes,
  setValue,
  disabled
}: NodeInputProps) {
  // Render a checkbox.s
  return (
    <>
      <Checkbox
        name={attributes.name}
        defaultChecked={attributes.value === true}
        onChange={(e) => setValue(e.target.checked)}
        disabled={attributes.disabled || disabled}
      />
    </>
  )
}
