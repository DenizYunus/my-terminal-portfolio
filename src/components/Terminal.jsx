import { useState } from "react";
import ResponseHelper from "../utils/ResponseHelper";

const Terminal = () => {
  const userTextIndicator = ">>> ";
  const [text, setText] = useState(userTextIndicator);

  const { getResponse } = ResponseHelper();

  const containerStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    fontFamily: "monospace",
    fontSize: "1rem",
    padding: 20,
  };

  const terminalStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    border: "none",
    resize: "none",
    outline: "none",
    caretColor: "white",
    lineHeight: "1.3rem",
  };

  const clearChat = () => {
    setText(userTextIndicator);
  };

  const addToText = (additionalText) => {
    setText((prevText) => `${prevText}\n${additionalText}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lines = text.split("\n");
    const newLines = value.split("\n");

    if (newLines.length >= lines.length) {
      const editableLine = newLines[newLines.length - 1];
      const aboveLinesSame =
        lines.slice(0, lines.length - 1).join("\n") ===
        newLines.slice(0, newLines.length - 1).join("\n");

      if (aboveLinesSame && editableLine.startsWith(userTextIndicator)) {
        setText(value);
      } else {
        setText(text); // Revert to previous valid state
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!e.shiftKey) {
        const lines = text.split("\n");
        const lastLine = lines[lines.length - 1];
        const userText = lastLine.split(userTextIndicator)[1];

        const systemResponse = getResponse(userText);
        console.log("User Entered:", userText);

        addToText(`${systemResponse}`);
        addToText(userTextIndicator);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <textarea
        style={terminalStyle}
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      ></textarea>
      <button onClick={clearChat}>Clear</button>
      <button onClick={() => addToText("New message")}>Add Text</button>
    </div>
  );
};

export default Terminal;
