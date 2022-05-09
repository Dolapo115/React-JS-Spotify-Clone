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

    const playPlaylist = (id) => {
      spotify
        .play({
          context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
        })
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };

    const playSong = (id) => {
      spotify
        .play({
          uris: [`spotify:track:${id}`],
        })
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };


    return (
      <div className="body-main">
        <Header spotify={spotify} />
        <div className="body-info">
          <img src = {user?.images[0].url} alt = '' className = 'user-image'></img>

          <div className="body-infotext">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description || 'Your weekly mixtape of fresh music. Enjoy new music, picked just for you. Updates every Monday'}</p>
          </div>
        </div>
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" onClick = {playPlaylist}/>
          <FavoriteIcon className="favorite-icon" fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="body-songs">
          {discover_weekly?.tracks.items.map((song) => (
            <SongRow track={song.track} playSong = {playSong}/>
          ))}
        </div>
      </div>
    );

}

export default Body;