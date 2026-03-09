import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./modules/auth/pages/LoginPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import DashboardPage from "./modules/records/pages/DashboardPage";

import ProtectedRoute from "./shared/routes/ProtectedRoute";

function App() {

  return (

    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;