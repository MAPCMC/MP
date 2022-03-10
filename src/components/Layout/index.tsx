/** @jsxImportSource theme-ui */

import * as React from 'react'
import { Container } from 'theme-ui'
import Nav from '../Nav'

interface props {
  pageTitle: string
  children: JSX.Element | [JSX.Element]
}

const Layout = ({ pageTitle, children }: props) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Container p={2} sx={{ bg: 'primary' }}>
        <Nav />
      </Container>
      <main>
        {children}
      </main>
      <footer sx={{ bg: 'text', p: 2 }}>
        <Nav />
      </footer>
    </>
  )
}

export default Layout
