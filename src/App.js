
import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from "./components/Intro"
import Action from "./components/Action"
import Anime from "./components/Anime"
function App() {
  return (
    <div>
      {/* Intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro section */}

      {/* Action */}
      <div className='action'>
        <div>
          <Action/>
        </div>
      </div>
      {/*  Action */}
      
      {/* Anime */}
      <Anime/>
      {/* Anime */}
    </div>
  );
}

export default App;
