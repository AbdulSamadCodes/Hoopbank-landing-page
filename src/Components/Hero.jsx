import { React } from 'react';
import { GetStarted } from '/src/Components/GetStarted.jsx';

import Discount from '/src/assets/Discount.svg';
import robot from '/src/assets/robot.png';

import { styles } from '/src/styles.js';

function HeroContent() {
  return (
    <div className="w-full md:w-1/2 grid gap-5">
      <div className="discount bg-discount-gradient
            rounded-md flex items-center gap-3
             text-sm px-4 py-[1.5px] max-w-max">
        <img src={Discount} alt="discount" />
        <p className="text-gray-400"> 
          <span className="text-white">20%</span>{'   '}Discount for{'   '}
          <span className="text-white">1 Month</span>{'   '}Account
        </p>
      </div>

      <div className="flex justify-between flex-wrap-reverse md:flex-nowrap gap-3">
        <h1 className={`hero__title ${styles.typography["hero-title"]}`}>
          The Next
          <br />
          <span className="text-gradient">Generation</span>
          <br />
          Payment Method.
        </h1>

        <GetStarted />
      </div>

      <p className={`${styles.typography["section-text"]}`}>
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>
  );
}

function HeroFigure() {
  return (
    <div className="md:w-1/2 max-w-[80%] ms-auto me-auto">
      <figure>
        <img src={robot} />
      </figure>
    </div>
  );
}

function Hero() {
  return (
    <section className={`hero ${styles.layout.section}`}>
      <HeroContent />

      <HeroFigure />
    </section>
  );
}

export { Hero };