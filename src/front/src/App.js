import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'

import Home from './pages/home/Home'
import Materials from './pages/materials/Materials'
import Monitor from './pages/Monitor/Monitor'
import { Menu } from './components/common/menu/index'


function App() {
  const { isAuth } = useSelector(state => state.auth)
  
  return (
    <>
      { isAuth === true && <Menu /> }
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="monitor-activity" element={<Monitor />} />
        </Routes>
      </div>
    </>
  )
}

export default App
