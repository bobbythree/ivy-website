import { NavLink } from "react-router";
import { useState } from "react"
import burger from '../assets/bars-solid-full.svg';

export default function BurgerMenu() {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(prev => !prev);
  }

  return (
    <>
      <button onClick={handleClick}>
        <img src={burger} />
      </button>
      {
        isOpen && (
          <>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/art'>art</NavLink>
            <NavLink to='music'>music</NavLink>
          </>
        )
      }
    </>

  )
}

