import { React } from 'react';
import { useState } from 'react';

import hoopbank from '/public/hoopbank.svg';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';

import { navLinks } from '/src/Content/content.js';

function MobileNav() {
  return (

    <ul className="mobile_nav_list flex 
     flex-col items-center w-[180px] 
     gap-6 px-4 py-5 
     sm:hidden absolute bg-black-gradient
     rounded-xl right-7 top-5">

      {(navLinks.map(navLink => {
        return <li key={navLink.id}>
          <a href="#"
            className="nav__link text-white text-sm">
            {navLink.title}
          </a>
        </li>
      }))}
    </ul>

  );
}

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (

    <nav
      className="w-full bg-primary px-4 pt-6 
      pb-[200px] 
      flex items-center justify-between">
      <a href="#" className="logo text-white flex gap-2">
        <img src={hoopbank} alt="Hello" className="w-[30px]" />
        <p className="font-semibold">Hoopbank</p>
      </a>

      <ul
        className="nav__list sm:flex items-center 
        justify-between gap-10 hidden">
        {(navLinks.map((navLink, index, navLinks) => {
          return <li key={navLink.id}
            className={`nav_item
              ${index === navLinks.length - 1 ? "mr-10" : ""}`}
          >
            <a href="#" className="nav__link text-white 
            text-sm">{navLink.title}</a>
          </li>
        }))}
      </ul>

      <button className="nav_toggler sm:hidden
       relative grid"
        onClick={toggleMobileNavbar}>

        <img src={isNavOpen ? close : menu} />
        {isNavOpen ? <MobileNav /> : null}
      </button>

    </nav>

  );
}

export { Navbar };