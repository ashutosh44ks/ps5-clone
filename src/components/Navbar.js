import { useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import { FaSearch } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";

import "./stylesheets/Navbar.css";

const Navbar = ({ setTab, user, userList }) => {
  useEffect(() => {
    const navBtns = document.querySelectorAll(".nav-item");
    const activeNavBtn = document.querySelector(".active");
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].addEventListener("click", () => {
        activeNavBtn.classList.remove("active");
        navBtns[i].classList.add("active");
        setTab(navBtns[i].innerHTML);
      });
    }
  });

  return (
    <div>
      <ul id="navbar">
        <div id="nav-left">
          <li className="nav-item active">Games</li>
          <li className="nav-item">Media</li>
        </div>
        <div id="nav-right">
          <li className="nav-item">
            <Link to="/ps5-clone/Search">
              <FaSearch />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ps5-clone/Settings">
            <RiSettings5Fill />
            </Link>
          </li>
          <li className="nav-item">
            {userList[user].userIcon}
            {/*Open DropDown*/}
          </li>
          <li className="nav-item">
            <Clock
              format={"HH:mm A"}
              ticking={true}
              timezone={"Asia/Kolkata"}
            />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
