import './App.css';
import HomePage from './components/homePage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Eddyville Schedules";
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <title>Eddyville Schedules</title>
        <HomePage/>
      </header>
      
    </div>
  );
}

export default App;
