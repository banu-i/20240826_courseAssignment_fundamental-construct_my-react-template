import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The count is now ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Navbar;
