import {
  VisibilityTypes,
  SetVisibilityActionTypes,
  SET_VISIBILITY_FILTER,
} from "../types/visibility";

const initialState: VisibilityTypes = VisibilityTypes.SHOW_ALL;

export default function visibilityReducer(
  state = initialState,
  action: SetVisibilityActionTypes
): VisibilityTypes {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
