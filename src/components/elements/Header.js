import React from "react";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from "../styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="RMDB-Logo"/>
        <StyledTMDBLogo src={TMDBLogo} alt="TMDB-Logo"/>
      </div>
    </StyledHeader>
  )
}

export default Header;