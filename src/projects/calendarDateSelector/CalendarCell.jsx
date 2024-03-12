/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./CalendarCell.css";

const CalendarCell = (props) => {
  const header = props.header;
  const content = props.content;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="cell-container">
      <div className="cell-header">{header}</div>
      <div className="cell-content">{content}</div>
    </div>
  );
};

export default CalendarCell;
