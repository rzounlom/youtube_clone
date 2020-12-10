import React from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallicon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {" "}
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube Logo"
        ></img>
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" /> <SearchIcon />
      </div>

      <div className="header__right">
        <VideoCallicon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="profile pic"
          src="https://lh3.googleusercontent.com/JE2yJSbCr1wgziYj698Xyxy8FLUYe0jOnzmorz2e8I9Ek2CuMvxg6bKDlM6FUR3Of83hEw=s85"
        />
      </div>
    </div>
  );
};

export default Header;
