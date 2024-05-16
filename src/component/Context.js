import React, { Children, useContext } from "react";
import { OwnerContext, ChanelContext } from "../App";
export default function Context() {
  const owner = useContext(OwnerContext);
  const context = useContext(ChanelContext);
  return (
    <div>
      {owner}- {context}
    </div>
  );
}
