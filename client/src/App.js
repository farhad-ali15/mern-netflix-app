import "./App.scss";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(true);

  function redirect(to) {
    return <Navigate to={to} replace />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/:id?"
            element={user ? <Home /> : redirect("/register")}
          ></Route>
          <Route
            path="/register"
            element={!user ? <Register /> : redirect("/")}
          ></Route>
          <Route
            path="/login"
            element={!user ? <Login /> : redirect("/register")}
          ></Route>
          {user && (
            <>
              <Route path="/watch" element={<Watch />}></Route>
              <Route path="/movies" element={<Home type="movies" />}></Route>
              <Route path="/series" element={<Home type="series" />}></Route>)
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
