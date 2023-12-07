import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import { HooksPage } from '../pages/HooksPage';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../login/LoginPage';


function App() {
  return (
    <div className="App"> 
      <div style={{display: 'flex', width: '60%', justifyContent: 'space-between', margin: '50px auto 0'}}>
        <Link to=" /" style={{display: 'block'}}>Home</Link>
        <Link to=" /hooks" style={{display: 'block'}}>Hooks</Link>
        <Link to=" /login" style={{display: 'block'}}>Login</Link>
      </div>  
    <Routes>
      <Route path=" /" element={<HomePage />}></Route>
      <Route path=" /hooks" element={<HooksPage />}></Route>
      <Route path=" /login" element={<LoginPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
