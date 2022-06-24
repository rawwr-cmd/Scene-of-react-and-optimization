import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demo output running");
  return <MyParagraph>{props.show ? "This is the start!" : ""}</MyParagraph>;
};

export default DemoOutput;
