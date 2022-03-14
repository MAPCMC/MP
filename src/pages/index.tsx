import * as React from "react"
import "../assets/fontawesome/css/all.css"
import hoofd from "../assets/images/hoofd.png"
import hoofdLach from "../assets/images/hoofdLach.png"
import Hexagon from "../components/Hexagon"
import { Flex, Box, NavLink } from 'theme-ui'

const IndexPage = () => {
  return (
    <>
      <title>Maarten Peene</title>
      <Flex sx={{ flexDirection: 'column', height: '100%', minHeight: '100vh' }}>
        <Box as='header' p={2}>
          <NavLink href='/'>
            <i className='fa-solid fa-carrot' />
          </NavLink>
          Maarten Peene
        </Box>
        <Flex as='main' sx={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Hexagon
            sx={{
              backgroundImage: `url(${hoofd})`,
              '&:hover': {
                backgroundImage: `url(${hoofdLach})`
              }
            }}
          />
        </Flex>
        <Box as='footer' p={2} bg='text' color='background' />
      </Flex>
    </>
  )
}

export default IndexPage
