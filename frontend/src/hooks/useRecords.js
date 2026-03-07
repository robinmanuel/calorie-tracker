import { useEffect, useState } from "react";
import { fetchRecords, createRecord, removeRecord } from "../api/recordsApi";

function useRecords() {
  const [records, setRecords] = useState([]);

  const loadRecords = async () => {
    const data = await fetchRecords();
    setRecords(data);
  };

  const addRecord = async (form) => {
    await createRecord(form);
    loadRecords();
  };

  const deleteRecord = async (id) => {
    await removeRecord(id);
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const sortedRecords = [...records].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return { sortedRecords, addRecord, deleteRecord };
}

export default useRecords;