import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoActionTypes } from "../../store/types";
import { addTodo } from "../../store/actions";

import InputField from "../presentational/InputField";

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>) => ({
  addTodo: (text: string) =>
    dispatch(addTodo({ id: 0, text: text, toggled: false })),
});

export default connect(null, mapDispatchToProps)(InputField);
