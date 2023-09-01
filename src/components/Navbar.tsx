import {FC} from 'react'
import {NavLink} from 'react-router-dom'


const Navbar:FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  )
}

export default Navbar