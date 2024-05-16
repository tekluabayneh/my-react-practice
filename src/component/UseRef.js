// import React, { useEffect, useRef } from "react";
// import { useFetcher } from "react-router-dom";
// function UseRef() {
//   const Inputref = useRef("");

//   useEffect(() => {
// Inputref.current.focus()
//   }, []);

//   return (
//     <div>
//       <h1>this ios useref</h1>
//       <input type="text" ref={Inputref} />
//     </div>
//   );
// }
// export default UseRef;

import React, { useState, useEffect, useRef } from "react";

function UseReffuture() {
  const [timer, setTimer] = useState(0);

  const intervalref = useRef(null);

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimer((pervtimer) => pervtimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalref.current);
    };
  }, []);

  return (
    <div>
      Timer {timer}
      <button onClick={() => clearInterval(intervalref.current)}>
        Stop Timer
      </button>
    </div>
  );
}
export default UseReffuture;
