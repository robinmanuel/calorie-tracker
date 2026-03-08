import { useState } from "react";
import apiClient from "../../../shared/services/apiClient";

function LoginForm() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setForm({...form,[e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await apiClient.post("/auth/login", form);

    localStorage.setItem("token", res.data.token);

    window.location = "/dashboard";
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">Login</button>

    </form>
  );
}

export default LoginForm;