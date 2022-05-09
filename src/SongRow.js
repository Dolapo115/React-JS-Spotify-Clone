import React from 'react';

function SongRow({ track, playSong }){

    return(
        <div className = 'songrow-main' onClick = {playSong(track.id)}>
            <img src = {track.album.images[0].url} alt = '' className = 'songrow-album'/>
            <div className = 'songrow-info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=> artist.name).join(', ')} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )

}

export default SongRow;
