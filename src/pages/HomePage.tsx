import { NavLink } from "react-router"

export default function HomePage() {
  return (
    <>
      <div className="text-5xl">this is the Home Page sucka!!!</div>
      <nav className="flex gap-3">
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/art'>art</NavLink>
        <NavLink to='/music'>music</NavLink>
      </nav>
    </>
  )
}

