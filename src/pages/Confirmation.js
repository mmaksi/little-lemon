import React, { useContext } from "react";
import { ReservationContext } from "../store/reservation.context";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Confirmation.css"
import Button from "../components/Button";

const Confirmation = () => {
  const { state, dispatch } = useContext(ReservationContext);
  const email = state.value;

  const navigate = useNavigate();

  function confirmHandler() {
    dispatch({ type: "remove" });
    navigate("/");
  }

  return (
    <div className="confirmation__container">
      <span className="confirmation__icon">
        <FontAwesomeIcon icon={faCircleCheck} />
      </span>
      <h1 className="confirmation__header">THANK YOU!</h1>
      <p className="confirmation__text">
        Your reservation has been successfully registered. Please check your
        email. We have sent the reservation details to your inbox ({email}). See
        you soon!
      </p>
      <Button clickHandler={confirmHandler} type="primary" title="Continue!" classname="confirmation__button" />
    </div>
  );
};

export default Confirmation;
