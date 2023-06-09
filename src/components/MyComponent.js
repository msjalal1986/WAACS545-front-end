import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (operation) => {
    if (operation === 'increment') {
      setCount(count + 1);
    } else if (operation === 'decrement') {
      setCount(count - 1);
    }
  };

  return (
    <>
      <p>Count: {count}</p>
      <button style={{ fontSize: '1.2em', padding: '10px 20px' }} onClick={() => handleButtonClick('increment')}>
        +
      </button>
      <button style={{ fontSize: '1.2em', padding: '10px 20px' }} onClick={() => handleButtonClick('decrement')}>
        -
      </button>
    </>
  );
};

export default MyComponent;
