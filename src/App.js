import React, { useState } from 'react';
import "./App.css";
import Parent from './Components/Parent';
// import CompOne from './Components/CompOne';
import CounterContext from "./context/CounterContext";

const App = () => {
  const countState = useState(0);
  return (
    <>
      <CounterContext.Provider value={countState}>
        {/* <h1>Panacloud Bootcamp2020</h1>
      <h2>Session One | Github Actions</h2>
      <h3>Auto Deployment</h3>
      <h3>Developer: Mohsin Ali Khan</h3> */}

        {/* <CompOne name="Component One" id="22" /> */}

        <Parent />
      </CounterContext.Provider>
    </>
  )
}

export default App;