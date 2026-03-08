import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../shared/services/apiClient";

function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {

      const res = await apiClient.post("/auth/register", form);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Registration failed");
    }
  };

  return (

    <div className="auth-container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  );
}

export default RegisterPage;