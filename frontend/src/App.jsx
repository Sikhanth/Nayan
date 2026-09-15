import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WhyNayan from "./pages/WhyNayan";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Public Pages */}
        <Route path="/whynayan" element={<WhyNayan />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;