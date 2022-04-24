import React from 'react';


function SidebarOption({title, Icon}) {

    return ( 
        <div className = 'sidebar-option'>
            {Icon && <Icon className = 'sidebar-icon'/>}
            {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    );

}


export default SidebarOption;