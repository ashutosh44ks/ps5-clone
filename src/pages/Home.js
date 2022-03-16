import Navbar from "../components/Navbar";
import AppMenu from "../components/AppMenu";
import { useState } from "react";
import "./stylesheets/Home.css";

const Home = ({ userList, setUserList }) => {
  const [activeTab, setActiveTab] = useState("Games");
  return (
    <div id="home-page">
      <Navbar
        setTab={setActiveTab}
        setUserList={setUserList}
        userList={userList}
        user={userList.filter(user=>user.selected===true)[0]}
      />
      {activeTab === "Games" || activeTab === "Media" ? (
        <div>
          <AppMenu tab={activeTab} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
