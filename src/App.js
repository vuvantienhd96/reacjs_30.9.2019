import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from './Context';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';

function App() {
  
  return (
    <Provider>
      <div className="App">
        <Header branName="Contact Manager"/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
