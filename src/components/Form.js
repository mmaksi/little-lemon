import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../store/reservation.context";
import "./Form.css";

const Form = ({ unformattedDate }) => {
  const [date, setDate] = useState(new Date());
  const [hour, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [timeDay, setTimeDay] = useState("AM");
  const [tableNumber, setTableNumber] = useState(1);
  const [persons, setPersons] = useState(1);

  useEffect(() => {
    function convertDate(date) {
      const unformatted = new Date(date);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return unformatted
        .toLocaleDateString("en-US", options)
        .replace(/\//g, "-");
    }

    const newDate = convertDate(unformattedDate);
    setDate(newDate);
  }, [unformattedDate]);

  const formValues = {
    date,
    hour,
    minutes,
    timeDay: timeDay,
    tableNumber,
    persons,
  };

  const { dispatch } = useContext(ReservationContext);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "update", payload: formValues });
    navigate("/details");
  }

  function cancelHandler(e) {
    e.preventDefault();
    dispatch({ type: "remove" });
    navigate("/");
  }

  return (
    <div className="form__container">
      <form>
        <select
        className="form__time-container"
          onChange={(e) => setHours(e.target.value)}
          id="hours"
          name="hours"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span className="form__semicolon">:</span>
        <select
          onChange={(e) => setMinutes(e.target.value)}
          id="minutes"
          name="minutes"
        >
          <option value="00">00</option>
          <option value="05">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        <span
          onChange={(e) => setTimeDay(e.target.value)}
          className="form__time"
        >
          {timeDay}
        </span>
        <div>
          <label>Table Number</label>
          <select
            onChange={(e) => setTableNumber(e.target.value)}
            id="tableNumber"
            name="tableNumber"
          >
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
          </select>
        </div>
        <div>
          <label>Number of People</label>
          <select
            onChange={(e) => setPersons(e.target.value)}
            id="persons"
            name="persons"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </form>
      <div className="form-container__buttons">
        <button onClick={cancelHandler} className="description__button reservation__button">
          Cancel
        </button>
        <button onClick={submitHandler} className="description__button reservation__button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
