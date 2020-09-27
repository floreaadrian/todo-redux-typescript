import React, { createRef } from "react";

import { Button, Input } from "rsuite";
import { useMediaQuery } from "react-responsive";
import "./InputField.css";

interface Props {
  addTodo: (text: string) => void;
}

const InputField = (props: Props) => {
  const inputRef = createRef<HTMLInputElement>();
  const shouldAddTopMargin = useMediaQuery({
    query: "(max-device-width: 393px)",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addTodo(inputRef.current?.value || "");
        const currentRef = inputRef.current;
        if (currentRef != null) currentRef.value = "";
      }}
      style={{
        maxWidth: "490px",
        width: shouldAddTopMargin ? "390px" : "auto",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: shouldAddTopMargin ? "column" : "row",
        }}
      >
        <Input
          style={{
            minWidth: shouldAddTopMargin ? "0px" : "300px",
            height: "45px",
            flex: "2",
            // margin: "0px",
            // display: "inline",
          }}
          inputRef={inputRef}
          placeholder="What do you wanna do?"
        ></Input>
        <Button
          className="input-button"
          type="submit"
          color="blue"
          style={{
            marginLeft: shouldAddTopMargin ? "0px" : "10px",
            marginTop: shouldAddTopMargin ? "10px" : "0px",
          }}
        >
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default InputField;
