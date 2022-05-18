import React from "react";
import background from './img/background.svg';
import './styles/App.css';

const App = () => (
  <div className="App">
    <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
      <p>Hello world</p>
    </header>
  </div>
)

export default App
