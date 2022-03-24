import "./stylesheets/SubDropdownMenu.css";
import { MdOutlineCircle } from "react-icons/md";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { GoPrimitiveDot } from "react-icons/go";
const SubDropdownMenu = ({ userList, setUserList }) => {
  useEffect(() => {
    console.log("loaded");
    userList.forEach((u) => (console.log(u.mode)));
    const LIs = document.querySelectorAll(".sdm-li");
    const activeLI = document.querySelector(".sdm-active");
    if (activeLI === null) LIs[0].classList.add("sdm-active");
    function activator(li) {
      const tempActive = document.querySelector(".sdm-active");
      tempActive.classList.remove("sdm-active");
      li.classList.add("sdm-active");
      userList.forEach((u) => (u.mode = li.innerText));
      setUserList(userList);
    }
    LIs.forEach((li) => {
      li.addEventListener("click", () => activator(li));
    });
    return () => {
      LIs.forEach((li) => {
        li.removeEventListener("click", () => activator(li));
      });
      console.log("unloaded");
    };
  }, [setUserList, userList]);
  return (
    <ul className="sub-dropdown-menu hide">
      <li className="sdm-li">
        <TiTick />
        <GoPrimitiveDot />
        Online
      </li>
      <li className="sdm-li">
        <TiTick />
        <GoPrimitiveDot />
        Busy
      </li>
      <li className="sdm-li">
        <TiTick />
        <MdOutlineCircle />
        Offline
      </li>
    </ul>
  );
};

export default SubDropdownMenu;
