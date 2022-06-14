import React from "react";
import ReactDOM from "react-dom";
import { BotContainer } from "../BotContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BotContainer />, div);
});
