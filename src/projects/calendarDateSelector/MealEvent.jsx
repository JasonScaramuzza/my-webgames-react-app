import "./MealEvent.css";

const MealEvent = (props) => {
  const data = props.data;
  const title = props.title;
  const calendarView = props.calendarView;
  //calendarView, 0 is month
  //calendarView, 1 is weeks
  //calendarView, 2 is day
  //calendarView, 3 is agenda
  const meal = data.meal;

  if (calendarView === 0) {
    //Calendar is on month View
    return (
      <div>
        <h3>{title}</h3>
        <p>{meal}</p>
      </div>
    );
  }
  if (calendarView === 1) {
    //Calendar is on week View
    return (
      <div>
        <h3>{title}</h3>
        <p>{meal}</p>
      </div>
    );
  }
  if (calendarView === 2) {
    //Calendar is on day View
    return (
      <div>
        <h3>{title}</h3>
        <p>{meal}</p>
      </div>
    );
  }
  if (calendarView === 3) {
    //Calendar is on agenda View
    return (
      <div>
        <h3>{title}</h3>
        <p>{meal}</p>
      </div>
    );
  }
  if (calendarView === 10)
    //placeholder for default result
    return (
      <div>
        <p>
          There was an error formatting this meal: {data.title}: {data.meal}
        </p>
      </div>
    );
  return (
    <div className="event-container">
      <div>
        <h3>{title}</h3>
        <p>
          {meal.foodItem.name}: {meal.foodItem.calories}
        </p>
      </div>
    </div>
  );
};

export default MealEvent;
