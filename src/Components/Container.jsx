import { React } from 'react';
import { Hero } from '/src/Components/Hero.jsx'
import { Stats } from '/src/Components/Stats.jsx'
import { Features } from '/src/Components/Features.jsx'


import { styles } from '/src/styles.js';

function Container() {
  return (
    <div className={`${styles.layout["container"]}`}>
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}

export { Container };