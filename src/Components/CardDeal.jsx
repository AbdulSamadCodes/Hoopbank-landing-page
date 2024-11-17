import { React } from "react";

import Card from '/src/assets/Card.png';

import { styles } from '/src/styles.js';

function DealFigure() {
  return (
    <div className={`${styles.utilities.widths["has-figure"]}`}>
      <figure>
        <img src={Card} />
      </figure>
    </div>
  );
}

function DealContent() {
  return (
    <div className={`deal__content ${styles.layout["content-section"]}`}>
      <h2 className={`${styles.typography["section-title"]}`}>
        Find a better card deal in few easy steps.
      </h2>

      <p className={`${styles.typography["section-text"]}`}>
        Effortlessly manage your billing and invoicing needs with our intuitive system.
        Stay organized, save time, and focus on growing your business.
      </p>

      <button className='btn 
        bg-blue-gradient max-w-max py-3 
        px-7 rounded-md font-medium'>
        Get Started
      </button>
    </div>
  );
}

function CardDeal() {
  return (
    <section id="deal" className={`${styles.layout.section} 
     ${styles.layout.spacings["section-padding"]} sm:grid-cols-2`}>
      <DealContent />
      <DealFigure />
    </section>
  );
}

export { CardDeal };

