import { React } from 'react';
import { Hero } from '/src/Components/Hero.jsx'
import { Features } from '/src/Components/Features.jsx'


import { styles } from '/src/styles.js';

function Container() {
  return (
    <div className={`${styles.layout["container"]}`}>
      <Hero />
      <Features />
    </div>
  );
}

export { Container };