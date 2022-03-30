import * as React from "react"
import "../assets/fontawesome/css/all.css"
import hoofd from "../assets/images/hoofd.png"
import hoofdLach from "../assets/images/hoofdLach.png"
import Hexagon from "../components/Hexagon"
import CarrotBox from "../components/CarrotBox"
import ExplodingMenu from '../components/ExplodingMenu'
// import InvitationForm from "../components/InvitationForm"
// import InvitedInfo from "../components/InvitedInfo"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Flex, Box, Paragraph, Container } from 'theme-ui'

const IndexPage = () => {
  const parallax = React.useRef<null | IParallax>(null)

  return (
    <>
      <title>Maarten Peene</title>
      <Container sx={{ height: '100%', minHeight: '100vh', position: 'relative' }}>

        <Flex
          as='header'
          sx={{ zIndex: 2, p: 2, position: 'absolute', top: 0, left: 0, alignItems: 'center' }}
        >
          <CarrotBox onClick={() => parallax.current?.scrollTo(0)} style={{ cursor: 'pointer' }} />
          <Box pl={2}>Maarten Peene</Box>
        </Flex>

        <Box
          as='footer'
          sx={{
            p: 2,
            bg: 'text',
            color: 'background',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2
          }}>
          <Paragraph>© M.A. Peene 2022</Paragraph>
        </Box>


        <Box as='main' sx={{ zIndex: 1 }}>
          <Parallax pages={2} ref={parallax}>
            <ParallaxLayer offset={0.2} speed={1} style={{ zIndex: 5 }}>
              <Flex sx={{ justifyContent: 'center' }}>
                <ExplodingMenu
                  items={[
                    <i className="fa-brands fa-github"></i>,
                    <i className="fa-brands fa-instagram"></i>,
                    <i className='fa-solid fa-envelope' />,
                    <i className="fa-brands fa-js"></i>,
                    <i className="fa-solid fa-campground" />,
                    <i className="fa-brands fa-react fa-spin"></i>,
                    <i className='fa-solid fa-masks-theater' />,
                    <i className="fa-solid fa-chess-rook" />,
                    <i className="fa-solid fa-flip fa-transgender" style={{ animationDuration: '8s' }} />
                  ]}
                  trigger={(
                    <Hexagon
                      sx={{
                        backgroundImage: `url(${hoofd})`,
                        '&:hover': {
                          backgroundImage: `url(${hoofdLach})`
                        }
                      }}
                    />
                  )}
                />
              </Flex>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0}>
              <Flex
                sx={{
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <Paragraph sx={{ maxWidth: '800px', textAlign: 'center', mb: 4 }}>
                  Hi, I'm Maarten, a full-stack web developer looking for
                  new opportunities to better this world and challenge myself as
                  a professional coder. Don't be shy. Get to know me!
                </Paragraph>
                {/* <InvitationForm /> */}
                <Box
                  sx={{
                    height: '30vh',
                    border: '1px solid grey'
                  }}
                />
              </Flex>
            </ParallaxLayer>
            {/* <InvitedInfo /> */}
          </Parallax>
        </Box>
      </Container>
    </>
  )
}

export default IndexPage
