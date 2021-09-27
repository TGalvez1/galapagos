import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <main>
    <h1>Galapagos Library</h1>
    <p>Welcome to the Galapagos Library</p>
    <p>
      <Link to="/books/">Go to the Books Page</Link>
    </p>
  </main>
)

export default IndexPage
