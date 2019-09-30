import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from './Context';
import Contacts from './components/Contacts';

import Header from './components/Header';

function App() {
  
  return (
    <Provider>
      <div className="App">
        <Header branName="Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
