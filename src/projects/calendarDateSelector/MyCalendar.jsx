import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useState } from "react";
import Datepicker from "react-datepicker";

import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import "./MyCalendar.css";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Breakfast",
    allDay: true,
    start: new Date(2024, 2, 2),
    end: new Date(2024, 2, 2),
  },
  {
    title: "Lunch",
    allDay: true,
    start: new Date(2024, 2, 2),
    end: new Date(2024, 2, 2),
  },
  {
    title: "Dinner",
    allDay: true,
    start: new Date(2024, 2, 2),
    end: new Date(2024, 2, 2),
  },
  {
    title: "Snacks",
    allDay: true,
    start: new Date(2024, 2, 2),
    end: new Date(2024, 2, 2),
  },
];

const MyCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const components = {
    event: (event) => {
      //event is not type safe
      //Make obj inside here for each month,week,day,agenda
      const data = event?.data;
      if (data?.apointment)
        return <AppointmentEvent appointment={data.appointment} />;
      if (data?.blockout) return <BlockoutEvent blockout={data.blockout} />;
      return null;
    },
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
      <div className="calendar-container">
        <Calendar
          className="calendar"
          localizer={localizer}
          events={allEvents}
          components={components}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </>
  );
};

export default MyCalendar;
