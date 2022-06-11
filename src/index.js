import React from "react";
import "./style.scss";

import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const botContainer = document.getElementById("bot-target");

if (botContainer) {
  const botApiKey = botContainer?.getAttribute("bot-api-key");
  if (!botApiKey) console.error("bot-api-key is not supplied");
  else createRoot(botContainer).render(<App apiKey={botApiKey} />);
} else {
  console.error("bot-target is not supplied or not matching");
}
