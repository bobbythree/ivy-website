import { Outlet } from "react-router"
import BurgerMenu from "../components/BurgerMenu"

export default function NavLayout() {
  return (
    <div className="font-londrina-solid-light flex flex-row h-screen">
      <div className="w-1/12 flex flex-col p-4 gap-10">
        <BurgerMenu />
      </div>
      <Outlet />
    </div>
  )
}

