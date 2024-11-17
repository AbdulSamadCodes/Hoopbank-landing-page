import { React } from 'react';
import { Hero } from '/src/Components/Hero.jsx';
import { Stats } from '/src/Components/Stats.jsx';
import { Features } from '/src/Components/Features.jsx';
import { Billing } from '/src/Components/Billing.jsx';
import { CardDeal } from '/src/Components/CardDeal.jsx';
import { Testimonials } from '/src/Components/Testimonials.jsx';
import { Clients } from '/src/Components/Clients.jsx';
import { CTA } from '/src/Components/CTA.jsx';
import { Footer } from '/src/Components/Footer.jsx';

import { styles } from '/src/styles.js';

function Container() {
  return (
    <div className={`${styles.layout["container"]}`}>
      <Hero />
      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export { Container };