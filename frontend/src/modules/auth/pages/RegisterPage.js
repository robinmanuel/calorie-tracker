import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../shared/services/apiClient";
import { Link } from "react-router-dom";

function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await apiClient.post("/auth/register", form);

      // Ensure token exists before saving
      if (res.data && res.data.token) {

        localStorage.removeItem("token");   // clear any old/bad token
        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");

      } else {
        alert("Registration succeeded");
      }

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
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>

      </form>

      <p>
  Already have an account? 
  <Link to="/login">Login</Link>
    </p>

    </div>

  );
}

export default RegisterPage;