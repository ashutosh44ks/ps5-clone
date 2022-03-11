import AppItem from "./AppItem";
import AppDescription from "./AppDescription";
import { useState, useEffect } from "react";
import {
  BsFillBagPlusFill,
  BsFillGrid3X2GapFill,
  BsYoutube,
  BsTwitch,
  BsFillGridFill,
} from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { RiGameFill, RiNetflixFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { MdOutlinePermMedia, MdMonitor } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { SiPrime } from "react-icons/si";

//The App boxes
const AppMenu = ({ tab }) => {
  const [gameList, setGameList] = useState([
    { id: 0, icon: <BsFillBagPlusFill />, name: "PS Store", type: "sys" },
    { id: 1, icon: <IoRocketSharp />, name: "Explore", type: "sys" },
    { id: 2, icon: <RiGameFill />, name: "AstroBoy", type: "app" },
    { id: 3, icon: <TiPlus />, name: "PS Plus", type: "sys" },
    { id: 4, icon: <MdOutlinePermMedia />, name: "Gallery", type: "sys" },
    { id: 5, icon: <GiConsoleController />, name: "Remote Play", type: "sys" },
    { id: 6, icon: <BsFillGrid3X2GapFill />, name: "All Games", type: "sys" },
  ]);
  const [mediaList, setMediaList] = useState([
    { id: 0, icon: <BsFillGridFill />, name: "All Apps", type: "sys" },
    { id: 1, icon: <MdMonitor />, name: "TV & Video", type: "sys" },
    { id: 2, icon: <BsYoutube />, name: "Youtube", type: "app" },
    { id: 3, icon: <BsTwitch />, name: "Twitch", type: "app" },
    { id: 4, icon: <RiNetflixFill />, name: "Netflix", type: "app" },
    { id: 5, icon: <SiPrime />, name: "Prime", type: "app" },
    { id: 6, icon: <BsFillGrid3X2GapFill />, name: "App Library", type: "sys" },
  ]);
  const [currentItem, setCurrentItem] = useState(-1);
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
      item[i].addEventListener("click", () => {
        setCurrentItem(i);
      });
    }
  }, [tab]);
  return (
    <>
      <div id="app-menu">
        {tab === "Games"
          ? gameList.map((item) => <AppItem key={item.id} item={item} />)
          : mediaList.map((item) => <AppItem key={item.id} item={item} />)}
      </div>
      {tab === "Games" ? (
        <AppDescription item={gameList[currentItem]} tab={tab} />
      ) : (
        <AppDescription item={mediaList[currentItem]} tab={tab} />
      )}
    </>
  );
};

export default AppMenu;
