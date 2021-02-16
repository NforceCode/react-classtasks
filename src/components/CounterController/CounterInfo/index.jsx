import React from 'react';

const spanStyleIncrementing = {
  color: 'green',
};
const spanStyleDecrementing = {
  color: 'red',
};

const CounterInfo = (props) => {
  const { isIncrementing, step, counter } =props;
  return (
    <div>
      <div>Current number: {counter}</div>
      <div>
        Current action:{' '}
        <span
          style={isIncrementing ? spanStyleIncrementing : spanStyleDecrementing}
        >
          {isIncrementing ? `Adding ${step}` : `Subtracting ${step}`}
        </span>
      </div>
    </div>
  );
};

export default CounterInfo;
