import React, { useState } from "react";

const Chandrayaan3 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [direction, setDirection] = useState("N");
  const [commandInput, setCommandInput] = useState("");

  const executeCommand = (command) => {
    switch (command) {
      case "f":
        setY(y + 1);
        break;
      default:
        break;
    }
  };

  const handleExecute = () => {
    // Execute the command
    executeCommand(commandInput);
  };

  return (
    <div>
      <h2>Chandrayaan 3</h2>
      <p>
        Current Position: ({x}, {y}, {z})
      </p>
      <p>Current Direction: {direction}</p>
      <label>
        Enter Command:
        <input
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
        />
      </label>
      <button onClick={handleExecute}>Execute Command</button>
    </div>
  );
};

export default Chandrayaan3;
