import React from "react";
import {StyledLoadMoreBtn} from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({text, callback}) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={callback}>{text}</StyledLoadMoreBtn>
  )
}

export default LoadMoreBtn;