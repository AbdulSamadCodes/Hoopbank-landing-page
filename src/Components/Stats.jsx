import { React } from 'react';
import { stats } from '/src/Content/content.js';

import { styles } from '/src/styles.js';

function StatCard({ id, title, value }) {
  return (
    <li key={id}>
       <p className="text-white text-lg font-bold">
          {value}
       </p>   

       <p className="text-lg font-bold text-gradient">
          {title}
        </p> 
    </li>
  )
}

function Stats() {
  return (
    <div className={`${styles.utilities["flex-space-between"]}`}>
      {(stats.map((index,statData) => {
          <StatCard id={statData.id} title={statData.title} 
            value={statData.value}/>
      }))};
    </div>
  );
}

export { Stats };