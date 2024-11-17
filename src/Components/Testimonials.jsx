import { React } from 'react';

import { feedbacks } from '/src/Content/content.js';
import { styles } from '/src/styles.js';
import quotes from "/src/assets/quotes.svg";

function TestimonialsContent() {
  return (
    <div className={`testi__content flex flex-col sm:flex-row 
      gap-4 justify-between`}>
      <h2 className={`${styles.typography["section-title"]}`}>
        What people are saying about us
      </h2>

      <p className={`${styles.typography["section-text"]}`}>
        Our clients love the quality and reliability we bring to every
        interaction.From seamless services to exceptional support,
        we consistently strive to exceed expectations.
      </p>
    </div>
  );
}

function TestimonialCard({ name, content, title, img }) {
  return (
    <li className="grid gap-8 items-start px-10 py-6
      rounded-lg hover:bg-testi">
      <img src={quotes} width={"30px"} />

      <p className={`${styles.typography["section-text"]}
         max-w-[18ch] text-balance`}>
        {content}
      </p>

      <div className="flex gap-3 items-center mt-auto">
        <img src={img} width={"40px"} className="flex-shrink-0" />
        <span>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-dimWhite opacity-6 text-[0.8rem]">
            {title}
          </p>
        </span>
      </div>
    </li>
  );
}

function TestimonialsList() {
  return (
    <ul className="grid gap-6 sm:grid-flow-col 
      justify-between mt-10">
      {(feedbacks.map((feedback) => {
        const { id, name, content, title, img } = feedback;

        return <TestimonialCard key={id} name={name}
          content={content} title={title} img={img} />;
      }))}
    </ul>
  )
}

function Testimonials() {
  return (
    <section id="testimonials"
      className={`${styles.layout.spacings["section-padding"]}`}>
      <TestimonialsContent />
      <TestimonialsList />
    </section>
  );
}

export { Testimonials }; 