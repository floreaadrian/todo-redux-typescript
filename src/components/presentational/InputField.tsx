import React, { createRef } from "react";

import { Button, Input } from "rsuite";
import { useMediaQuery } from "react-responsive";

interface Props {
  addTodo: (text: string) => void;
}

const InputField = (props: Props) => {
  const inputRef = createRef<HTMLInputElement>();
  const shouldAddTopMargin = useMediaQuery({
    query: "(max-device-width: 393px)",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(inputRef.current?.value || "");
          const currentRef = inputRef.current;
          if (currentRef != null) currentRef.value = "";
        }}
      >
        <Input
          style={{
            maxWidth: "300px",
            height: "45px",
            // margin: "0px",
            display: "inline",
          }}
          inputRef={inputRef}
          placeholder="What do you wanna do?"
        ></Input>
        <Button
          type="submit"
          color="blue"
          style={{
            marginLeft: shouldAddTopMargin ? "0px" : "10px",
            marginTop: shouldAddTopMargin ? "10px" : "0px",
            height: "45px",
          }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default InputField;
