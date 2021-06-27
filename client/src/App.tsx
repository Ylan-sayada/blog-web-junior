import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './common/pages/Main';
import Nav from './common/components/ect/Nav';
import CounterDay from './common/components/ect/CounterDay';
import Footer from './common/components/ect/Footer';
import UtilsContext from './common/context/UtilsContext';
import * as utils from '../src/common/utils';
import './ressources/scss/global.scss';
import ScrollTop from './common/components/ect/ScrollTop';
function App() {
  let startTime = new Date(2021, 3, 25);
  return (
    <div className="App">
      <header className="App-header">
        <UtilsContext.Provider value={utils}>
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
        </UtilsContext.Provider>
      </header>
    </div>
  );
}

export default App;
