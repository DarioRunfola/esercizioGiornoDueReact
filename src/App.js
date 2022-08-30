import 'bootstrap/dist/css/bootstrap.min.css'; // importa la versione mimifacta
import './App.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';




function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
