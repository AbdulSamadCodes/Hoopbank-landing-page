import { React } from 'react';

import { features } from '/src/Content/content.js';
import { styles } from '/src/styles.js';

function FeatureContent() {
  return (
    <div className="feature__content grid gap-y-5">
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

      <button className='btn 
      bg-blue-gradient max-w-max py-3 
        px-7 rounded-md font-medium'>
        Get Started
      </button>
    </div>
  );
}

function FeatureCard({ icon, title, content }) {
  return (
    <li>

    </li>
  );
}

function FeaturesList() {
  return (
    <ul className="features__list">
      {(features.map((feature_data) => {
        const { id, icon, title, content } = feature_data;

        return <FeatureCard key={id} icon={icon} title={title} content={content} />
      }))}
    </ul>
  );
}


function Features() {
  return (
    <section className={`${styles.layout.section} 
      ${styles.layout.spacings["section-padding"]}`} >

      <FeatureContent />
      <FeaturesList />
    </ section>
  );
}

export { Features };