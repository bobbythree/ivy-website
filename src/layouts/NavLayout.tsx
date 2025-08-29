import { Outlet } from "react-router"
import BurgerMenu from "../components/BurgerMenu"

export default function NavLayout() {
  return (
    <div className="font-londrina-solid-light flex flex-row h-screen">
      <BurgerMenu />
      <Outlet />
    </div>
  )
}

