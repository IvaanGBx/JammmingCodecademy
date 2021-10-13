import React, { useState } from "react";
import "./Track.css";

function Track({ track }) {
  const [isRemoval] = useState(false);

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
      <button className="Track-action">{renderAction()}</button>
    </div>
  );
}

export default Track;
