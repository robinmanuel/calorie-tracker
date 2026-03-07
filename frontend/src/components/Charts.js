import {LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid} from "recharts";

function LineStatChart({ data, dataKey, title, color }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>{title}</h3>

      <LineChart width={700} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey={dataKey} stroke={color} />
      </LineChart>
    </div>
  );
}

export default LineStatChart;