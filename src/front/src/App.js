import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'

import Home from './pages/home/Home'
import Materials from './pages/materials/Materials'
import Monitor from './pages/Monitor/Monitor'
import { Menu } from './components/common/menu/index'
import PositionBlock from './pages/materials/topics/frontend/css/position/PositionBlock'
import TimedTestBlock from './pages/materials/topics/frontend/js/function/testOfTimed'
import FunctionConstructor from './pages/materials/topics/frontend/js/function/FunctionConstructor'
import Memoization from './pages/materials/topics/frontend/js/function/Memoization'
//import CssBlock from './pages/materials/topics/frontend/css/CssBlock'


function App() {
  const { isAuth } = useSelector(state => state.auth)
  
  return (
    <>
      { isAuth === true && <Menu /> }
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} exact={true} />
          <Route path="monitor-activity" element={<Monitor />} />
          <Route path="/materials/front/css" element={<PositionBlock />} />
          <Route path="/materials/front/js/functions/timed" element={<TimedTestBlock />} />
          <Route path="/materials/front/js/functions/function-constructor" element={<FunctionConstructor />} />
          <Route path="/materials/front/js/functions/memoization" element={<Memoization />} />
        </Routes>
      </div>
    </>
  )
}

export default App
