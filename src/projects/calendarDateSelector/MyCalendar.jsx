import { Calendar } from "react-big-calendar";

const MyCalendar = (props) => {
  const localizer = props.localizer;
  const allEvents = props.allEvents;
  const components = props.components;

  return (
    <Calendar
      className="calendar"
      localizer={localizer}
      events={allEvents}
      views={["month", "week", "day"]}
      //view = calendarView //Hook
      //defaultView = //initial view
      components={components}
      //toolbar=
      startAccessor="start"
      endAccessor="end"
    />
  );
};

export default MyCalendar;
