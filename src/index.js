import React from "react";
import "./style.scss";

import { render } from "react-dom";
import { App } from "./app/App";

const botTarget = document.getElementById("bot-target");

if (botTarget) {
    const botApiKey = botTarget?.getAttribute("bot-api-key");
    if (!botApiKey) console.error("bot-api-key is not supplied");
    else {
        render(
            <React.StrictMode>
                <App apiKey={botApiKey} />
            </React.StrictMode>,
            botTarget
        );
    }
} else {
    console.error("bot-target is not supplied or not matching");
    console.warn("Make sure that your mount element has a target id => 'bot-target'");
}
