import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoActionTypes, TodoItem } from "../../store/types/todo";
import { toggleTodo } from "../../store/actions";
import { RootState } from "../../store/reducers/index";

import TodoList from "../presentational/Todolist";
import { VisibilityTypes } from "../../store/types/visibility";

const getVisibleTodos = (
  todos: TodoItem[],
  filter: VisibilityTypes
): TodoItem[] => {
  switch (filter) {
    case VisibilityTypes.SHOW_ALL:
      return todos;
    case VisibilityTypes.SHOW_COMPLETED:
      return todos.filter((t) => t.toggled);
    case VisibilityTypes.SHOW_ACTIVE:
      return todos.filter((t) => !t.toggled);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todoReducer.todos, state.visibilityReducer),
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
