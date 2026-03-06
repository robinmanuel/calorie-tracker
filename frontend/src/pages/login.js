import { useState } from "react";
import axios from "axios";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };

      const res = await axios.post(
        "http://localhost:5000/auth/login",
        body
      );

      localStorage.setItem("token", res.data.token);

      alert("Login successful");
    } catch (err) {
      console.error(err.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;