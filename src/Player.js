import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player( {spotify} ){
    let media = true
    const query = window.matchMedia("(max-width: 400px)")

    query.matches ? media = false : media = true;

    return(
        <div className = 'player-main'>
            <div className = 'player-body'>
                {media && <Sidebar />}
                <Body spotify = {spotify}/>
            </div>

            <Footer />
        </div>
    )

}

export default Player