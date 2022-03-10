import * as React from 'react'
import { Flex, NavLink } from 'theme-ui'

const Nav = () => {
  return (
    <Flex as='nav'>
      <NavLink href="/">
        <i className='fa fa-home' />
      </NavLink>
      <NavLink href="/about">About</NavLink>
    </Flex>
  )
}

export default Nav
