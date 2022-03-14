import * as React from "react"
import { Box, Label, Input, Heading } from 'theme-ui'

const InvitationForm = () => {
  const invitation = 'enter your invitation code'

  const [code, setCode] = React.useState('')

  return (
    <Box sx={{ width: '400px' }}>
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
