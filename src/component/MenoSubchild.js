import React, { useEffect } from "react";

  let initilvalus = 0;
function MenoSubchild() {


  useEffect(() => {
    initilvalus++;
  });
  return <div>recount :{initilvalus}</div>;
}
export default MenoSubchild;
