import React from "react";

function CallButton({ Handelclick, children }) {
  console.log(`button rendering -`, children);
  return (
    <div>
      <h1>this is callback button</h1>
      <button onClick={Handelclick}>{children}</button>
    </div>
  );
}
export default React.memo(CallButton);
