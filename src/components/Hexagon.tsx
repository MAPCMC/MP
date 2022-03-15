import * as React from "react"
import { Box } from "theme-ui"

const Hexagon = (props: any) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        visibility: 'hidden',
        transform: 'rotate(120deg)',
        width: '200px',
        height: '300px',
        ...props.boxSx
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          transform: 'rotate(-60deg)'
        }}
      >
        <Box
          {...props}
          sx={{
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            backgroundSize: 'contain',
            visibility: 'visible',
            transform: 'rotate(-60deg)',
            ...props.sx
          }}
        />
      </Box>
    </Box>
  )
}

export default Hexagon
