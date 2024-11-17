import { React } from 'react';
import { styles } from '/src/styles.js';

import logo from '/src/assets/logo.svg';
import { footerLinks } from '/src/Content/content.js';
import { socialMedia } from '/src/Content/content.js';

function FooterListsWrapper() {
  return (
    <div className="flex justify-between items-start 
      flex-wrap gap-5">
      {(footerLinks.map((footerList, index) => {
        const { title, links } = footerList;

        return (
          <ul key={index} className="grid gap-3">
            <h3 className="text-white font-bold">{title}</h3>

            {links.map((linkData, index) => {
              const { name, link } = linkData;
              return <li key={index}>
                <a href={link} className="text-white text-[0.9rem]
                  opacity-6">{name}</a>
              </li>
            })}
          </ul>
        )
      }))}
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="max-w-max ms-auto me-auto">
      <p className="text-white">
        2024 Hoopbank. All rights reserved
      </p>

      <ul className={`${styles.utilities.flex["flex-items-center"]} 
        justify-center gap-6 mt-2`}>
        {socialMedia.map((socialData) => {
          const { id, icon, link } = socialData;

          return <li key={id}>
            <a href={link}><img src={icon} /></a>
          </li>
        })}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className={`footer grid gap-y-10
      ${styles.layout.spacings["section-padding"]}`}>
      <div>
        <img src={logo} width={"150px"} />

        <p className={`${styles.typography["section-text"]} 
          text-balance mt-2`}>
          A new way to make the payments easy, reliable and secure
        </p>
      </div>

      <FooterListsWrapper />
      <FooterSocials />
    </footer>
  );
}

export { Footer };