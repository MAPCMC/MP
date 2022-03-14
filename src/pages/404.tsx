import * as React from "react"
import { NavLink } from "theme-ui"

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Sorry 😔 we couldn’t find what you were looking for.
      </p>
      <NavLink href="/" backgroundColor='primary'>
        <i className='fa fa-home' />
      </NavLink>
    </div>
  )
}

export default NotFoundPage
