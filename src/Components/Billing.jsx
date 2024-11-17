import { React } from "react";

import bill from '/src/assets/bill.png';
import apple from '/src/assets/apple.svg'
import google from '/src/assets/google.svg'

import { styles } from '/src/styles.js';

function BillingFigure() {
  return (
    <div className={`${styles.utilities.widths["has-figure"]}`}>
      <figure>
        <img src={bill} />
      </figure>
    </div>
  );
}

function BillingContent() {
  return (
    <div className="billing__content grid gap-y-7">
      <h2 className={`${styles.typography["section-title"]} text-balance`}>
        Easily control your billing & invoicing.
      </h2>

      <p className={`${styles.typography["section-text"]} text-balance`}>
        Effortlessly manage your billing and invoicing needs with our intuitive system.
        Stay organized, save time, and focus on growing your business.
      </p>

      <span class="flex gap-10">
          <img src={apple} />
          <img src={google} />
      </span>
    </div>
  );
}


function Billing() {
  return (
    <section id="billing" className={`${styles.layout.section} 
      ${styles.layout.spacings["section-padding"]} sm:grid-cols-2`} >
      <BillingFigure />
      <BillingContent />
    </section>
  );
}

export { Billing };