import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <LoginForm />

    <p>
  Don't have an account? 
  <Link to="/register">Register</Link>
    </p>
    </div>
    
  );
}

export default LoginPage;