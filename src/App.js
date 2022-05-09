import React, { useEffect } from "react";
import "./CSS/app.css";
import Login from "./Login.js";
import { getToken } from "./logic";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
//import {DataLayerContext} from './DataLayer'
import { useData } from "./DataLayer";



const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token, playlists, discover_weekly }, dispatch] = useData();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";

    const _token = hash.access_token;


    if (_token) {
      spotify.setAccessToken(_token)
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    
    spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

      // fetch(
      //   "https://api.spotify.com/v1/users/{user_id}/playlists"
      // ).then((res) => {
      //   console.log(res);
      // });

    console.log(discover_weekly);

    
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      })
    })

    

    spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    
  }, []);
  //eslint-disable-next-line

  console.log(user);
  console.log(token);

  return (
    <div className="app-main">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App
