import React from 'react'
import Header from './Header'
import {useData} from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// import {Avatar} from "@material-ui/core";
import SongRow from './SongRow'

function Body( {spotify} ){

    const [{discover_weekly, user}, dispatch] = useData()

    return (
      <div className="body-main">
        <Header spotify={spotify} />
        <div className="body-info">
          <img src = {user?.images[0].url} alt = '' className = 'user-image'></img>

          <div className="body-infotext">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon className="favorite-icon" fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="body_songs">
          {discover_weekly?.tracks.items.map((song) => (
            <SongRow track={song.track} />
          ))}
        </div>
      </div>
    );

}

export default Body;