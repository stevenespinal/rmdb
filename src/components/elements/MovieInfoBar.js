import React from "react";
import FontAwesome from "react-fontawesome";
import {calcTime, convertMoney} from "../../helpers";
import {StyledMovieInfoBar} from "../styles/StyledMovieInfoBar";
import PropTypes from "prop-types";

const MovieInfoBar = ({time, budget, revenue}) => {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-time" size="2x" name="clock-o"/>
          <span className="movieinfobar-info">RUN TIME: {calcTime(time)}</span>
        </div>
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-budget" size="2x" name="money"/>
          <span className="movieinfobar-info">BUDGET: {convertMoney(budget)}</span>
        </div>
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-revenue" size="2x" name="ticket"/>
          <span className="movieinfobar-info">REVENUE: {convertMoney(revenue)}</span>
        </div>
      </div>
    </StyledMovieInfoBar>
  )
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieInfoBar;