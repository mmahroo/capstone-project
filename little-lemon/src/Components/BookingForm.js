import { useState, useContext } from "react";
import AppContext from "./AppContext";
import "./Styles/BookingForm.css";


/*const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}; */

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const year = tomorrow.getFullYear();
const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
const day = String(tomorrow.getDate()).padStart(2, "0");

const nextDayFormatted = `${year}-${month}-${day}`;
const minDate = nextDayFormatted;

const BookingForm = () => {
    const { setConfirm, msg, setMsg, availableTimes } = useContext(AppContext);
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState('0');
    const [occasion, setOccasion] = useState('');


    const handleName = e => {
        if (e.target.name === "firstName") {
        setName({ ...name, firstName: e.target.value });
        } else if (e.target.name === "lastName") {
        setName({ ...name, lastName: e.target.value });
        } else if (e.target.name === "email") {
        setName({ ...name, email: e.target.value });
        }
    };

    const handleDate = e => {
        setDate(e.target.value);
    };

    const handleTime = e => {
        setTime(e.target.value);
    };

    const handleGuests = e => {
        setGuests(e.target.value);
    };


    const handleOccasion = e => {
        setOccasion(e.target.value);
    };

  

    const handleSubmit = e => {
        e.preventDefault();
        setMsg({
        ...msg,
        line1: `Dear ${name.firstName} ${name.lastName}`,
        line2: `Your table for party of ${guests} is reserved for ${date} at ${time}.`,
        line3: `We will see you soon for the ${occasion} event!`,
        });
        setConfirm(true);
    };

  return (
    <section className="main">
      <h2 id="form-heading">Reserve a table</h2>
      <section className="container">
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="formContainer">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              required="true"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              className="form-control"
              value={name.firstName}
              onChange={handleName}
              minLength={3}
            />
          </div>
          <div className="formContainer">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              required={true}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              className="form-control"
              value={name.lastName}
              onChange={handleName}
            />
          </div>
          <div className="formContainer">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jdoe@jdoe.com"
              className="form-control"
              value={name.email}
              onChange={handleName}
              required={true}
            />
          </div>

          <div className="formContainer">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input type="date" name="form-control" id="date" className="form-control" value={date} onChange={handleDate} min={minDate} />
          </div>

          <div className="formContainer">
            <label htmlFor="time" className="form-label">
              Time:
            </label>
            <select name="time" id="time" className="form-select" value={time} onChange={handleTime} required={true}>
              <option defaultValue hidden >
                Select Time:
              </option>
              {availableTimes.map((ele, i) => {
                return (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="formContainer" id="guest">
            <label htmlFor="guests" className="form-label">
              Guests:
            </label>
            <input type="number" value={guests} id="guests" className="form-control" min={1} max={99} onChange={handleGuests} />
          </div>

          <div className="formContainer">
            <label htmlFor="occasion" className="form-label">
              Occasion:
            </label>
            <select name="occasion" id="occasion" className="form-select" value={occasion} onChange={handleOccasion}>
                Select Occasion:
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="formContainer" >
          <button  type="submit" id="primaryButton" >
            Confirm Reservation
          </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default BookingForm;