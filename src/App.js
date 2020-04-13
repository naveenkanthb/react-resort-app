import React from 'react';
import './App.css';
import Error from './pages/Error';
import { Rooms } from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
