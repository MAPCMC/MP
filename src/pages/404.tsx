import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

// markup
const NotFoundPage = () => {
  return (
    <>
      <p>
        Sorry 😔 we couldn’t find what you were looking for.
      </p>
      <Link to="/">Go home</Link>
    </>
  )
}

export default NotFoundPage
