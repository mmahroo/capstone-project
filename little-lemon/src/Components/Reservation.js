import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";
import './Styles/Confirmation.css';
import AppContext from "./AppContext";
import { fetchAPI } from "./Api";

const Reservation = () => {
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const date = new Date();
    const times = fetchAPI(date);
    setAvailableTimes(times);
  }, []);

  const contextValut = { setConfirm, msg, setMsg, availableTimes };
  return (
    <section>
      <AppContext.Provider value={contextValut}>{!confirm ? <BookingForm /> : <Confirmation conf={msg} />}</AppContext.Provider>
    </section>
  );
};

export default Reservation;