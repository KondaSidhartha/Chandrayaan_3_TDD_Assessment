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
        moveForward();
        break;
      case "b":
        moveBackward();
        break;
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "u":
        turnUp();
        break;
      case "d":
        turnDown();
        break;
      default:
        break;
    }
  };

  const moveForward = () => {
    if (direction === "N") setY(y + 1);
    else if (direction === "S") setY(y - 1);
    else if (direction === "E") setX(x + 1);
    else if (direction === "W") setX(x - 1);
    else if (direction === "Up") setZ(z + 1);
    else if (direction === "Down") setZ(z - 1);
  };

  const moveBackward = () => {
    if (direction === "N") setY(y - 1);
    else if (direction === "S") setY(y + 1);
    else if (direction === "E") setX(x - 1);
    else if (direction === "W") setX(x + 1);
    else if (direction === "Up") setZ(z - 1);
    else if (direction === "Down") setZ(z + 1);
  };

  const turnRight = () => {
    if (direction === "N") setDirection("E");
    else if (direction === "E") setDirection("S");
    else if (direction === "S") setDirection("W");
    else if (direction === "W") setDirection("N");
  };

  const turnLeft = () => {
    if (direction === "N") setDirection("W");
    else if (direction === "W") setDirection("S");
    else if (direction === "S") setDirection("E");
    else if (direction === "E") setDirection("N");
  };

  const turnUp = () => {
    if (direction === "Up") setDirection("N");
    else if (direction === "N") setDirection("Up");
    else if (direction === "Down") setDirection("S");
    else if (direction === "S") setDirection("Down");
  };

  const turnDown = () => {
    if (direction === "Down") setDirection("N");
    else if (direction === "N") setDirection("Down");
    else if (direction === "Up") setDirection("S");
    else if (direction === "S") setDirection("Up");
  };

  const handleExecute = () => {
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
