import { TodoItem, ADD_TODO, TOGGLE_TODO, TodoActionTypes } from "./types/todo";
import {
  VisibilityTypes,
  SetVisibilityActionTypes,
  SET_VISIBILITY_FILTER,
} from "./types/visibility";

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

export function setVisibilityFilter(
  filter: VisibilityTypes
): SetVisibilityActionTypes {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter,
  };
}
