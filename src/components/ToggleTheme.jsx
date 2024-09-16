import React, { useState } from "react";

function ToggleTheme() {
  // useState
  // let[state, setState] = useState(initialValue)

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div>
        <h1>This is a theme page</h1>
        <h1>{count}</h1>
        <button
          className="bg-blue-400 text-white px-2 py-1 rounded"
          onClick={incrementHandler}
        >
          Increment
        </button>
      </div>

      <div className="flex justify-center">
        <button onClick={toggleTheme} className={`px-2 py-1 rounded ${theme ? "bg-white text-black": "bg-black text-white"}`}>
          {theme ? "White mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}

export default ToggleTheme;
// hooks
// useState
// useEffect
// useReducer
