import React from "react";
import GDriveLogo from "../../media/Google-drive-icon.png";

function index() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={GDriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="search_Bar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header_icons"></div>
    </div>
  );
}

export default index;
