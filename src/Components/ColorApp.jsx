import React, { useState } from "react";

function ColorApp() {
  const [color, setColor] = useState("#ffffff");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h2>Color Palatte</h2>
      <label style={{ backgroundColor: color }}>Your color is : {color}</label>
      <br />
      <label>Select a color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorApp;
