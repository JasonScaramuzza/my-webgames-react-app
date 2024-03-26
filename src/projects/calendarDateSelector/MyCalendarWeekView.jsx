/* eslint-disable no-unused-vars */
import { useState } from "react";
import CalendarCell from "./CalendarCell";
import "./MyCalendarWeekView.css";
import * as dateFns from 'date-fns'

const formatOfYear = 'y';
const formatOfMonth = 'MMMM';
const formatOfWeek = '';
const formatOfDay = 'd';

const MyCalendarWeekView = (props) => {
  const locales = props.locales;
  const events = props.events;
  const [currentDate, setCurrentDate] = useState(new Date())
  const [daysInMonth, setDaysInMonth] = useState(calculateDaysInMonth());

  //console.log(locales, events);


  function calculateDaysInMonth(){
    //find the first day of currentDate
    const firstDay = dateFns.startOfMonth(currentDate);
    //find the last day of currentDate
    const lastDay = dateFns.lastDayOfMonth(currentDate);
    //Find the first day of week of firstDay
    const startDate = dateFns.startOfWeek(firstDay);
    //Find the first day of week of lastDay
    const endDate = dateFns.lastDayOfWeek(lastDay)

    const totalDate = dateFns.eachDayOfInterval({start:startDate, end:endDate})

    return(totalDate);
  }


  return (
    <div className="calendar-container">
      <div className="month-header">
        <button onClick={() => setCurrentDate(new Date(new Date().setFullYear(currentDate.getFullYear() - 1)))}>&lt;&lt;</button>
        <button>&lt;</button>
        <button className="month-selector">{dateFns.format(currentDate, formatOfMonth)} {dateFns.format(currentDate, formatOfYear)}</button>
        <button>&gt;</button>
        <button onClick={() => setCurrentDate(new Date(new Date().setFullYear(currentDate.getFullYear() + 1)))}>&gt;&gt;</button>
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
        {daysInMonth?.map((date, index) => {
          {/*If date month != currentDate month then grey out the tile*/}
          return(
            <div key={index} className="calendar-cell">
              <CalendarCell header={dateFns.format(date, formatOfDay)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCalendarWeekView;
