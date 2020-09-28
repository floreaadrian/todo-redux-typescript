import React from "react";
import { Button } from "rsuite";

interface Props {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const Link = (props: Props) => {
  return (
    <Button
      onClick={props.onClick}
      style={{
        marginLeft: "4px",
        marginRight: "4px",
        backgroundColor: props.active ? "#7ac142" : "#F7F7FA",
        color: props.active ? "white" : "#575757",
      }}
    >
      {props.children}
    </Button>
  );
};

export default Link;
