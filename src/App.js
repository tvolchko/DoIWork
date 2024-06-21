import './App.css';
import HomePage from './components/homePage';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  // useEffect(() => {
  //   document.title = "Eddyville Schedules";
  // }, [])
  return (
    <div className="App">
      <Helmet>
        <title>Eddyville Schedules</title>
        <meta name="title" content="Eddyville Schedules" />
        <meta name="description" content="Cargill Eddyville Crew Schedules" />
      </Helmet>
      <header className="App-header">

        <HomePage/>
      </header>
      
    </div>
  );
}

export default App;
