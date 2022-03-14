import * as React from "react"
import "../assets/fontawesome/css/all.css"
import hoofd from "../assets/images/hoofd.png"
import hoofdLach from "../assets/images/hoofdLach.png"
import Hexagon from "../components/Hexagon"
import { Flex, Box, NavLink, Paragraph, Heading } from 'theme-ui'
import InvitationForm from "../components/InvitationForm"

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
    icon: 'fa-heart-pulse',
    title: 'personal',
    intro: `
      There is more to life than work, and there is more to me than the money I make.
    `
  }
]

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
        <Box as='main' sx={{ flexGrow: 1 }}>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Hexagon
              sx={{
                backgroundImage: `url(${hoofd})`,
                '&:hover': {
                  backgroundImage: `url(${hoofdLach})`
                }
              }}
            />
            <Paragraph sx={{ maxWidth: '800px', textAlign: 'center', mb: 1 }}>
              Hi, I'm Maarten, a full-stack web developer looking for
              new opportunities to better this world and challenge myself as
              a professional coder. Don't be shy. Get to know me!
            </Paragraph>
            <InvitationForm />
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
            </Flex>
          </Flex>
        </Box>
        <Box as='footer' p={2} bg='text' color='background'>
          <Paragraph>© M.A. Peene 2022</Paragraph>
        </Box>
      </Flex>
    </>
  )
}

export default IndexPage
