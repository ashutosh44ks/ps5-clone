import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import SubDropdownMenu from "../components/SubDropdownMenu";
import "./stylesheets/Login.css";
import { GiConsoleController } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

// Tasks:
// User k niche <emnu icon/> Options lana hai
// Bottom pe ShutDown Icon aur bottom right pe x to select
// Add User Page banana hai

const Login = ({ userList, setUserList }) => {
  let navigate = useNavigate();
  useEffect(() => {
    const menu = document.querySelector(".sub-dropdown-menu");
    document.addEventListener("click", hideMenu);
    function hideMenu() {
      menu.style.display = "none";
    }
    function contextMenu(e) {
      e.preventDefault();
      if (menu.style.display === "block") hideMenu();
      else {
        menu.style.display = "block";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
      }
    }
    const users = document.querySelectorAll(".login-user");
    const hover = document.querySelectorAll(".login-hover");
    for (let i = 0; i < users.length; i++) {
      users[i].addEventListener("onmouseover", () => {
        hover[i].style.color = "white";
      });
      users[i].addEventListener("onmouseout", () => {
        hover[i].style.color = "transparent";
      });
      if (users[i].classList.contains("login-user-selectable"))
        users[i].addEventListener("contextmenu", contextMenu);
    }
    return () => {
      document.removeEventListener("click", hideMenu);
      for (let i = 0; i < users.length; i++) {
        users[i].removeEventListener("onmouseover", () => {
          hover[i].style.color = "white";
        });
        users[i].removeEventListener("onmouseover", () => {
          hover[i].style.color = "transparent";
        });
        if (users[i].classList.contains("login-user-selectable"))
          users[i].removeEventListener("contextmenu", contextMenu);
      }
    };
  });
  return (
    <div id="login-page">
      <Clock
        className="login-clock dull-text"
        format={"HH:mm A"}
        ticking={true}
        timezone={"Asia/Kolkata"}
      />

      <div id="login-container">
        <div id="login-head" className="bright-text center-text">
          Welcome Back to PlayStation
        </div>
        <div className="dull-text center-text">
          Who's using this controller?
        </div>

        <div id="login-users-container">
          <div
            className="login-user-container"
            onClick={() => navigate("/ps5-clone/AddNewUser")}
          >
            <div className="login-hover login-controller">
              <GiConsoleController />
            </div>
            <div className="login-user login-user-add">
              <FaPlus />
            </div>
            <div className="login-details center-text bright-text">
              Add User
            </div>
          </div>
          {userList.map((user) => (
            <div
              className="login-user-container"
              key={user.id}
              onClick={() => {
                userList.forEach((u) => {
                  if (u.id === user.id) u.selected = !user.selected;
                });
                setUserList(userList);
                navigate("/ps5-clone/Home");
              }}
            >
              <div className="login-hover login-controller">
                <GiConsoleController />
              </div>
              <div className="login-user login-user-selectable">
                {user.icon}
              </div>
              <div className="login-details center-text bright-text">
                {user.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SubDropdownMenu userList={userList} setUserList={setUserList} />
    </div>
  );
};

export default Login;
