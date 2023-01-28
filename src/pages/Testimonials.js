import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "./Testimonials.css";
import cynthia from "../assets/cynthia.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-cards">
        <TestimonialCard
          stars="⭐⭐⭐⭐⭐"
          userImage={cynthia}
          userTitle="Cynthia A."
          review="I'd have my dinner at that restaurant anytime."
        />
        <TestimonialCard
          stars="⭐⭐⭐⭐⭐"
          userImage={cynthia}
          userTitle="Cynthia A."
          review="I'd have my dinner at that restaurant anytime."
        />
        <TestimonialCard
          stars="⭐⭐⭐⭐⭐"
          userImage={cynthia}
          userTitle="Cynthia A."
          review="I'd have my dinner at that restaurant anytime."
        />
        <TestimonialCard
          stars="⭐⭐⭐⭐⭐"
          userImage={cynthia}
          userTitle="Cynthia A."
          review="I'd have my dinner at that restaurant anytime."
        />
      </div>
    </div>
  );
};

export default Testimonials;
