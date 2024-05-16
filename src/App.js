import logo from "./logo.svg";
import React from "react";

import "./App.css";
import TodoList from "./component/Biding";
import Condional from "./component/condinal";
import List from "./component/List";
import Stylejs from "./component/style";
import Form from "./component/form";
import "./component/APPstyle.css"; // this one is for the regular
import styles from "./component/APPstyle_module.css"; // this is for the module
import { BrowserRouter as router, routes, route, Link } from "react-router-dom"; // this is how we can use router future
import About from "./pages/About";
import Contuct from "./pages/Contuct";
import Homepage from "./pages/Home";
import Datafetching from "./component/datafetching";
import Context from "./component/Context";
import UseRef from "./component/UseRef";
import UseReffuture from "./component/UseRef";
import UseRefReducede from "./component/UseRef-2";
import UseCallBack from "./component/UseCallBack";
import Memo from "./component/UseMemo";
import ToDoAPP from "./component/ToDo-APP";
export const OwnerContext = React.createContext();
export const ChanelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ToDoAPP />
      {/*       <Memo />
       */}{" "}
      {/*       <UseCallBack />
       */}{" "}
      {/*       <UseRefReducede />
       */}{" "}
      {/* <UseReffuture /> */}
      {/*       <UseRef />
       */}{" "}
      {/* <OwnerContext.Provider value={"teklu"}>
        <ChanelContext.Provider value={"this is provider"}>
          <Context />
        </ChanelContext.Provider>
      </OwnerContext.Provider> */}
      {/*       <Datafetching />
       */}{" "}
      <div>
        {/*  <router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Contuct">Contuct</Link>
            <Link to="/About">About</Link>
          </nav>
          <routes>
            <route path="/" element={<Homepage />} />
            <route path="/About" element={<About />} />
            <route path="/Contuct" element={<Contuct />} />
            <route path="*" element={<h1> page wasny found </h1>} />
          </routes>
        </router> */}

        {/*  <Form />
        <h1 className="Regularcss">Hello world</h1>
        <h1 className="modulecss">Hello world</h1> */}
        {/*  <Stylejs Title={true} />

        <TodoList />
        <Condional />
        <List /> */}
      </div>
    </div>
  );
}

export default App;
