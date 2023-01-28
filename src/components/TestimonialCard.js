import React from "react";
import "./TestimonialCard.css"

const TestimonialCard = ({ stars, userImage, userTitle, review }) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard-title">
        <h3>Rating</h3>
        <span>{stars}</span>
      </div>
      <div className="testimonialCard-user">
        <img src={userImage} alt="user" />
        <h4>{userTitle}</h4>
      </div>
      <p className="testimonialCard-text">{review}</p>
    </div>
  );
};

export default TestimonialCard;
