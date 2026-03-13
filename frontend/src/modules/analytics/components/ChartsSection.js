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

  const chartData = records.slice(0,30).reverse().map(r => ({
    date: new Date(r.date).toLocaleDateString(),
    steps: Number(r.steps),
    calories: Number(r.calories),
    weight: Number(r.weight)
  }));

  return (

    <div className="charts-grid">

      {/* Steps Chart */}
      <div className="chart-card">
        <h3>Steps Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="steps" stroke="#3b82f6" strokeWidth={3} dot={false} animationDuration={1200}/>
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Calories Chart */}
      <div className="chart-card">
        <h3>Calories Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="calories" stroke="#22c55e" strokeWidth={3} dot={false} animationDuration={1200}/>
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Weight Chart */}
      <div className="chart-card">
        <h3>Weight Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#f59e0b" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ChartsSection;