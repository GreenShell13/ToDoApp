import './App.css';
import { Menu } from './components/common/menu';
import Home from './pages/home/Home';
import Materials from './pages/materials/Materials';
import Monitor from './pages/Monitor/Monitor';

function App() {
  let component;
  switch(window.location.pathname)
  {
    case "/":
      component = <Home />;
      break;
    case "/materials": 
      component = <Materials />;
      break;
    case "/monitor-activity":
      component = <Monitor />
      break;
    default:
      break;
  }

  return (
    <>
      <Menu />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
