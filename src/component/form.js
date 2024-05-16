import React, { Component, useState } from "react";

// export class Form extends Component {

//   /* function handler(){
//     console.log("click")
//   } */

// function onchangehandler(){
//     console.log("onchnage")
// }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={onchangehandler()}/>
//         <button onClick={handler()}>click me</button>
//       </div>
//     );
//   }
// }

// export default Form;

function Form() {
  const [inputText, setinputText] = useState("");

  function onchangehandler(item) {
    const newvaue = item.target.value;
    setinputText(newvaue);
    console.log(newvaue);
  }

  function handler() {
    console.log("onchnage");
    setinputText("");
  }
  return (
    <div>
      <h1>hello {inputText}</h1>
      <input type="text" value={inputText} onChange={onchangehandler} />
      <button onClick={handler}>click me</button>
    </div>
  );
}
export default Form;

// export default class form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       Textatrea: "",
//     };
//   }

//   onchnaged = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };

//   Textareahandler = (event) => {
//     this.setState({
//       textarea: event.target.value,
//     });
//     console.log("sdsdssd");
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <input
//           type="text"
//           value={this.state.username}
//           onChange={this.onchnaged}
//         />

//         <form>
//           <div>
//             <textarea
//               value={this.state.Textatrea}
//               onChange={this.Textareahandler}
//             ></textarea>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
