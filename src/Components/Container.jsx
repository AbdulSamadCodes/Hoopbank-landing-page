import { React } from 'react';
import { Navbar } from '/src/Components/Navbar.jsx'
import { Hero } from '/src/Components/Hero.jsx'

function Container() {
  return (
    <div className="w-full max-w-[1100px] 
      px-4 ms-auto me-auto">
      <Navbar />
      <Hero/>
    </div>
  );
}

export { Container };