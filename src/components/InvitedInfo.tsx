import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import { Flex, Box, Heading } from 'theme-ui'

const categories = [
  {
    icon: 'fa-building-columns',
    title: 'background',
    intro: `I used to be a jack of all traits, who found his calling in web development.
      Take an interest in the professional path and the intellectual endevours that lead me here.
    `
  },
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
    icon: 'fa-star',
    title: 'personal',
    intro: `
      There is more to life than work, and there is more to me than the money I make.
      Learn about the man behind the legend.
    `
  }
]

const InvitedInfo = () => {
  return (
    <>
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
        offset={1.1}
        speed={2}
        style={{
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
    </>
  )
}

export default InvitedInfo
