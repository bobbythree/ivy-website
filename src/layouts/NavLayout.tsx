import { NavLink, Outlet } from "react-router"

export default function NavLayout() {
  return (
    <div className="font-londrina-solid-light flex flex-row h-screen">
      <div className="w-1/12 flex flex-col p-4 gap-10">
        <p className="text-2xl p-4">_<br />_<br />_</p>

        <NavLink to='/'>home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/art'>art</NavLink>
        <NavLink to='music'>music</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

