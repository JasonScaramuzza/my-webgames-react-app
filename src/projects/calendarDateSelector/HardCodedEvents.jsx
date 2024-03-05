const HardCodedEvents = () => {
  const events = [
    {
      start: new Date(2024, 2, 2, 6),
      end: new Date(2024, 2, 2, 7),
      title: "Breakfast",
      id: 0,
      data: {
        type: "meal",
        meal: {
          foodItem: {
            id: 1,
            name: "Banana",
            calories: 500,
          },
        },
      },
    },
    {
      start: new Date(2024, 2, 2, 12),
      end: new Date(2024, 2, 2, 13),
      title: "Lunch",
      id: 1,
      data: {
        type: "meal",
        meal: {
          foodItem: {
            id: 2,
            name: "Tomato Soup",
            calories: 350,
          },
        },
      },
    },
    {
      start: new Date(2024, 2, 2, 17),
      end: new Date(2024, 2, 2, 18),
      title: "Dinner",
      id: 2,
      data: {
        type: "meal",
        meal: {
          foodItem: {
            id: 3,
            name: "Chicken Ceasar Salad",
            calories: 800,
          },
        },
      },
    },
    {
      start: new Date(2024, 2, 2, 19),
      end: new Date(2024, 2, 2, 20),
      title: "Snack",
      id: 3,
      data: {
        type: "meal",
        meal: {
          foodItem: {
            id: 4,
            name: "Chocolate Buttons",
            calories: 1000,
          },
        },
      },
    },
  ];

  return events;
};

export default HardCodedEvents;
