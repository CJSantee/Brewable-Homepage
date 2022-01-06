import './styles/App.css';
import './styles/App.scss';

import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
