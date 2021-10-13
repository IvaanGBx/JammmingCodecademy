import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlist }) {
  const play = playlist !== undefined ? playlist : {};
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={play.tracklist} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
