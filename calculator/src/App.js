import React from "react";
import CalcContainer from "./components/CalcContainer";
import background from './img/background.svg';
import './styles/App.css';

const App = () => (
  <div className="App">
    <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
      <CalcContainer>
      </CalcContainer>
    </header>
  </div>
)

export default App
