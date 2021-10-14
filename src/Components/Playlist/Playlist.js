import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  const play = props.playlist !== undefined ? props.playlist : {};
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList
        tracks={play.tracklist}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
