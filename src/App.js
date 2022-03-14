import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { FaUserSecret, FaUserAstronaut, FaPlus } from "react-icons/fa";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import AppPage from "./pages/AppPage";
function App() {
  const [user, setUser] = useState(0);

  //setter for later adding users via AddUser
  const [userList, setUserList] = useState([
    { userID: 0, userIcon: <FaPlus />, userName: "Add User" },
    { userID: 1, userIcon: <FaUserAstronaut />, userName: "AstroKing42" },
    { userID: 2, userIcon: <FaUserSecret />, userName: "CoolAgent007" },
  ]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          index
          element={<Navigate replace to="/ps5-clone/Login" />}
        ></Route>
        <Route
          path="/ps5-clone/Login"
          element={<Login setUser={setUser} userList={userList}/>}
        ></Route>
        <Route path="/ps5-clone/Home" element={<Home user={user} userList={userList} />}></Route>
        <Route path="/ps5-clone/Search" element={<Search />}></Route>
        <Route path="/ps5-clone/Settings" element={<Settings />}></Route>
        <Route path="/ps5-clone/AppPage" element={<AppPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
