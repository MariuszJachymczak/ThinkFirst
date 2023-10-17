import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DatePicker() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default DatePicker;
