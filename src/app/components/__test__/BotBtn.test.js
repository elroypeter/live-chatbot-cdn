import React from "react";
import ReactDOM from "react-dom";
import { BotBtn } from "../BotBtn";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BotBtn />, div);
});
