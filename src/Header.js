import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {Avatar} from "@material-ui/core";
import  {useData} from './DataLayer'


function Header(){

    const [{user}, dispatch] = useData()

    return (
      <div className="header-main">
        <div className="header-left">
          <SearchIcon />
          <input
            className="input-bar"
            placeholder="search for artistes, songs or titles"
            type="text"
          />
        </div>
        <div className="header-right">
          {/* <Avatar src = {user?.images[0].Url} alt = ''/> */}
          <Avatar src={user?.images[0].url} alt="" className = 'profile-icon' size = 'small'/>
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    );

}

export default Header