import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState, useEffect } from "react";

const searchData = [
  {
    name: "Circles",
    artist: "Mac Miller",
    album: "Circles",
    id: 0,
  },
  {
    name: "Divine",
    artist: "Mac Miller",
    album: "The Divine Feminine",
    id: 1,
  },
  {
    name: "Winds",
    artist: "Mac Miller",
    album: "The Divine Feminine",
    id: 2,
  },
];

const trackListData = [
  {
    name: "8 miles",
    artist: "Eminem",
    album: "8 miles",
    id: 5,
  },
  {
    name: "I'm not the only one",
    artist: "Sam Smith",
    album: "",
    id: 6,
  },
  {
    name: "Rolling in the deep",
    artist: "Adele",
    album: "21",
    id: 7,
  },
];

const playlistData = {
  playlistName: "IvaanGBx",
  tracklist: trackListData,
};

function App() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => setSearchResults(searchData), []);

  const [playlist, setPlaylist] = useState([]);
  useEffect(() => setPlaylist(playlistData), []);

  const addTrack = (track) => {
    setPlaylist((prev) => {
      !prev.tracklist.includes(track) && prev.tracklist.push(track);
      return prev;
    });
  };

  const removeTrack = (track) => {
    setPlaylist((prev) => {
      prev.tracklist = prev.tracklist.filter(
        (prevTrack) => prevTrack.id !== track.id
      );
      return prev;
    });
  };

  return (
    <div>
      <h1>
        Ja <span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlist={playlist}
            onRemove={removeTrack}
            isRemoval={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
