import React from "react";
import {StyledGrid, StyledGridContent} from "../styles/StyledGrid";
import PropTypes from "prop-types";

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

Grid.propTypes = {
  children: PropTypes.array,
  header: PropTypes.string
}

export default Grid;