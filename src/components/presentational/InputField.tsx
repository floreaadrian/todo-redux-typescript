import React, { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const InputField = (props: Props) => {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(text);
          setText("");
        }}
      >
        <input onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default InputField;
