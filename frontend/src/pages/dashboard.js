import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    try {
      const res = await axios.get("http://localhost:5000/records", {
        headers: { token: localStorage.token }
      });

      setRecords(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div>
      <h2>Your Records</h2>

      {records.map((record) => (
        <div key={record.record_id}>
          <p>Type: {record.type}</p>
          <p>Value: {record.value}</p>
          <p>Date: {record.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;