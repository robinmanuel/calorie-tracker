function StatCards({ records }) {

  const today = records[0] || {};

  const weekly = records.slice(0, 7);

  const avgSteps =
    weekly.reduce((sum, r) => sum + Number(r.steps || 0), 0) /
    (weekly.length || 1);

  const avgCalories =
    weekly.reduce((sum, r) => sum + Number(r.calories || 0), 0) /
    (weekly.length || 1);

  const avgWeight =
    weekly.reduce((sum, r) => sum + Number(r.weight || 0), 0) /
    (weekly.length || 1);

  return (

    <div className="stats-grid">

      <div className="stat-card">
        <h3>Today's Steps</h3>
        <p>{today.steps || "-"}</p>
        <span className="weekly-avg">
          Weekly Avg: {Math.round(avgSteps)}
        </span>
      </div>

      <div className="stat-card">
        <h3>Today's Calories</h3>
        <p>{today.calories || "-"}</p>
        <span className="weekly-avg">
          Weekly Avg: {Math.round(avgCalories)}
        </span>
      </div>

      <div className="stat-card">
        <h3>Latest Weight</h3>
        <p>{today.weight || "-"}</p>
        <span className="weekly-avg">
          Weekly Avg: {avgWeight.toFixed(1)}
        </span>
      </div>

    </div>
  );
}

export default StatCards;