import * as React from "react"
import { Box, Label, Input, Heading } from 'theme-ui'

const InvitationForm = () => {
  const invitation = 'enter your invitation code'
  const [input, setInput] = React.useState(false)
  const [code, setCode] = React.useState('')

  if (!input) {
    return (
      <Heading as='h2' onClick={() => setInput(true)}>
        <i>{invitation}</i>
      </Heading>
    )
  }
  return (
    <Box>
      <Label htmlFor="code" sx={{ visibility: 'collapse' }}>
        {invitation}
      </Label>
      <Input
        type="text"
        name="code"
        id="code"
        placeholder={invitation}
        onChange={e => setCode(e.target.value)}
      />
      <Heading sx={{textAlign: 'center' }}>{code}</Heading>
    </Box>
  )
}

export default InvitationForm
