import './App.css';
import GetPlaylist from './pages/SpotifyGetPlaylists';
import Header from '../src/components/Header.js'
import Footer from '../src/components/Footer.js'
import Login from './pages/Login'
import SpotifyGetPlaylists from './pages/SpotifyGetPlaylists';

const CLIENT_ID = "f0fa87358a7141a2bac1091e55d80a04";
const CLIENT_SECRET = "";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <br />
      <SpotifyGetPlaylists />
      <br />
      <Footer />
    </div>
  );
}

export default App;
