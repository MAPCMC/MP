import * as React from "react"
import { useSpring, animated, config } from 'react-spring'
import { Box } from 'theme-ui'

interface ExplodingProps {
  trigger: React.ReactElement,
  items: Array<React.ReactElement>
}

const ExplodingMenu = ({ trigger, items }: ExplodingProps) => {
  const [menu, setMenu] = React.useState(false)
  const explosionX = [-100, 200, -160, 280, -250, -15, 240, 180, -215, 20]
  const explosionY = [-15, 240, 180, 115, 20, -140, 0, -160, 80, -250]

  const itemProps = (index: number) => useSpring({
    x: menu ? explosionX[index] : 0,
    y: menu ? explosionY[index] : 100,
    display: menu ? 'block' : 'none',
    config: config.slow
  })

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ zIndex: 2, position: 'absolute' }}>
        {items.map((item, index) => (
          <animated.div key={index} style={itemProps(index)}>
            {item}
          </animated.div>
        ))}
      </Box>
      {/* wrap in two boxes to align in the middle */}
      <Box sx={{ zIndex: 4, position: 'absolute', left: '50%' }}>
        <Box sx={{ position: 'relative', left: '-50%' }}>
          {/* clone to add menu trigger on click */}
          {React.cloneElement(trigger, {
            onClick: () => setMenu(!menu)
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default ExplodingMenu
