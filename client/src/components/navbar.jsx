import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/posts"></Link>
      <Link to="/post"></Link>
      <div>navbar</div>
    </nav>

  )
}