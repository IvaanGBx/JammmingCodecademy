import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState } from "react";

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

const pTracks = [
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

function App() {
  const [searchResults /* setSearchResults */] = useState(searchData);

  const [playlistName, setPlaylistName] = useState(["Playlist Name"]);

  const [playlistTracks, setPlaylistTracks] = useState(pTracks);

  const addTrack = (track) => {
    setPlaylistTracks((prev) =>
      prev.includes(track) ? prev : [...prev, track]
    );
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prev) => prev.filter((t) => t !== track));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
    console.log(playlistName);
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
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            isRemoval={true}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
