import React from "react";
import "./Sidebar.scss";

import SidebarRow from "./SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

const Header = () => {
  return (
    <div className="sidebar">
      Sidebar
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
    </div>
  );
};

export default Header;
