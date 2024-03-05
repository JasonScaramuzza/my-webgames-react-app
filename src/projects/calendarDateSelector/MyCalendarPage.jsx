import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useState } from "react";
import Datepicker from "react-datepicker";
import { useMemo } from "react";

import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";
import HardCodedEvents from "./HardCodedEvents";
import MealEvent from "./MealEvent";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import "./MyCalendar.css";
import MyCalendar from "./MyCalendar";

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

//declare components here. pass components to wrapper MyCalendar which holds the calendar

const MyCalendarPage = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(HardCodedEvents);
  const [calendarView, setCalendarView] = useState("month");

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const components = useMemo(
    () => ({
      //only needs to be changed initially,
      //on allEvents change,
      //on CalendarView Change
      //
      event: (event) => {
        //event is not type safe
        const eventData = event?.event?.data;
        const eventTitle = event?.event?.title;
        const eventType = eventData?.type;
        console.log("components rendered");

        if (eventType === "meal") {
          return (
            <MealEvent
              data={eventData}
              title={eventTitle}
              calendarView={calendarView}
            />
          );
        }
        return null;
      },
    }),
    [],
  );

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
        <MyCalendar
          localizer={localizer}
          allEvents={allEvents}
          components={components}
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
