import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <nav className="navbar">

      <h2 className="logo">Calorie Tracker</h2>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

    </nav>

  );
}

export default Navbar;