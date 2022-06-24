import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demo output running");
  return <MyParagraph>{props.show ? "This is the start!" : ""}</MyParagraph>;
};

//React.memo is just for the functional component, for the class based component it doesn't work
//React.memo only works when the props value changes and not when they are same and the parent component changes
//this will work for the primitive types like string, number, boolean, null, undefined
export default React.memo(DemoOutput);
