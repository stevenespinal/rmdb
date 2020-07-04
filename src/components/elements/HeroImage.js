import React from "react";
import {StyledHeroImage} from "../styles/StyledHeroImage";


const HeroImage = ({title, text, image}) => {
  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  )
}

export default HeroImage;