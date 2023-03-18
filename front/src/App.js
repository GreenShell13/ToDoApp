import './App.css';
import { Menu } from './components/common/menu';

function App() {
  return (
    <div>
      <div className="box">
        <div className="box-item box-child">1</div>
        <div className="box-item">2</div>
        <div className="box-clear"></div>
        <div className="box-item">3</div>
      </div>
      <Menu />
    </div>
  );
}

export default App;
