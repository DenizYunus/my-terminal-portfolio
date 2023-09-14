import { useState, useRef } from "react";
import ResponseHelper from "../utils/ResponseHelper";

const USER_TEXT_INDICATOR = ">>> ";

const containerStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "black",
  fontFamily: "monospace",
  fontSize: "1rem",
  padding: 15,
  boxSizing: "border-box",
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
  boxSizing: "border-box",
};

const Terminal = () => {
  const [text, setText] = useState(USER_TEXT_INDICATOR);
  const terminalTextarea = useRef(null);
  const { getResponse } = ResponseHelper();
  const [userWritable, setUserWritable] = useState(true);

  // const clearChat = () => {
  //   setText(userTextIndicator);
  // };

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

      if (aboveLinesSame && editableLine.startsWith(USER_TEXT_INDICATOR)) {
        setText(value);
      } else {
        setText(text); // Revert to previous valid state
      }
    }
  };

  const handleKeyPress = async (e) => {
    if (!userWritable) return;
    terminalTextarea.current.scrollTop = terminalTextarea.current.scrollHeight;
    if (e.key === "Enter") {
      e.preventDefault();

      if (!e.shiftKey) {
        const lines = text.split("\n");
        const lastLine = lines[lines.length - 1];
        const userText = lastLine.split(USER_TEXT_INDICATOR)[1];

        setUserWritable(false);
        const systemResponse = await getResponse(userText);
        console.log("User Entered:", userText);

        addToText(`${systemResponse}`);
        addToText(USER_TEXT_INDICATOR);
        setUserWritable(true);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <textarea
        style={terminalStyle}
        value={text}
        ref={terminalTextarea}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      ></textarea>
    </div>
  );
};

export default Terminal;

// sudo rm mlwr3162
