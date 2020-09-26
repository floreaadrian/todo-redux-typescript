import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoState, TodoActionTypes } from "../../store/types";
import { toggleTodo } from "../../store/actions";

import TodoList from "../presentational/Todolist";

const mapStateToProps = (state: TodoState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
