import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";

import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./pages/newMovie/NewMovie";
import ListedMovies from "./pages/listedMovies/ListedMovies";
import List from "./pages/list/List";

function App() {
  const { user } = useContext(AuthContext);
  function redirect(to) {
    return <Navigate to={to} replace />;
  }
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          {user && (
            <Routes>
              <Route path="/:id?" element={<Home />}></Route>
              <Route
                path="/login"
                element={user ? redirect("/home") : <Login />}
              ></Route>
              <Route path="/users" element={<UserList />}></Route>
              <Route path="/user/:id" element={<User />}></Route>
              <Route path="/new-user" element={<NewUser />}></Route>
              <Route path="/movies" element={<MovieList />}></Route>
              <Route path="/movie/:movieId" element={<Movie />}></Route>
              <Route path="/add-movie" element={<NewMovie />}></Route>
              <Route path="/lists/" element={<ListedMovies />}></Route>
              <Route path="/list/:listId" element={<List />}></Route>
              {/* <Route path="/new-list" element={<NewList />}></Route> */}
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
