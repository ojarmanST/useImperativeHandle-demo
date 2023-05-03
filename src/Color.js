import React, { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";

export default forwardRef(function Color(props, ref) {
  const [color, setColor] = useState("#000000");

  useImperativeHandle(
    ref,
    () => {
      //function returns an object
      //object contains current value of ref
      return {
        reset: () => setColor("#000000"),
      };
    },
    []
  );

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <button onClick={() => setColor(getRandomColor())}>Change color!</button>
      <p>Color: {color}</p>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      ></div>
    </>
  );
});
