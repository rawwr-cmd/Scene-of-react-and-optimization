import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableToggling, setEnableToggling] = useState(false);

  console.log("App running");

  const toggleParagraphHandler = useCallback(() => {
    if (enableToggling) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [enableToggling]);

  const allowToggling = () => {
    setEnableToggling(true);
  };

  return (
    <div className="app">
      <h1>Hello World</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggling}>Enable Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
