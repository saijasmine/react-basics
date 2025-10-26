import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);

  function handleIncreament() {
    setCount((c) => c + 1);
  }

  function handleDecreament() {
    setCount((c) => c - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <p>{count}</p>
      <button value={count} onClick={handleIncreament}>
        Increament
      </button>
      <button value={count} onClick={handleDecreament}>
        Decreament
      </button>
      <button value={count} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default Counter;
