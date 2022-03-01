import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Navbar fixed="top"/>
      <Main />
      {/* <Header /> */}
    </div>
  );
}

export default App;
