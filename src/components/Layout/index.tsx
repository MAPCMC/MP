import * as React from 'react'
import { Flex, Box, NavLink } from 'theme-ui'

interface props {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: props) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Flex sx={{ flexDirection: 'column', height: '100%', minHeight: '100vh' }}>
        <Box as='header' p={2} bg='primary' color='background'>
          <NavLink href='/'>
            <i className='fa-solid fa-carrot' />
          </NavLink>
          {pageTitle}
        </Box>
        <Flex as='main' sx={{ flexGrow: 1, flexDirection: 'column' }}>
          {children}
        </Flex>
        <Box as='footer' p={2} bg='text' color='background' />
      </Flex>
    </>
  )
}

export default Layout
