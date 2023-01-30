import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../store/reservation.context";
import "./UserDetails.css";

const UserDetails = () => {
  const { state, dispatch } = useContext(ReservationContext);

  const { date, hour, minutes, persons, tableNumber, timeDay } = {
    ...state.value,
  };

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [event, setEvent] = useState("N/A");
  const [email, setEmail] = useState("");
  const [day] = useState(
    new Date(date).toLocaleString("default", { weekday: "long" })
  );

  function submitHandler() {
    dispatch({ type: "update", payload: email });
    navigate("/confirmation");
  }

  function backHandler() {
    navigate("/reservation");
  }

  return (
    <div>
      <form>
        <label className="form__firstName" htmlFor="first-name">
          First Name:
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="form__lastName" htmlFor="last-name">
          Last Name:
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="form__email" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form__location" htmlFor="location">
          Location:
        </label>
        <br />
        <input
          type="radio"
          id="location-1"
          name="location"
          value="Inside"
          checked={location === "Inside"}
          onChange={(e) => setLocation(e.target.value)}
        />
        Inside
        <br />
        <input
          type="radio"
          id="location-2"
          name="location"
          value="Outside"
          checked={location === "Outside"}
          onChange={(e) => setLocation(e.target.value)}
        />
        Outside
        <label htmlFor="event">Event:</label>
        <select
          id="event"
          name="event"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="N/A">N/A</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>
        <br />
        <br />
      </form>
      <p>
        Reservation by {firstName} {lastName} on {day} in {date} for {persons}{" "}
        persons at table {tableNumber} at {hour}:{minutes} {timeDay} {location}.
        Special occasion: {event}
      </p>
      <button onClick={submitHandler}>CONFIRM</button>
      <button onClick={backHandler}>BACK</button>
    </div>
  );
};

export default UserDetails;
