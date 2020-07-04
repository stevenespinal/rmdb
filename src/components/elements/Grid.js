import React from "react";
import {StyledGrid, StyledGridContent} from "../styles/StyledGrid";

const Grid = ({children, header}) => {
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>
        {children}
      </StyledGridContent>
    </StyledGrid>
  )
}

export default Grid;