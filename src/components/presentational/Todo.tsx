import React from "react";

import { List } from "rsuite";
import Checkmark from "react-typescript-checkmark";
import "./Checkmark.css";

interface Props {
  onClick: VoidFunction;
  toggled: boolean;
  text: string;
}

const Todo = (props: Props) => (
  <List.Item
    onClick={props.onClick}
    style={{
      fontSize: 20,
    }}
  >
    <span style={{ display: "flex", alignItems: "center" }}>
      {props.toggled ? <Checkmark size="md" /> : <div className="dot" />}
      <span style={{ marginLeft: "10px" }}>{props.text}</span>
    </span>
  </List.Item>
);

export default Todo;
