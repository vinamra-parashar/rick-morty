import React from 'react'
// css
import '../../App.scss'
// library
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3 ubuntu" data-testid="logo">
          Rick & Morty <span className="text-primary">React</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
