import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/:id?" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/user/:id" element={<User />}></Route>
            <Route path="/new-user" element={<NewUser />}></Route>
            <Route path="/new-product" element={<NewProduct />}></Route>
            <Route path="/movies" element={<ProductList />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
