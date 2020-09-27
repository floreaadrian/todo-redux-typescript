import React from "react";
import FilterLink from "../containers/FilterLink";
import { ButtonToolbar } from "rsuite";

import { VisibilityTypes } from "../../store/types/visibility";

const Footer = () => (
  <ButtonToolbar style={{ paddingTop: "10px" }}>
    <span>Show: </span>
    <FilterLink filter={VisibilityTypes.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityTypes.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityTypes.SHOW_COMPLETED}>Completed</FilterLink>
  </ButtonToolbar>
);

export default Footer;
