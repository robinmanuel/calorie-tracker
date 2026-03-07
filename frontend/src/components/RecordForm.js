import { useState } from "react";

function RecordForm({ onSubmit }) {
  const [form, setForm] = useState({
    date: "",
    calories: "",
    expenditure: "",
    steps: "",
    weight: ""
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      date: "",
      calories: "",
      expenditure: "",
      steps: "",
      weight: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="date" value={form.date} onChange={onChange} required />
      <input name="calories" placeholder="Calories" value={form.calories} onChange={onChange} />
      <input name="expenditure" placeholder="Expense" value={form.expenditure} onChange={onChange} />
      <input name="steps" placeholder="Steps" value={form.steps} onChange={onChange} />
      <input name="weight" placeholder="Weight" value={form.weight} onChange={onChange} />
      <button>Add Record</button>
    </form>
  );
}

export default RecordForm;