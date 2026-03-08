import { useState } from "react";
import apiClient from "../../../shared/services/apiClient";

function RecordForm({ fetchRecords }) {

  const [form, setForm] = useState({
    steps: "",
    calories: "",
    weight: "",
    date: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await apiClient.post("/records", form);

    setForm({
      steps: "",
      calories: "",
      weight: "",
      date: ""
    });

    fetchRecords();
  };

  return (

    <form onSubmit={handleSubmit}>

      <input name="steps" placeholder="Steps" onChange={handleChange} />

      <input name="calories" placeholder="Calories" onChange={handleChange} />

      <input name="weight" placeholder="Weight" onChange={handleChange} />

      <input type="date" name="date" onChange={handleChange} />

      <button>Add Record</button>

    </form>

  );
}

export default RecordForm;