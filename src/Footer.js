import React, { useState } from 'react';
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


function Footer(){

    const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue);
  };

  let media = true;
  const query = window.matchMedia("(max-width: 400px)");

  query.matches ? (media = false) : (media = true);

    return (
      <div className="footer-main">
        <div className="footer-left">
          <img
            src="https://i.discogs.com/E7EMKeLHWkJwrUuDuMLZRlVHh9mt7_yANYsfxAeFdpo/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0Mzg4/Ny0xNjAzNDIzODE1/LTIyNDIuanBlZw.jpeg"
            className="album-image"
            alt=""
          />
          <div className="song-info">
            <h4 className="song-title">Yeah!</h4>
            <p className="artiste">Usher</p>
          </div>
        </div>
        <div className="footer-center">
          <ShuffleIcon className="footer-green" />
          <SkipPreviousIcon className="footer-icon" />
          <PlayCircleOutlineIcon
            className=""
            fontSize="large"
            className="play-button"
          />
          <SkipNextIcon className="footer-icon" />
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