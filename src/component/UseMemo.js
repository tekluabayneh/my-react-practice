import React, { useMemo, useState } from "react";
import MenoSubchild from "./MenoSubchild";
function Memo() {
  const [count, setcount] = useState(0);
  const usemeno = useMemo(() => {
    return <MenoSubchild />;
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>increment</button>
      {usemeno}
    </div>
  );
}
export default Memo;
