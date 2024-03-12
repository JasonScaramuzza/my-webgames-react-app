import { useState } from "react";
import Datepicker from "react-datepicker";

import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";
import HardCodedEvents from "./HardCodedEvents";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import "./MyCalendarPage.css";
import MyCalendar from "./MyCalendar";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};

const MyCalendarPage = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(HardCodedEvents);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <>
      <MyHeader />
      <div className="gradient-1"></div>
      <div className="add-event-container">
        <h2>Calendar</h2>
        <h3>Add New Event</h3>
        <input
          className="event-name-input"
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <Datepicker
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <Datepicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="calendar-wrapper">
        <MyCalendar
          localizer={locales}
          events={allEvents}
          calendarView="Weeks"
        />
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </>
  );
};

export default MyCalendarPage;
