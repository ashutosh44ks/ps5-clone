import AppItem from "./AppItem";
import AppDescription from "./AppDescription";
import { useState, useEffect } from "react";
import { BsFillBagPlusFill, BsFillGrid3X2GapFill, BsYoutube, BsTwitch, BsFillGridFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { RiGameFill, RiNetflixFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { MdOutlinePermMedia, MdMonitor } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { SiPrime } from "react-icons/si";

//The App boxes
const AppMenu = ({ tab }) => {
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
    { id: 0, icon: <BsFillGridFill />, name: "All Apps" },
    { id: 1, icon: <MdMonitor />, name: "TV & Video" },
    { id: 2, icon: <BsYoutube />, name: "Youtube" },
    { id: 3, icon: <BsTwitch />, name: "Twitch" },
    { id: 4, icon: <RiNetflixFill />, name: "Netflix" },
    { id: 5, icon: <SiPrime />, name: "Prime" },
    { id: 6, icon: <BsFillGrid3X2GapFill />, name: "App Library" },
  ]);
  useEffect(() => {
    const item = document.querySelectorAll(".app-item");
    const hover = document.querySelectorAll(".app-item-hover");
    for (let i = 0; i < item.length; i++) {
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
