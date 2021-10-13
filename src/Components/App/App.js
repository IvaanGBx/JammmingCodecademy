import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const searchResults = [
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

const playlist = {
  playlistName: "IvaanGBx",
  tracklist: searchResults,
};

function App() {
  return (
    <div>
      <h1>
        Ja <span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist playlist={playlist} />
        </div>
      </div>
    </div>
  );
}

export default App;
