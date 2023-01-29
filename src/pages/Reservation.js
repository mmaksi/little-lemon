import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../components/Form";
import "./Reservation.css";

const Reservation = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="reservation">
      <Calendar
        className="reservation__calendar"
        onChange={setDate}
        value={date}
      />
      <Form unformattedDate={date} />
    </div>
  );
};

export default Reservation;
