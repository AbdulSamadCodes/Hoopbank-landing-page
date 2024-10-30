import { React } from 'react';
import { stats } from '/src/Content/content.js';

import { styles } from '/src/styles.js';

function Seperator() {
  return (
    <div className="seperator w-[2px] h-[20px]
       bg-white hidden sm:block ">
    </div>
  );
}

function StatCard({ id, title, value }) {
  return (
    <li className={`sm:${styles.utilities.flex["flex-items-center"]} gap-2 text-center`} key={id}>
      <p className="text-white text-[2.2rem] font-bold ">
        {value}
      </p>

      <p className="text-[1.2rem] font-bold text-gradient">
        {title}
      </p>
    </li>
  )
}

function Stats() {
  return (
    <ul className={`stats  pt-[50px] gap-x-4 gap-y-10
      grid grid-cols-2 sm:grid-flow-col sm:grid-cols-none items-center
      `}>
      {(stats.map((statData, index) => {
        return (
          <>
          {index > 0 ? <Seperator /> : null}
          <StatCard id={statData.id} title={statData.title}
            value={statData.value}/>
         </>
        )
      }))};
    </ul>
  );
}

export { Stats };