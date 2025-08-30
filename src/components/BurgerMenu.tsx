import { NavLink } from "react-router";
import { useState } from "react"
import burger from '../assets/bars-solid-full.svg';

export default function BurgerMenu() {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(prev => !prev);
  }

  return (
    <div className="font-londrina-solid-light flex flex-col p-5 relative">
      <button onClick={handleClick} className="w-8">
        <img src={burger} className="w-8 h-8" />
      </button>
      {
        isOpen && (
          <div className="w-1/12 text-2xl flex flex-col gap-8 pt-8 absolute top-15">
            <NavLink to='/' className="hover:text-yellow-200">home</NavLink>
            <NavLink to='/about' className="hover:text-yellow-200">about</NavLink>
            <NavLink to='/art' className="hover:text-yellow-200">art</NavLink>
            <NavLink to='music' className="hover:text-yellow-200">music</NavLink>
          </div>
        )
      }
    </div>
  )
}

