import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Messages from './pages/Messages/Messages';
import Sell from './pages/Sell/Sell';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
