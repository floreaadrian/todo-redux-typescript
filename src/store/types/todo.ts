export interface TodoItem {
  id: number;
  text: string;
  toggled: boolean;
}

export interface TodoState {
  todos: TodoItem[];
}

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: TodoItem;
}

interface ToggleTodoAcction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAcction;
