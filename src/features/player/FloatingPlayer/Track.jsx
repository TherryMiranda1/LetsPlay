import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start w-1/6">
    
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-10 mr-4`}>
    </div>
    <div className="w-[60%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.name ? activeSong?.name : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.artists ? activeSong?.artists[0].name : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
