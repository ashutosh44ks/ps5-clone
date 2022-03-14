import { useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import { FaSearch, FaUser } from "react-icons/fa";
import { RiSettings5Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { ImUserCheck } from "react-icons/im";
import { CgUserlane } from "react-icons/cg";
import { AiFillTrophy } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { GiLaurelsTrophy } from "react-icons/gi";
import "./stylesheets/Navbar.css";

const Navbar = ({ setTab, user, userList }) => {
  useEffect(() => {
    const navTabs = document.querySelectorAll(".nav-item-tab");
    const activeNavTab = document.querySelector(".active");
    for (let i = 0; i < 1; i++) {
      navTabs[i].addEventListener("click", () => {
        activeNavTab.classList.remove("active");
        navTabs[i].classList.add("active");
        setTab(navTabs[i].innerHTML);
      });
    }
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdown.addEventListener("click", () =>
      dropdownMenu.classList.toggle("hide")
    );
  });

  return (
    <div>
      <ul id="navbar">
        <div id="nav-left">
          <li className="nav-item nav-item-tab active">Games</li>
          <li className="nav-item nav-item-tab ">Media</li>
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
          <li className="nav-item dropdown">{userList[user].userIcon}</li>
          <ul className="dropdown-menu hide">
            <li>{userList[user].userName}</li>
            <li className="middle-li">
              <div>
                <ImUserCheck />
                Online Status
              </div>
              <div>
                <GoPrimitiveDot /> <span>Online</span>
                {/* Another Dropdown */}
              </div>
            </li>
            <li className="middle-li">
              <div>
                <CgUserlane />
                Profile
                {/* New Page */}
              </div>
            </li>
            <li className="middle-li">
              <div>
                <AiFillTrophy /> Trophies
                {/* New Page */}
              </div>
              <div>
                <GiLaurelsTrophy /> <span>0</span>
              </div>
            </li>
            <li className="middle-li">
              <div>
                <FaUser />
                Switch User
                {/* Modal of Login */}
              </div>
            </li>
            <li>
              <div>
                <RiLogoutBoxRLine />
                Log Out
                {/* Link to Login */}
              </div>
            </li>
          </ul>
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
