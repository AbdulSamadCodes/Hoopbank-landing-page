import { React } from 'react';
import Discount from '/src/assets/Discount.svg';
import robot from '/src/assets/robot.png';

function HeroContent() {
  return (
    <div className="flex-1">

      <div className="discount bg-discount-gradient
          rounded-md flex items-center gap-3
           text-sm px-4 py-[1.5px] max-w-max">
        <img src={Discount} alt="..." />

        <p className="text-gray-400">
          <span className="text-white">20%</span>{'   '}Discount for{'   '}
          <span className="text-white">1 Month</span>{'   '}Account
        </p>
      </div>
      
    </div>
  );
}

function HeroFigure() {
  return (
    <div className="flex-1">
      <img src={robot} />
    </div>
  );
}

function Hero() {
  return (
    <section className="section hero md:pt-[60px]">
      <div className="flex gap-10 items-start">
        <HeroContent />

        <HeroFigure />
      </div>
    </section>
  );
}

export { Hero };