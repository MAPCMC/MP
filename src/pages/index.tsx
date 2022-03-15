import * as React from "react"
import "../assets/fontawesome/css/all.css"
import hoofd from "../assets/images/hoofd.png"
import hoofdLach from "../assets/images/hoofdLach.png"
import Hexagon from "../components/Hexagon"
// import InvitationForm from "../components/InvitationForm"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Flex, Box, Paragraph, Heading, Container } from 'theme-ui'

const categories = [
  {
    icon: 'fa-code',
    title: 'coding',
    intro: `
      As the token Javascript developer within a larger compagny of software
      enigeers, I've both specialized my skills as a front-ender, as well as broadend
      my knowledge of full-stack workflows and architecture.
    `
  },
  {
    icon: 'fa-building-columns',
    title: 'background',
    intro: `I used to be a jack of all traits, who found his calling in web development.
      Take an interest in the professional path and the intellectual endevours that lead me here.
    `
  },
  {
    icon: 'fa-star',
    title: 'personal',
    intro: `
      There is more to life than work, and there is more to me than the money I make.
      Learn about the man behind the legend.
    `
  }
]

const IndexPage = () => {
  const parallax = React.useRef<null | IParallax>(null)
  return (
    <>
      <title>Maarten Peene</title>
      <Container sx={{ height: '100%', minHeight: '100vh', position: 'relative' }}>
        <Box
          as='header'
          sx={{ p: 2, position: 'absolute', top: 0, left: 0 }}
        >
          <div
            style={{ position: 'relative', top: 0, left: 0 }}
            onClick={() => parallax.current?.scrollTo(0)}
          >
            <Hexagon
              sx={{
                backgroundColor: 'primary'
              }}
              boxSx={{ width: '20px', height: '30px', zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <i
              className='fa-solid fa-carrot'
              style={{ zIndex: 2, color: 'white', position: 'absolute', top: 6, left: 2, right: 0, bottom: 0 }}
            />
          </div>
          <Box sx={{ ml: '30px', mt: 1 }}>Maarten Peene</Box>
        </Box>
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
            <ParallaxLayer offset={0} speed={0}>
              <Flex
                sx={{
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <Hexagon
                  sx={{
                    backgroundImage: `url(${hoofd})`,
                    '&:hover': {
                      backgroundImage: `url(${hoofdLach})`
                    }
                  }}
                />
                <Paragraph sx={{ maxWidth: '800px', textAlign: 'center', mb: 4 }}>
                  Hi, I'm Maarten, a full-stack web developer looking for
                  new opportunities to better this world and challenge myself as
                  a professional coder. Don't be shy. Get to know me!
                </Paragraph>
                {/* <InvitationForm /> */}
                <Box
                  sx={{
                    height: '30vh',
                    border: '1px solid grey',
                    mt: 3
                  }}
                />
              </Flex>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  height: 40,
                  border: '1px solid grey'
                }}
              />
              <Box
                sx={{
                  width: (categories.length - 1) * 240 + 2,
                  border: '1px solid grey'
                }}
              />
              <Flex
                sx={{
                  width: categories.length * 240,
                  justifyContent: 'space-between'
                }}
              >
                {categories.map((category, index) => (
                  <Flex
                    key={index}
                    sx={{
                      width: 240,
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: 0,
                        height: 40,
                        border: '1px solid grey'
                      }}
                    />
                  </Flex>
                ))}
              </Flex>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={2}
              style={{
                marginTop: 84,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {categories.map((category, index) => (
                <Flex
                  key={index}
                  sx={{
                    width: 240,
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Heading as='h1' pt={2}>
                    <i className={`fa-solid ${category.icon}`} />
                  </Heading>
                  <Heading as='h3' pb={2}>
                    {category.title}
                  </Heading>
                  <Box bg='muted' p={3} mx={1}>
                    {category.intro}
                  </Box>
                </Flex>
              ))}
            </ParallaxLayer>
          </Parallax>
        </Box>
      </Container>
    </>
  )
}

export default IndexPage
