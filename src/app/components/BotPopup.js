import React from "react";
import userIcon from "../../assets/img/user.svg";
import { Svgs } from "../utils/asset.utils";

export const BotPopup = () => {
  const agentImage = null;
  return (
    <section className="botbox-popup">
      <header>
        <aside style={{ flex: 2 }}>
          <img
            className="bot-agent-avatar"
            style={{ padding: agentImage ? "0px" : "10px" }}
            src={userIcon}
          />
        </aside>
        <aside style={{ flex: 8 }}>
          <h1>Hassan Mike {"(Online)"}</h1>
        </aside>
        <aside className="sidebtn" style={{ flex: 1 }}>
          <span className="bot-maximize-btn">
            <Svgs.maximizeIcon
              fill="none"
              stroke="#ffffff"
              classes={["bot-maximize"]}
            />
          </span>
        </aside>
      </header>

      <main></main>

      <footer>
        <aside style={{ flex: 10 }}>
          <textarea
            type="text"
            placeholder="Type your message here..."
            autoFocus
          ></textarea>
        </aside>
        <aside style={{ flex: 1, color: "#888", textAlign: "center" }}>
          <span className="text-primary sendbtn">
            <Svgs.sendIcon
              fill="none"
              stroke="currentColor"
              classes={["sendicon"]}
            />
          </span>
        </aside>
      </footer>
    </section>
  );
};
