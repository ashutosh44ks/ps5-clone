import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import { GiConsoleController } from "react-icons/gi";
import "./stylesheets/Login.css";

const Login = ({ setUser, userList }) => {
  let navigate = useNavigate();
  useEffect(() => {
    const users = document.querySelectorAll(".login-user");
    const hover = document.querySelectorAll(".login-hover");
    for (let i = 0; i < 3; i++) {
      users[i].onmouseover = function () {
        hover[i].style.color = "white";
      };
      users[i].onmouseout = function () {
        hover[i].style.color = "transparent";
      };
      if (i >= 1) {
        users[i].addEventListener("click", () => {
          setUser(i);
          navigate("/ps5-clone/Home");
        });
      }
    }
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
          {userList.map((user) => (
            <div className="login-user-container" key={user.userID}>
              <div className="login-hover login-controller">
                <GiConsoleController />
              </div>
              <div
                className={
                  user.userID === 0 ? "login-user login-user-add" : "login-user"
                }
              >
                {user.userIcon}
              </div>
              <div className="login-details center-text bright-text">
                {user.userName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
