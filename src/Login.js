import React from 'react';
import {loginUrl} from './logic'

function Login(){
    return (
      <div className="login-main">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          className="logo"
          alt="spotify-logo"
        />
        <a href = { loginUrl } className = 'login-button'>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login;