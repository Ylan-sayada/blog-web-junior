import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './common/mainComponents/Main';
import Nav from './common/mainComponents/Nav';
import CounterDay from './common/components/ect/CounterDay'
import Footer from './common/mainComponents/Footer';
import LangContext, { langData } from './utils/LangContext';
import './ressources/scss/index.scss';
import ScrollTop from './common/components/ect/ScrollTop';
function App() {
  let startTime = new Date(2021, 3, 25);
  return (
    <div className="App">
      <header className="App-header">
        <LangContext.Provider value={langData}>
          <Router>
            <ScrollTop />
            <CounterDay
              dateStart={startTime}
              foundWork={false}
            />
            <Nav />
            <Main />
            <Footer />
          </Router>
        </LangContext.Provider>
      </header>
    </div>
  );
}

export default App;
