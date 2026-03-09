import { useState } from "react";
import apiClient from "../../../shared/services/apiClient";

function RecordForm({ fetchRecords }) {

  const [form, setForm] = useState({
    steps: "",
    calories: "",
    weight: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent empty submission
    if (!form.date || !form.steps || !form.calories || !form.weight) {
      alert("Please fill all fields");
      return;
    }

    const payload = {
      date: form.date,
      steps: Number(form.steps),
      calories: Number(form.calories),
      weight: Number(form.weight)
    };

    await apiClient.post("/records", payload);

    setForm({
      steps: "",
      calories: "",
      weight: "",
      date: ""
    });

    fetchRecords();
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        type="number"
        name="steps"
        placeholder="Steps"
        value={form.steps}
        onChange={handleChange}
      />

      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={form.calories}
        onChange={handleChange}
      />

      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={form.weight}
        onChange={handleChange}
      />

      <button type="submit">Add</button>

    </form>
  );
}

export default RecordForm;