import React from "react";
import "./styles.css";
export const MCard = ({ src, text, alt }) => {
  return (
    <div className="card-holder">
      <div className="card-text">
        <p>{text}</p>
      </div>
      <div className="card-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
