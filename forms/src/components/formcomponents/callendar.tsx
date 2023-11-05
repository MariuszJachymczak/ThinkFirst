import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DatePicker() {
  const [date, setDate] = useState<Date>(new Date());
  const [holidayTypes, setHolidayTypes] = useState<string[]>([]);

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  const country = "pl";
  const year = "2023";
  const apiKey = "8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx";

  const url = `https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}`;

  useEffect(() => {
    const headers = new Headers({
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    });

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        const types = result.map((item: { type: string }) => item.type);
        setHolidayTypes(types);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [url]);
  console.log(holidayTypes.includes("OBSERVANCE"));

  // const observance = holidayTypes.includes("OBSERVANCE");

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileDisabled={(types) => date.getDay() === 0}
        />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default DatePicker;
