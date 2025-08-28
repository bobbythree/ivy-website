import { NavLink } from "react-router"
import bgImg from '../assets/ivy_cat.jpg'

export default function HomePage() {
  return (

    <div className="relative h-screen bg-gradient-to-tr from-green-600 to-yellow-200">
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"

      />
    </div>


  )
}

