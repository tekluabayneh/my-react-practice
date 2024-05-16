import { React, useEffect, useState } from "react";
import axios from "axios";
function Datafetching() {
  const [postes, setpostes] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);

      setpostes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>dtat fetching...</h1>
      <ul>
        {postes.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Datafetching;
