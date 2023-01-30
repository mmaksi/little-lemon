import React, { useContext } from "react";
import { ReservationContext } from "../store/reservation.context";

const Confirmation = () => {
  const { dispatch } = useContext(ReservationContext);

  function confirmHandler() {
    dispatch({ type: "remove" });
  }

  return (
    <div>
      <h1>THANK YOU!</h1>
      <p>
        Your reservation has been successfully registered. Please check your
        email. We have sent the reservation details to your inbox. See you soon!
      </p>
      <button onClick={confirmHandler}>Continue!</button>
    </div>
  );
};

export default Confirmation;
