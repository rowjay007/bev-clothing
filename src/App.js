import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage/HomePage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInaAndSignUp/SignInAndSignUp";
import { auth } from "./Firebase/FirebaseUtils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
