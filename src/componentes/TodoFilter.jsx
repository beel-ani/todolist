import React from "react";
import {
  FilterContainer,
  ItemsLeft,
  FilterButton,
  FilterButtonContainer,
} from "./Filter";
export default function TodoFilter() {
  return (
    <FilterContainer>
      <ItemsLeft />
      <FilterButton filter="all" active="active" />
      <FilterButton filter="active" active="active" />
      <FilterButton filter="completed" active="active" />
      <FilterButtonContainer></FilterButtonContainer>
    </FilterContainer>
  );
}
