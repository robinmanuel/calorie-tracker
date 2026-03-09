function StatCards({ records }) {

const today = new Date().toISOString().split("T")[0];

const todayRecord = records.find(r => new Date(r.date).toLocaleDateString()) || {};

const todaySteps = todayRecord.steps || "-";
const todayCalories = todayRecord.calories || "-";
const todayWeight = todayRecord.weight || "-";
  
   return (
  <div className="card-grid">

    <div className="card">
      <h3>Today's Steps</h3>
      <p>{todaySteps}</p>
    </div>

    <div className="card">
      <h3>Today's Calories</h3>
      <p>{todayCalories}</p>
    </div>

    <div className="card">
      <h3>Today's Weight</h3>
      <p>{todayWeight}</p>
    </div>

  </div>
);
}

export default StatCards;