import { NavLink } from "react-router"
import bgImg from '../assets/ivy_cat.jpg'

export default function HomePage() {
  return (
    <div className="h-screen bg-cover bg-gradient-to-tr from-green-500 to-yellow-200"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center 30%',
      }}>

    </div>
  )
}

