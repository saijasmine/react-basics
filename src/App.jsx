import React from "react";
import Counter from "./Components/Counter";
import FormOnChange from "./Components/FormOnChange";
import ColorApp from "./Components/ColorApp";
import "./App.css";
import ToDoList from "./Components/ToDoList.jsx";
import WindowSize from "./Components/WindowSize.jsx";
import DigitalClock from "./Components/DigitalClock.jsx";

function App() {
  return (
    <>
      <Counter />
      <br />
      ----------------
      <FormOnChange />
      <br />
      ----------------
      <ColorApp />
      <br />
      ----------------
      <ToDoList />
      <br />
      -----------------
      <WindowSize />
      <br />
      -----------------
      <DigitalClock />
    </>
  );
}

export default App;
