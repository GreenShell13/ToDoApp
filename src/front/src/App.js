import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Materials from './pages/materials/Materials';
import Monitor from './pages/Monitor/Monitor';

function App() {
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="monitor-activity" element={<Monitor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
