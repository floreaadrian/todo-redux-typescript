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
      // backgroundColor={props.active ? "#00FF00" : "#808080"}
      onClick={props.onClick}
      disabled={props.active}
      style={{
        marginLeft: "4px",
        marginRight: "4px",
      }}
    >
      {props.children}
    </Button>
  );
};

export default Link;
