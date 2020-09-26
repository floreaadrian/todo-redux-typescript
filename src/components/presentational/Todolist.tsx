import React from "react";
import Todo from "./Todo";
import { TodoItem } from "../../store/types/todo";

interface Props {
  toggleTodo: (args: number) => void;
  todos: Array<TodoItem>;
}

const TodoList = (props: Props) => (
  <ul>
    {props.todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
