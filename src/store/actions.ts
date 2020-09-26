import { TodoItem, ADD_TODO, TOGGLE_TODO, TodoActionTypes } from "./types";

var uniId: number = 0;

export function addTodo(todo: TodoItem): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: { ...todo, toggled: false, id: uniId++ },
  };
}

export function toggleTodo(id: number): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}
