import { React } from 'react';
import { styles } from '/src/styles.js';

function CTAcontent() {
  return (
    <div className="cta__content grid gap-y-1">
      <h2 className={`${styles.typography["section-title"]}`}>
        Lets try our service now!
      </h2>

      <p className={`${styles.typography["section-text"]}`}>
        Everything you need to accept card payments and
        grow your business anywhere
      </p>
    </div>
  );
}

function CTA() {
  return (
    <section  className={`mt-[40px]  px-7 py-7 flex flex-col gap-5 sm:flex-row 
      sm:justify-between sm:items-center bg-CTA_gradient rounded-lg`}>
      <CTAcontent />   

      <button className='btn 
        bg-blue-gradient max-w-max py-3 
        px-7 rounded-md font-medium'>
        Get Started
      </button>
    </section>
  );
}

export { CTA };
