import React from "react";
import "./Track.css";

function Track(props) {
  const isRemoval = props.isRemoval;
  const track = props.track;

  const addTrack = () => {
    props.onAdd(track);
  };

  const removeTrack = () => {
    props.onRemove(track);
  };

  const renderAction = () => {
    return isRemoval ? "-" : "+";
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track && track.name}</h3>
        <p>
          {track && track.artist} | {track && track.album}
        </p>
      </div>
      <button
        className="Track-action"
        onClick={!isRemoval ? addTrack : removeTrack}
      >
        {renderAction()}
      </button>
    </div>
  );
}

export default Track;
