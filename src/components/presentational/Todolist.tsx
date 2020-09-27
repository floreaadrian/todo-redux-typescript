import React from "react";
import Todo from "./Todo";
import { TodoItem } from "../../store/types/todo";

import { List } from "rsuite";

interface Props {
  toggleTodo: (args: number) => void;
  todos: Array<TodoItem>;
}

const TodoList = (props: Props) => (
  <List bordered size="md" style={{ width: "390px", marginBottom: "10px" }}>
    {props.todos.length > 0 ? (
      props.todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => props.toggleTodo(todo.id)}
        />
      ))
    ) : (
      <List.Item>No items</List.Item>
    )}
  </List>
);

export default TodoList;
