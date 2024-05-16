import React, { useState } from "react";

function UsecallBackSubChild({ text, count }) {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text}- {count}
    </div>
  );
}
export default React.memo(UsecallBackSubChild);
