import React, { useState, useEffect } from 'react';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useData } from "./DataLayer";



function Footer({spotify}){

    const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue);
  };

  let media = true;
  const query = window.matchMedia("(max-width: 400px)");

  query.matches ? (media = false) : (media = true);

  const [{ token, item, playing }, dispatch] = useData();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };


    return (
      <div className="footer-main">
        <div className="footer-left">
          <img src={item?.album.images[0].url} className="album-image" alt="" />
          {item ? (
            <div className="song-info">
              <h4 className="song-title">{item.name}</h4>
              <p className="artiste">
                {item.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          ) : (
            <div className="song-info">
              <h4 className = 'song-title'>No song is playing</h4>
              <p className = 'artiste'>...</p>
            </div>
          )}
        </div>
        <div className="footer-center">
          <ShuffleIcon className="footer-green" />
          <SkipPreviousIcon className="footer-icon" onClick= {skipNext} />
          <PlayCircleOutlineIcon
            className=""
            fontSize="large"
            className="play-button"
            onClick = {handlePlayPause}
          />
          <SkipNextIcon className="footer-icon" onClick = {skipPrevious} />
          <RepeatIcon className="footer-green" />
        </div>
        {media && (
          <div className="footer-right">
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeDown />
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange}
                size="small"
              />
              <VolumeUp />
            </Stack>
          </div>
        )}
      </div>
    );

}

export default Footer