import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  const playlistTracks =
    props.playlistTracks !== undefined ? props.playlistTracks : {};

  const handleChange = ({ target }) => {
    props.onNameChange(target.value);
  };

  return (
    <div className="Playlist">
      <input onChange={handleChange} value={props.playlistName} minLength="2" />
      <TrackList
        tracks={playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
