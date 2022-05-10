import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Navbar fixed="top"/>
      <Main />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
