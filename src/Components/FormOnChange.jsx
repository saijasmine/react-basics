import React, { useState } from "react";

const FormOnChange = () => {
  const [name, setName] = useState("Guest");
  const [fruits, setFruits] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleFruitChange = (e) => {
    setFruits(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <select value={fruits} onChange={handleFruitChange}>
        <option value="">Select an option</option>
        <option value="banana">Banana</option>
        <option value="apple">Apple</option>
        <option value="guava">Guava</option>
      </select>
      <p>
        Welcome {name}.. You have selected {fruits}
      </p>
    </div>
  );
};

export default FormOnChange;
