import { React } from 'react';
import { GetStarted } from '/src/Components/GetStarted.jsx';

import Discount from '/src/assets/Discount.svg';
import robot from '/src/assets/robot.png';

import { styles } from '/src/styles.js';

function HeroContent() {
  return (
    <div className="w-full md:w-1/2 grid gap-5">
      <div className={`${styles.utilities.flex["flex-items-center"]} 
        discount bg-discount-gradient
        rounded-md  gap-3
        text-sm px-4 py-[1.5px] max-w-max`}>
        <img src={Discount} alt="discount" />
        <p className="text-gray-400">
          <span className="text-white">20%</span>{'   '}Discount for{'   '}
          <span className="text-white">1 Month</span>{'   '}Account
        </p>
      </div>

      <div className="flex justify-between
        flex-wrap-reverse md:flex-nowrap gap-3">
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
    <div className={`md:w-1/2 max-w-[80%]
         ${styles.utilities.spacings["margin-inline-auto"]} relative`}>
      <figure>
        <img src={robot} />
      </figure>

      {/* gradient start*/}
      <div className="absolute z-[1] w-[95%] h-[95%] rounded-full  bottom-10 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
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