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
          src="https://lh3.googleusercontent.com/nkDJ2QSKfFjsDqF5ehlXF5qu1y8wNrYz_TFTzL4J_d0xN4I8IsJ7DKNjbi4GnTJWHOpT8Q=s85"
        />
      </div>
    </div>
  );
};

export default Header;
