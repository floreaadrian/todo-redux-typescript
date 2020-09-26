import { connect } from "react-redux";
import { Dispatch } from "redux";

import Link from "../presentational/Link";

import { setVisibilityFilter } from "../../store/actions";
import {
  SetVisibilityActionTypes,
  VisibilityTypes,
} from "../../store/types/visibility";
import { RootState } from "../../store/reducers/index";

interface Props {
  filter: VisibilityTypes;
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityReducer,
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetVisibilityActionTypes>,
  ownProps: Props
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
