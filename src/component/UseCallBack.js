import React, { useCallback, useState, useSyncExternalStore } from "react";
import UsecallBackSubChild from "./UsecallBackSubChild";
import CallButton from "./CallBackButtonSubChild";

function UseCallBack() {
  const [couner1, setcouner1] = useState(0);
  const [couner2, setcouner2] = useState(0);

  const increment1 = useCallback(() => {
    setcouner1(couner1 + 1);
  }, [couner1]);

  const increment2 = useCallback(() => {
    setcouner2(couner2 + 2);
  }, [couner2]);
  return (
    <div>
      <h1>UseCallBack</h1>
      <UsecallBackSubChild text={"counted by 1:"} count={couner1} />
      <CallButton Handelclick={increment1}>+1</CallButton>
      <UsecallBackSubChild text={"counted by 2:"} count={couner2} />
      <CallButton Handelclick={increment2}>+2</CallButton>
    </div>
  );
}
export default UseCallBack;
