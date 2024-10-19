import { React } from 'react';
import arrow_up from '/src/assets/arrow_up.svg';

function GetStarted() {
  return (
    <button className="get-started-btn bg-blue-gradient p-[2px] 
      w-[90px] h-[90px]
      rounded-full content-center
      flex items-center gap-3 bg-red overflow-hidden"
    >
      <div className="w-[100%] h-[100%] rounded-full 
       bg-[#050814] flex items-center justify-center">
        <div>
          <div className="flex items-start gap-1
          ">
            <p class="text-gradient text-sm">Get</p>
            <img src={arrow_up} alt="Arrow up" />
          </div>

          <p class="text-gradient text-sm">Started</p>
        </div>


      </div>
    </button>
  );
}

export { GetStarted };