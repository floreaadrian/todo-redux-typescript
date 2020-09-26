import {
  TodoState,
  TodoItem,
  ADD_TODO,
  TOGGLE_TODO,
  TodoActionTypes,
} from "../types/todo";

const initialState: TodoState = {
  todos: [{ id: -1, text: "ok", toggled: false }],
};

export default function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo: TodoItem) =>
          todo.id === action.payload
            ? { ...todo, toggled: !todo.toggled }
            : todo
        ),
      };
    default:
      return state;
  }
}
