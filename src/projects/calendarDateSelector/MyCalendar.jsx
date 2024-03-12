import "./MyCalendar.css";
import MyCalendarWeekView from "./MyCalendarWeekView";

const MyCalendar = (props) => {
  const locales = props.locales;
  const events = props.events;
  const calendarView = props.calendarView;

  if (calendarView === "Weeks") {
    return (
      <div className="calendar-wrapper">
        <MyCalendarWeekView locales={locales} events={events} />
      </div>
    );
  }
  return (
    <div className="calendar-wrapper">
      There was an error displaying the calendar with view {calendarView}
    </div>
  );
};

export default MyCalendar;
