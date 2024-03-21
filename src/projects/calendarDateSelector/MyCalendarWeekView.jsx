/* eslint-disable no-unused-vars */
import { useState } from "react";
import CalendarCell from "./CalendarCell";
import "./MyCalendarWeekView.css";

const MyCalendarWeekView = (props) => {
  const locales = props.locales;
  const events = props.events;
  const [daysInMonth, setDaysInMonth] = useState(
    Array.from({ length: 5 }, () => Array(7).fill()),
  );
  //console.log(locales, events);

  return (
    <div className="calendar-container">
      <div className="month-header">
        <CalendarCell header={""} />
        <CalendarCell header={"<<"} />
        <CalendarCell header={"<"} />
        <CalendarCell className="month-selector" header={"August 2022"} />
        <CalendarCell header={">"} />
        <CalendarCell header={">>"} />
        <CalendarCell header={""} />
      </div>

      <div className="day-of-week-container">
        <div className="day-of-week">Monday</div>
        <div className="day-of-week">Tuesday</div>
        <div className="day-of-week">Wednesday</div>
        <div className="day-of-week">Thursday</div>
        <div className="day-of-week">Friday</div>
        <div className="day-of-week">Saturday</div>
        <div className="day-of-week">Sunday</div>
      </div>

      <div className="calendar-cells-container">
        {daysInMonth?.map((week, rowIndex) => {
          return week.map((day, columnIndex) => {
            return (
              <div
                className="calendar-cell"
                key={"dIM" + rowIndex + columnIndex}
              >
                <CalendarCell header={day} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default MyCalendarWeekView;
