import React, { useState } from "react";
import FilterLink from "../containers/FilterLink";

import { VisibilityTypes } from "../../store/types/visibility";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityTypes.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityTypes.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityTypes.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
