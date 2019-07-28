import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TestPage = (props) => (
  <div>
    <h1>TEST PAGE</h1>
    <span>props.match.url <b>{props.match.url}</b></span><br />
    <span>props.match.path <b>{props.match.path}</b></span><br />
    <span>props.match.isExact <b>{props.match.isExact.toString()}</b></span><br />
    <span>props.match.params <b>{Object.keys(props.match.params).length}</b></span><br />
    {Object.keys(props.match.params).map((keyName, i) => (
      <div className="travelcompany-input" key={i}>
          <span className="input-label"> - key: <b>{i}</b> name: <b>{props.match.params[keyName]}</b></span>
      </div>
    ))}
    <span>props.location.pathname <b>{props.location.pathname}</b></span><br />
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/test' component={TestPage} />
        <Route path='/test/:id' component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
