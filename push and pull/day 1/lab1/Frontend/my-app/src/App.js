import logo from './logo.svg';
import './App.css';
import Notification from './notification';
import LongNotification from './longNotifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notification/>
        {/* <LongNotification /> */}
      </header>
    </div>
  );
}

export default App;
