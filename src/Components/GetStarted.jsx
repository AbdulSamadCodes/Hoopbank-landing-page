import { React } from 'react';
import arrow_up from '/src/assets/arrow_up.svg';

function GetStarted() {
  return (
    <button className="get-started-btn bg-blue-gradient p-[2px] 
      w-[110px] h-[110px] shrink-0
      rounded-full content-center hover:text-white
      flex items-center gap-3 bg-red overflow-hidden relative md:-left-[90px]"
    >
      <div className="w-[100%] h-[100%] rounded-full isolate relative
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