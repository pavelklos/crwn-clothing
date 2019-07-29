import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

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
  
    <h1>příliš žluťoučký kůň úpěl ďábelské ódy 1234567890</h1>
    <h1>PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ ÓDY `@#$~^&*{`{}`}°%</h1>
    <span>process.env.PUBLIC_URL <b>{process.env.PUBLIC_URL + '/photos/2019-07-01-brdy/DSC_8101.jpg'}</b></span><br />
    <span>window.location.origin <b>{window.location.origin + '/photos/2019-07-01-brdy/DSC_8101.jpg'}</b></span><br />
    <img style={{ width: 500 }} src="./photos/2019-07-01-brdy/DSC_8101.jpg" alt="brdy-2019" />
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/test' component={TestPage} />
        <Route path='/test/:id' component={TestPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
