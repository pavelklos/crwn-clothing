import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import TestPage from './pages/test-page/test-page.component';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }, () => {
            // console.log(this.state);
          });
          
          // console.log(userAuth);
          // console.log(userRef);
          // console.log(snapShot);
          // console.log(snapShot.data());
        })
      }
      else (
        setCurrentUser( userAuth )
        // this.setState({ currentUser: userAuth })
      )

      // console.log(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // console.log('currentUser: ', this.state.currentUser);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/test' component={TestPage} />
          <Route path='/test/:id' component={TestPage} />
          <Route
            exact path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />) : (
                <SignInAndSignUpPage />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// state.user
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;