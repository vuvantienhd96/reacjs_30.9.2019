import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from './Context';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact2';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  
  return (
    <Provider>
      <Router>
      <div className="App">
        <Header branName="Contact Manager"/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact/add" component={AddContact}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
