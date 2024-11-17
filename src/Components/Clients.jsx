import { React } from 'react';

import { clients } from '/src/Content/content.js';
import { styles } from '/src/styles.js';

function ClientsList() {
  return (
    <ul className={`${styles.utilities.flex["flex-space-between"]} 
      gap-6 flex-wrap max-w-[800px] ${styles.utilities.spacings["margin-inline-auto"]}`}>
      {(clients.map((client) => {
        const { id, logo } = client;

        return <li key={id}><img src={logo} width={"130px"} /></li>
      }))}
    </ul>
  );
}

function Clients() {
  return (
    <section id="clients" className="pt-[60px]">
      <ClientsList />
    </section>
  );
}

export { Clients };