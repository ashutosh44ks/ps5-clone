import Navbar from "../components/Navbar";
import AppMenu from "../components/AppMenu";
import { useState } from "react";
import './stylesheets/Home.css'

const Home = ( {user, userList} ) => {
  const [activeTab, setActiveTab] = useState("Games");
  return (
    <div id="home-page">
      <Navbar tab={activeTab} setTab={setActiveTab} user={user} userList={userList}/>
      {activeTab === "Games" || activeTab === "Media" ? (
        <div>
          <AppMenu tab={activeTab} />
        </div>
      ) : (
        <div>This needs a separate component</div>
      )}
    </div>
  );
};

export default Home;
