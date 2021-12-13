const MealsList = ({mealsList}) => {
  return (
    <ul>
    {mealsList.map((m) => (
      <li>
        [ Tier: {m.tier} Name: {m.meal} Stat: {m.stat} ]
      </li>
    ))}
  </ul>
  );
};

export default MealsList;