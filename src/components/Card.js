import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-delivery">
          <span>Order a Delivery</span>
          <FontAwesomeIcon icon={faMotorcycle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
