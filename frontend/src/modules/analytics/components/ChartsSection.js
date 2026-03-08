import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ChartsSection({ records }) {

  const chartData = records.map(r => ({
    date: new Date(r.date).toLocaleDateString(),
    steps: Number(r.steps),
    calories: Number(r.calories),
    weight: Number(r.weight)
  }));

  return (

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>

      {/* Steps Chart */}
      <div>
        <h3>Steps Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="steps" />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Calories Chart */}
      <div>
        <h3>Calories Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="calories" />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Weight Chart */}
      <div>
        <h3>Weight Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ChartsSection;