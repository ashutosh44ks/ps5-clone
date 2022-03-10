import AppItem from "./AppItem";
import AppDescription from "./AppDescription";
import { useState, useEffect } from "react";
import { BsFillBagPlusFill, BsFillGrid3X2GapFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { RiGameFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { MdOutlinePermMedia } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";

//The App boxes
const AppMenu = ({ tab, setTab }) => {
  const [gameList, setGameList] = useState([
    { id: 0, icon: <BsFillBagPlusFill />, name: "PS Store" },
    { id: 1, icon: <IoRocketSharp />, name: "Explore" },
    { id: 2, icon: <RiGameFill />, name: "AstroBoy" },
    { id: 3, icon: <TiPlus />, name: "PS Plus" },
    { id: 4, icon: <MdOutlinePermMedia />, name: "Gallery" },
    { id: 5, icon: <GiConsoleController />, name: "Remote Play" },
    { id: 6, icon: <BsFillGrid3X2GapFill />, name: "All Games" },
  ]);
  const [mediaList, setMediaList] = useState([
    { id: 0, icon: <BsFillBagPlusFill />, name: "PS Store" },
    { id: 1, icon: <IoRocketSharp />, name: "Explore" },
    { id: 2, icon: <RiGameFill />, name: "AstroBoy" },
    { id: 3, icon: <TiPlus />, name: "PS Plus" },
    { id: 4, icon: <MdOutlinePermMedia />, name: "Gallery" },
  ]);
  useEffect(() => {
    const item = document.querySelectorAll(".app-item");
    const hover = document.querySelectorAll(".app-item-hover");
    for (let i = 0; i < 7; i++) {
      item[i].onmouseover = function () {
        hover[i].style.color = "white";
      };
      item[i].onmouseout = function () {
        hover[i].style.color = "transparent";
      };
    }
  }, [tab]);
  return (
    <>
      <div id="app-menu">
        {tab === "Games"
          ? gameList.map((item) => <AppItem key={item.id} item={item} />)
          : mediaList.map((item) => <AppItem key={item.id} item={item} />)}
      </div>
      <AppDescription />
    </>
  );
};

export default AppMenu;
