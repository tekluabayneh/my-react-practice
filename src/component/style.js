import React from "react";
import "./Style_style.css";

function Stylejs(props) {
  const className = props.Title ? "Title" : "";

  return (
    <div className="heading">
      <h1 className={`${className} largerfont`}>Hello wolrd</h1>
      {/* we can use multiple class like this */}
    </div>
  );
}

export default Stylejs;
