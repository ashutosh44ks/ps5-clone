import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { FaUserSecret, FaUserAstronaut } from "react-icons/fa";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import AppPage from "./pages/AppPage";
import Temp from "./pages/Temp";
function App() {
  const [userList, setUserList] = useState([
    {
      id: 0,
      icon: <FaUserAstronaut />,
      name: "AstroKing42",
      selected: false,
      mode: "Online",
    },
    {
      id: 1,
      icon: <FaUserSecret />,
      name: "CoolAgent007",
      selected: false,
      mode: "Online",
    },
  ]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/ps5-clone/Login" />} />
        <Route
          path="/ps5-clone/Login"
          element={<Login userList={userList} setUserList={setUserList} />}
        />
        <Route
          path="/ps5-clone/Home"
          element={<Home userList={userList} setUserList={setUserList} />}
        />
        <Route path="/ps5-clone/Search" element={<Search />} />
        <Route path="/ps5-clone/Settings" element={<Settings />} />
        <Route path="/ps5-clone/AppPage" element={<AppPage />} />
        <Route path="*" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
