import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <img src="/Images/logo.png" alt="Logo" className="logo" />
        <Routes>
          {/* Route for the Login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for the Register page */}
          <Route path="/register" element={<Register />} />

          {/* Default Route: Redirect to Login */}
          <Route path="/" element={<Login />} />
        </Routes>

        <div className="form-footer">
          <Routes>
            <Route
              path="/login"
              element={
                <p>
                  Don't have an account? <Link to="/register" style={{ textDecoration: "underline" }}>Register Here</Link>
                </p>
              }
            />
            <Route
              path="/register"
              element={
                <p style={{ marginTop: "-1rem" }}>
                  Already have an account? <Link to="/login" style={{ textDecoration: "underline" }}>Login Here</Link>
                </p>
              }
            />
            <Route
              path="/"
              element={
                <p>
                  Don't have an account? <Link to="/register" style={{ textDecoration: "underline" }}>Register Here</Link>
                </p>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;