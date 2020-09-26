import React, { useState } from "react";

interface Props {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const Link = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.active}
      style={{
        marginLeft: "4px",
      }}
    >
      {props.children}
    </button>
  );
};

export default Link;
