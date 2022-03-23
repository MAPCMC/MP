import * as React from 'react'
import Hexagon from "./Hexagon"
import { useSpring, animated, config } from 'react-spring'
import { Box } from 'theme-ui'

const CarrotBox = (props: any) => {
  const random = (min: number, max: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min)
  }
  const randomXY = (even: boolean) => {
    return { x: even ? 20 : random(0, 20), y: even ? random(0, 20) : 0 }
  }

  const points = [...Array(10).keys()].map(i => randomXY(i%2 == 0))
  const carrotSpringProps = useSpring({
    from: { x: 0, y: 5 },
    to: points,
    loop: true,
    config: {
      ...config.slow,
      duration: 3000
    }
  })

  return (
    <Box sx={{ color: 'background' }} {...props}>
      <Hexagon
        sx={{ backgroundColor: 'primary' }}
        boxSx={{ width: '20px', height: '30px' }}
      />
      <animated.div style={{ ...carrotSpringProps, position: 'absolute', top: 0, left: 0 }}>
        <i className='fa-solid fa-carrot' />
      </animated.div>
    </Box>
  )
}

export default CarrotBox