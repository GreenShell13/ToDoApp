import hadoopIcon from './assets/icons/hadoop-icon.svg';
import radioactiveFan from './assets/icons/radiocative-fan.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hadoopIcon} className="App-logo" alt="hadoop icon" />
        <img src={radioactiveFan} className="App-logo" alt="radiocative fan" />
      </header>
      <div className="box">
        <div className="box-item box-child">1</div>
        <div className="box-item">2</div>
        <div className="box-clear"></div>
        <div className="box-item">3</div>
      </div>
    </div>
  );
}

export default App;
