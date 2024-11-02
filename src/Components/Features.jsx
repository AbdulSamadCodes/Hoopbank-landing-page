import { React } from 'react';

import { styles } from '/src/styles.js';

function FeatureContent() {
  return (
    <div className="grid gap-y-7 flex-1">
      <h2 className={`${styles.typography["section-title"]}`}>
        You do the business,
        <br />
        we'll handle the business
      </h2>

      <p className={`${styles.typography["section-text"]}`}>
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>

      <button className='bg-blue-gradient max-w-max py-3 px-7 rounded-md font-medium'>
        Get Started
      </button>
    </div>
  );
}


function Features() {
  return (
    <section className={`${styles.layout.section} 
      ${styles.layout.spacings["section-padding"]}`} >

      <FeatureContent />
    </ section>
  );
}

export { Features };