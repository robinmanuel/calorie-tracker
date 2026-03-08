function StatCards({ records }) {

  const totalSteps = records.reduce(
    (sum, r) => sum + Number(r.steps), 0
  );

  const totalCalories = records.reduce(
    (sum, r) => sum + Number(r.calories), 0
  );

  const latestWeight =
    records.length > 0 ? records[0].weight : "-";

  return (

    <div className="stats-grid">

      <div className="stat-card">
        <h3>Total Steps</h3>
        <p>{totalSteps}</p>
      </div>

      <div className="stat-card">
        <h3>Total Calories</h3>
        <p>{totalCalories}</p>
      </div>

      <div className="stat-card">
        <h3>Latest Weight</h3>
        <p>{latestWeight}</p>
      </div>

    </div>

  );
}

export default StatCards;