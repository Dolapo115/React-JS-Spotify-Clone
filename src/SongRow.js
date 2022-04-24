import React from 'react';

function SongRow({ track }){

    return(
        <div className = 'songrow-main'>
            <img src = '' alt = '' className = 'songrow-album'/>
            <div className = 'songrow-info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artiste)=> artiste.name).join(',')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )

}

export default SongRow;
