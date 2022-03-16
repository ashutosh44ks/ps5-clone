import { useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import SubDropdownMenu from "./SubDropdownMenu";
import { FaSearch, FaUser } from "react-icons/fa";
import { RiSettings5Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { ImUserCheck } from "react-icons/im";
import { CgUserlane } from "react-icons/cg";
import { AiFillTrophy } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { GiLaurelsTrophy } from "react-icons/gi";
import "./stylesheets/Navbar.css";
//FIGURE OUT HOW TO FIX subDropdown
const Navbar = ({ setTab, userList, setUserList, user }) => {
  useEffect(() => {
    console.log("current user ", user);
    function switchTabs(i) {
      activeNavTab.classList.remove("active");
      navTabs[i].classList.add("active");
      setTab(navTabs[i].innerHTML);
    }
    const navTabs = document.querySelectorAll(".nav-item-tab");
    const activeNavTab = document.querySelector(".active");
    for (let i = 0; i < navTabs.length; i++) {
      navTabs[i].addEventListener("click", () => switchTabs(i));
    }
    const subdropdownBtn = document.querySelector(".sub-dropdown-btn");
    const subdropdownMenu = document.querySelector(".sub-dropdown-menu");
    subdropdownBtn.addEventListener("click", () => {
      subdropdownMenu.classList.toggle("hide");
    });
    return () => {
      for (let i = 0; i < navTabs.length; i++) {
        navTabs[i].removeEventListener("click", () => switchTabs(i));
      }
      subdropdownBtn.removeEventListener("click", () => {
        subdropdownMenu.classList.toggle("hide");
      });
    };
  }, [userList]);

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
          <li className="nav-item dropdown">
            {user.icon}
            <ul className="dropdown-menu hide">
              <li>{user.name}</li>
              <li className="middle-li sub-dropdown-btn">
                <div>
                  <ImUserCheck />
                  Online Status
                </div>
                <div>
                  <GoPrimitiveDot /> <span>{user.mode}</span>
                  <SubDropdownMenu userList={userList} setUserList={setUserList} />
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
                <Link to="/ps5-clone/LogIn">
                  <div>
                    <RiLogoutBoxRLine />
                    Log Out
                  </div>
                </Link>
              </li>
            </ul>
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
