import { React } from 'react';
import { useState } from 'react';

import hoopbank from '/public/hoopbank.svg';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';

import { navLinks } from '/src/Content/content.js';

import { styles } from '/src/styles.js';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  const styleClasses = {
    smallDevicesClasses: ["mobile_nav_list", "flex",
      "flex-col", "items-center", "w-[180px]",
      "gap-6", "px-4", "py-5",
      "sm:hidden", "absolute", "bg-black-gradient",
      "rounded-xl", "right-7", "top-14"],

    largerDevicesClasses: ["nav__list", "sm:flex",
      "items-center", "justify-between",
      "gap-10", "hidden"]
  }

  return (

    <nav
      className="py-6 fixed w-full top-0 left-0 right-0">
        <div className={`${styles.layout["container"]} 
            ${styles.utilities.flex["flex-space-between"]}`}>
          <a href="#" className="logo text-white flex gap-2">
            <img src={hoopbank} alt="Hello" className="w-[30px]" />
            <p className="font-semibold">Hoopbank</p>
          </a>
          <ul
            className={`${isMobileNavOpen ?
              styleClasses.smallDevicesClasses.join(' ') :
              styleClasses.largerDevicesClasses.join(' ')}`}>
            {(navLinks.map((navLink, index, navLinks) => {
              return <li key={navLink.id}
                className={`nav_item
                  ${index === navLinks.length - 1 && !isMobileNavOpen ?
                    "mr-10" : ""}`}
              >
                <a href="#" className="nav__link text-white
                text-sm">{navLink.title}</a>
              </li>
            }))}
          </ul>
          <button className="nav_toggler sm:hidden  grid"
            onClick={toggleMobileNavbar}>
            <img src={isMobileNavOpen ? close : menu} />
          </button>
        </div>
    </nav>

  );
}

export { Navbar };