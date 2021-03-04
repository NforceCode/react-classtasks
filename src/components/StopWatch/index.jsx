import React, { useState, useEffect, useContext } from 'react';
import {format, addMilliseconds} from 'date-fns';


const StopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
  const [isRunning, setIsRunning] = useState(false);

  const toggleStopWatch = () => setIsRunning(!isRunning);



  useEffect(() => {
    if (isRunning) {
      const timeoutId = setInterval(() => {
        setTime(time => addMilliseconds(time, 1000));
      }, 1000);

      return function () {
        clearInterval(timeoutId);
      };
    }
  }, [isRunning, time]);

  return (
    <div>
      <p>{format(time, 'HH:mm:ss')}</p>
      <button onClick={toggleStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={()=>{
        setTime(new Date(0,0,0,0,0,0,0));
      }}>Reset</button>
    </div>
  );
};

export default StopWatch;
