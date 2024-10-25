import { React } from 'react';
import { Hero } from '/src/Components/Hero.jsx'
import { styles } from '/src/styles.js';


function Container() {
  return (
    <div className={`${styles.layout["container"]}`}>
      <Hero/>
    </div>
  );
}

export { Container };