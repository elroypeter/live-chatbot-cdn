import React from "react";
import { BotBtn } from "./components/BotBtn";
import { BotContainer } from "./components/BotContainer";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BotBtn />
        <BotContainer />
      </>
    );
  }
}
