import React from "react";
import "./SidebarRow.scss";

const SidbarRow = ({ title, Icon }) => {
  return (
    <div className="sidebar-row">
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidbarRow;
