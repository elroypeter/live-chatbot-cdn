import React from "react";
import { render } from "react-dom";
import "./style.css";

const rootElement = document.getElementById("target");

const Greeting = (props) => {
  return <h1>Hello sample chat your api key is {props.apiKey}</h1>;
};
render(
  <Greeting apiKey={rootElement.getAttribute("data-chat-api-key")} />,
  rootElement
);
