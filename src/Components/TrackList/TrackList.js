import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  const tracks = props.tracks;
  const trackList = tracks !== undefined ? tracks : [];
  return (
    <div className="TrackList">
      {trackList.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
        />
      ))}
    </div>
  );
}

export default TrackList;
