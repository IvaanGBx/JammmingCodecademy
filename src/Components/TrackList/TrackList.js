import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList({ tracks }) {
  const trackList = tracks !== undefined ? tracks : [];
  return (
    <div className="TrackList">
      {trackList.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default TrackList;
