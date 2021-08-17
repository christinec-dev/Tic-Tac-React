import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

//Exports the App function to be used in index.js
function App() {
  return (
    <div className="App">
      <Header /> 
      <Game />
    </div>
  );
}

//Exports App Component to be used in index.js
export default App;
