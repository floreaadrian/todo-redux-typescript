import React from "react";

import { List, Toggle } from "rsuite";

interface Props {
  onClick: VoidFunction;
  toggled: boolean;
  text: string;
}

const Todo = (props: Props) => (
  <List.Item
    onClick={props.onClick}
    style={{
      textDecoration: props.toggled ? "line-through" : "none",
      fontSize: 20,
    }}
  >
    <Toggle checked={props.toggled} />
    <span style={{ marginLeft: "20px" }}>{props.text}</span>
  </List.Item>
);

export default Todo;
