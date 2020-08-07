import React, { useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import {checkUserSession} from './redux/user/user.actions'

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} /> 
      </Switch>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
