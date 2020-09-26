import React from "react";

interface Props {
  onClick: VoidFunction;
  toggled: boolean;
  text: string;
}

const Todo = (props: Props) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.toggled ? "line-through" : "none",
    }}
  >
    {props.text}
  </li>
);

export default Todo;
