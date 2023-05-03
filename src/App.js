import "./App.css";
import Counter from "./Counter";
import CustomInput from "./CustomInput";
import React, { useRef } from "react";
import Color from "./Color";

function App() {
  const counterRef = useRef();
  const customInputRef = useRef();
  const colorRef = useRef();

  return (
    <div className="App">
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="type something here" />
      <br />
      <Color ref={colorRef} />
      <button
        onClick={() => {
          counterRef.current.reset();
          customInputRef.current.reset();
          colorRef.current.reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
