import HomeHero from "../components/HomeHero"
import bgImg from '../assets/ivy_cat.jpg'

export default function HomePage() {
  return (

    <div className="relative flex items-center justify-center h-screen bg-gradient-to-tr from-green-900 via-green-600 to-yellow-200">
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <HomeHero />
    </div>


  )
}

