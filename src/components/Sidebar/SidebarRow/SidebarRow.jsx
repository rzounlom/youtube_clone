import React from "react";
import "./SidebarRow.scss";

const SidbarRow = ({ title, Icon, isSelected }) => {
  return (
    <div className={`sidebar-row ${isSelected ? "selected" : ""}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidbarRow;
