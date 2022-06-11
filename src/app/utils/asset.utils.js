import React from "react";

const closeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"feather feather-x " + props.classes?.join(" ")}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const maximizeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"feather feather-maximize-2 " + props.classes?.join(" ")}
  >
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const minimizeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"feather feather-minimize-2 " + props.classes?.join(" ")}
  >
    <polyline points="4 14 10 14 10 20"></polyline>
    <polyline points="20 10 14 10 14 4"></polyline>
    <line x1="14" y1="10" x2="21" y2="3"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const sendIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"feather feather-send " + props.classes?.join(" ")}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const paperIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"feather feather-paperclip " + props.classes?.join(" ")}
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

export const Svgs = {
  closeIcon,
  maximizeIcon,
  minimizeIcon,
  paperIcon,
  sendIcon,
};
