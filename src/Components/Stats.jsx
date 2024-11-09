import { React } from "react";

import { styles } from '/src/styles.js';
import { stats } from "/src/Content/content.js"

function StatCard({ title, value }) {
  return (
    <li className={`md:flex items-center gap-3`}>
      <span className="text-white text-[2.2rem] 
        font-bold block">{value}</span>
      <span class="text-gradient text-[1.3rem] 
        font-bold block">{title}</span>
    </li>
  );
}

function StatsList() {
  return <ul className={`${styles.utilities.flex["flex-space-between"]} 
    gap-6 flex-wrap`}>
    {(stats.map((statsInfo) => {
      const { id, title, value } = statsInfo;

      return <StatCard key={id} title={title} value={value} />
    }))}
  </ul>
}

function Stats() {
  return (
    <section className="stats pt-[60px]">
      <StatsList />
    </section>
  )
}

export { Stats };