import "./App.css";
import Counter from "./Counter";
import CustomInput from "./CustomInput";
import React, { useRef } from "react";
function App() {
  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <div className="App">
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="type something here" />
      <button
        onClick={() => {
          counterRef.current.reset();
          customInputRef.current.reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
