import { useEffect, useState } from "react";
import apiClient from "../../../shared/services/apiClient";

import RecordForm from "../components/RecordForm";
import RecordsTable from "../components/RecordsTable";
import ChartsSection from "../../analytics/components/ChartsSection";
import StatCards from "../components/StatCards";
import Navbar from "../../../shared/components/Navbar";

import "../../../styles/main.css";

function DashboardPage() {

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await apiClient.get("/records");

    const sorted = res.data.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setRecords(sorted);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
<>
  <Navbar />

  <div className="dashboard">

    <StatCards records={records} />

    <RecordForm fetchRecords={fetchRecords} />

    <RecordsTable
      records={records.slice(0,5)}
      fetchRecords={fetchRecords}
    />

    <ChartsSection records={records} />

  </div>

</>
);}

export default DashboardPage;