export enum VisibilityTypes {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE",
}

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export interface SetVisibilityActionTypes {
  type: typeof SET_VISIBILITY_FILTER;
  payload: VisibilityTypes;
}
