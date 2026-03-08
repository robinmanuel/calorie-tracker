import { useEffect, useState } from "react";
import apiClient from "../../../shared/services/apiClient";

import RecordForm from "../components/RecordForm";
import RecordsTable from "../components/RecordsTable";
import ChartsSection from "../../analytics/components/ChartsSection";
import StatCards from "../components/StatCards";
import Navbar from "../../../shared/components/Navbar";

import "../styles/dashboard.css";

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

      <h1 className="dashboard-title">Dashboard</h1>

      <StatCards records={records} />

      <div className="dashboard-grid">

        <div>
          <RecordForm fetchRecords={fetchRecords}/>
          <RecordsTable records={records} fetchRecords={fetchRecords}/>
        </div>

        <ChartsSection records={records}/>

      </div>

    </div>
  </>

);}

export default DashboardPage;