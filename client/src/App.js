import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { CurrentUserSet } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckOutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';


class App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  // const { setCurrentUser } = this.props;

  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   console.log(userAuth);

  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     userRef.onSnapshot(snapshot => {
  //       setCurrentUser({ id: snapshot.id, ...snapshot.data() });
  //     });
  //   }
  //   else
  //     setCurrentUser(userAuth);
  // });


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  };
}
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: (user) => dispatch(CurrentUserSet(user))
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
