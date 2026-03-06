import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <h1>Calorie & Expense Tracker</h1>

      <Register />
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;