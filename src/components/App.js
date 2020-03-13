import React from 'react';
import '../css/App.css';
import ConnectedFeiertage from '../containers/ConnectedFeiertage';
import ConnectedControlField from '../containers/ConnectedControlField';

function App() {
  return (
    <div className="App">
      <ConnectedControlField />
      <ConnectedFeiertage />
    </div>
  );
}

export default App;
