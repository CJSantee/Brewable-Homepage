import './styles/App.css';
import './styles/App.scss';

import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
    </Routes>
  );
}

export default App;
