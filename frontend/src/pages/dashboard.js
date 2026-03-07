import useRecords from "../hooks/useRecords";
import RecordForm from "../components/RecordForm";
import RecordsList from "../components/RecordsList";
import LineStatChart from "../components/Charts";


function Dashboard() {
  const { sortedRecords, addRecord, deleteRecord } = useRecords();
  const chartConfig = [
  { key: "calories", title: "Calories Over Time", color: "#ff7300" },
  { key: "steps", title: "Steps Over Time", color: "#8884d8" },
  { key: "weight", title: "Weight Over Time", color: "#387908" }
];
  
return (
    <div style={{ padding: "30px" }}>
      <h2>Add Daily Record</h2>

      <RecordForm onSubmit={addRecord} />

      <h2>Your Records</h2>

      <RecordsList
        records={sortedRecords}
        onDelete={deleteRecord}
      />

      <h2>Progress Charts</h2>

      {chartConfig.map((chart) => (
        <LineStatChart
          key={chart.key}
          data={sortedRecords}
          dataKey={chart.key}
          title={chart.title}
          color={chart.color}
        />
      ))}
    </div>
  );
}

export default Dashboard;