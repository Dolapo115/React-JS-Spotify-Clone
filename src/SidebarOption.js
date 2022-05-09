import React from 'react';


function SidebarOption({ option, Icon }) {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-icon" />}
      {Icon ? <h5>{option}</h5> : <p>{option}</p>}
    </div>
  );
}


export default SidebarOption;