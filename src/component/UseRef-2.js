// import React, { useState } from "react";

// function UseRefReduced() {
//   const [count, setcount] = useState(0);

//   return (
//     <div>
//       <h1>Reduce {count}</h1>

//       <button onClick={() => setcount(count + 1)}>+</button>
//       <button onClick={() => setcount(count - 1)}>-</button>
//       <button onClick={() => setcount(0)}>Resete</button>
//     </div>
//   );
// }

// export default UseRefReduced;

/* USING rEDUCEMETHODE */

import React, { useReducer } from "react";

const intitialvalue = 0;

const Reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return (state = intitialvalue);

    default:
      return state;
  }
};

function UseRefReducede() {
  const [count, dispatch] = useReducer(Reducer, intitialvalue);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("Decrement")}>-</button>
      <button onClick={() => dispatch("Reset")}>Resete</button>
    </div>
  );
}

export default UseRefReducede;
