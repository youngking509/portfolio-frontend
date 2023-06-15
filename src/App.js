import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import ReactPlayer from "react-player"


function App() {
  return (
    <div className="App">
      <Navbar fixed="top"/>
      <Main />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <div>
        <ReactPlayer
          url="https://youtube.com/shorts/6DN7MnbmLHo?feature=share"
          // playing
          // width='100%'
          // height='100%'
          
        />
      </div>
      <div>
        <ReactPlayer
          url="https://youtu.be/X4O1X_6GMKM"
          // playing
          // width='100%'
          // height='100%'
          
        />
      </div>
    </div>
    
  );
}

export default App;
